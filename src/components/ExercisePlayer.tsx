import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { ExerciseData, LayerData } from '../data/types'
import { percentToGrade } from '../utils/percentToGrade'
import { AudioPrompt } from './AudioPrompt'
import { ExerciseLayout } from './ExerciseLayout'
import GraphPaper from './GraphPaper'
import { QuizPrompt } from './QuizPrompt'
import { ResultPrompt } from './ResultPrompt'
import { TaskImage } from './TaskImage'

export interface ExercisePlayerProps {
  exercise: ExerciseData
}

export function ExercisePlayer({ exercise }: ExercisePlayerProps) {
  const storageKey = `head_${exercise.id}`
  const [step, setStep] = useState(0)
  const [wrongs, setWrongs] = useState<number[]>([])
  const [showNotice, setShowNotice] = useState(false)
  const [stepFinished, setStepFinished] = useState(false)
  const [reflection, setReflection] = useState('')
  const [streakReflection, setStreakReflection] = useState(false)
  const graphPaperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
      if (data.__version == 1) {
        const s = parseInt(data.step)
        setStep(s)
        setWrongs(data.wrongs.map((w: string) => parseInt(w)))
        setStepFinished(false)
        if (s > 0 && s < exercise.steps.length) {
          setShowNotice(true)
          setTimeout(() => {
            setShowNotice(false)
          }, 10000)
        }
        scrollGraphPaperToCursor(step)
      }
    } catch (e) {}
  }, [])

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ step: step, wrongs, __version: 1 })
    )
  }, [step, wrongs])

  function incrStep() {
    setStep(step + 1)
    setStepFinished(false)
    if (showNotice) setShowNotice(false)

    // preload images
    if (step + 2 < exercise.steps.length) {
      const nextStep = exercise.steps[step + 2]
      if (nextStep.layersPre) {
        for (const layer of nextStep.layersPre) {
          new Image().src = layer.src
        }
      }
      if (nextStep.layersPost) {
        for (const layer of nextStep.layersPost) {
          new Image().src = layer.src
        }
      }
    }

    scrollGraphPaperToCursor(step + 1)
  }

  function restart() {
    setStep(0)
    setWrongs([])
    localStorage.removeItem(storageKey)
    setShowNotice(false)
  }

  const currentPrompt = exercise.steps[step]?.prompt

  const quizCount = exercise.steps.filter((s) => s.prompt.type == 'quiz').length
  const quizNr = exercise.steps.filter(
    (s, i) => s.prompt.type == 'quiz' && i <= step
  ).length
  const correctPercentage =
    quizNr == 1 ? 0 : Math.round((1 - wrongs.length / (quizNr - 1)) * 100)
  const grade = percentToGrade(correctPercentage)

  const titleText = !currentPrompt
    ? 'Fertig'
    : reflection
    ? 'Reflektion'
    : currentPrompt.type == 'audio'
    ? currentPrompt.title
    : `Frage ${quizNr} / ${quizCount}${
        quizNr == 1 ? '' : `, bisher ${correctPercentage}% richtig`
      }`

  const layers: LayerData[] = []
  for (let i = 0; i <= step; i++) {
    if (i >= exercise.steps.length) continue
    const stepData = exercise.steps[i]
    if (stepData.layersPre) {
      for (const layer of stepData.layersPre) {
        layers.push(layer)
      }
    }
    if ((i < step || stepFinished) && stepData.layersPost) {
      for (const layer of stepData.layersPost) {
        layers.push(layer)
      }
    }
  }

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <ExerciseLayout
        leftTop={<TaskImage src={exercise.task} />}
        leftBottom={
          reflection ? (
            renderReflection()
          ) : (
            <div className="p-3 xl:px-6 overflow-auto">{renderPrompt()}</div>
          )
        }
        right={
          <div className="overflow-auto h-full w-full" ref={graphPaperRef}>
            <GraphPaper
              height={exercise.height}
              content={layers}
              warnings={wrongs.map((w) => exercise.steps[w].cursor)}
              cursor={
                reflection || wrongs.includes(step)
                  ? undefined
                  : exercise.steps[step]?.cursor
              }
            />
          </div>
        }
      />
      {showNotice && (
        <div
          style={{ zIndex: 200 }}
          className="fixed left-0 right-0 bottom-0 md:left-auto md:right-6 md:bottom-4 rounded bg-gray-100 p-1 shadow"
        >
          Fortschritt geladen ✓ | stattdessen{' '}
          <span
            className="text-blue-500 cursor-pointer underline"
            onClick={() => {
              const val = window.confirm('Fortschritt wird zurückgesetzt.')
              if (val) {
                restart()
              } else {
                setShowNotice(false)
              }
            }}
          >
            neu starten
          </span>
          <div
            className="absolute right-4 top-0 md:invisible text-xl cursor-pointer"
            onClick={() => setShowNotice(false)}
          >
            ×
          </div>
        </div>
      )}
    </>
  )

  function renderPrompt() {
    if (step == exercise.steps.length) {
      // result prompt
      return (
        <ResultPrompt
          grade={grade}
          text={`${
            quizCount - wrongs.length
          } von ${quizCount} Fragen richtig (${correctPercentage}% = Note ${grade})`}
          onRestart={restart}
        />
      )
    } else {
      const prompt = exercise.steps[step].prompt
      if (prompt.type == 'quiz') {
        return (
          <QuizPrompt
            data={prompt}
            onDone={(correct) => {
              if (!correct) {
                setReflection('wrong')
              } else {
                // add refection if 5 correct in a row
                let streak = 0
                for (let s = step; s >= 0; s--) {
                  if (exercise.steps[s].prompt.type == 'quiz') {
                    if (!wrongs.includes(s)) {
                      streak++
                    } else {
                      break
                    }
                  }
                }
                if (streak >= 5 && !streakReflection) {
                  setStreakReflection(true)
                  setReflection('streak')
                }
                incrStep()
              }
            }}
            onFinished={(correct) => {
              if (!correct && !wrongs.includes(step)) {
                setWrongs([...wrongs, step])
              }
              setStepFinished(true)
              scrollGraphPaperToCursor(step)
            }}
            key={step}
          />
        )
      } else {
        return (
          <AudioPrompt
            data={prompt}
            onDone={() => {
              incrStep()
            }}
            key={step}
          />
        )
      }
    }
  }

  function scrollGraphPaperToCursor(step: number) {
    if (graphPaperRef.current && step < exercise.steps.length) {
      const offsetY = exercise.steps[step].cursor.y
      const newScrollTop =
        (graphPaperRef.current.scrollWidth / 35) * offsetY -
        window.document.body.offsetHeight * 0.66
      graphPaperRef.current.scrollTop = newScrollTop
    }
  }

  function renderReflection() {
    return (
      <div
        className={`p-2 xl:px-5 h-full border-4 ${
          reflection == 'wrong' ? 'border-blue-500' : 'border-lime-500'
        } overflow-auto`}
      >
        {reflection == 'wrong' ? (
          <QuizPrompt
            data={{
              type: 'reflection',
              description:
                'Reflektion: Du hast die vorherige Frage nicht richtig beantwortet. Aus welchem Grund konntest du die Frage nicht richtig beantworten?',
              choices: [
                'Ich habe mich nicht angestrengt.',
                'Ich wusste nicht, wie ich die Frage angehen soll.',
                'Ich habe mich verrechnet oder vertan.',
                'Die Frage war für mich nicht relevant.',
                'Anderer Grund.',
              ],
              feedback: [
                'Konzentraktion! Fokus! Ohne ein bisschen Anstrengung wird auch der Lernerfolg auf sich warten lassen. Falls du schon länger übst, hilft dir vielleicht eine kurze Pause.',
                'Schaue dir die Musterlösung auf der rechten Seite an und versuche sie nachzuvollziehen. Falls dir zu dieser Aufgabe das Grundwissen fehlt, suche einen Unterlagen oder im Internet nach einer Erklärung des Themas. Vielleicht hast du auch jemand in der Nähe, der dir persönlich helfen kann?',
                'Fehler gehören zum Lernen dazu. Lerne aus deinen Fehler und versuche, sie beim nächsten Mal zu vermeiden.',
                'Kein Problem - entscheide selber darüber, welche Fragen für dich wichtig sind.',
                `%%Rückmeldung%%${exercise.id}/${step}`,
              ],
            }}
            onFinished={() => {}}
            onDone={() => {
              setReflection('')
              incrStep()
            }}
            onRepeat={() => {
              setReflection('')
              setStepFinished(false)
            }}
          />
        ) : (
          <QuizPrompt
            data={{
              type: 'reflection',
              description:
                'Herzlichen Glückwunsch! Du hast die letzten fünf Fragen in Folge richtig beantwortet. Wie ist dir das gelungen?',
              choices: [
                'Die Aufgaben fallen mir leicht.',
                'Ich habe die Antworten aus einem vorherigen Durchlauf notiert.',
                'Ich habe mir bei der Bearbeitung Mühe gegeben.',
              ],
              feedback: [
                'Das ist schön zu hören!',
                'Das ist ein erster Schritt in die richtige Richtung. Wenn du dich langsam sicherer mit den Fragen fühlst, dann überlege dir mal, die Fragen ohne Unterlagen erneut zu lösen.',
                'Bravo! Keep it up!',
              ],
            }}
            onFinished={() => {}}
            onDone={() => {
              setReflection('')
            }}
          />
        )}
      </div>
    )
  }
}
