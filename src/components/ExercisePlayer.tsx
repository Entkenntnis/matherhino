import Head from 'next/head'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
      if (data.__version == 1) {
        const s = parseInt(data.step)
        setStep(s)
        setWrongs(data.wrongs.map((w: string) => parseInt(w)))
        if (s > 0 && s < exercise.steps.length) {
          setShowNotice(true)
          setTimeout(() => {
            setShowNotice(false)
          }, 10000)
        }
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
    if (showNotice) setShowNotice(false)

    // preload images
    if (step + 2 < exercise.steps.length) {
      const nextStep = exercise.steps[step + 2]
      for (const layer of nextStep.layers) {
        new Image().src = layer.src
      }
      if (nextStep.layersAfter) {
        for (const layer of nextStep.layersAfter) {
          new Image().src = layer.src
        }
      }
    }
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
    : currentPrompt.type == 'audio'
    ? currentPrompt.title
    : `Frage ${quizNr} / ${quizCount}${
        quizNr == 1 ? '' : ` | ${correctPercentage}% richtig | Note ${grade}`
      }`

  const layers: LayerData[] = []
  for (let i = 0; i <= step; i++) {
    if (i >= exercise.steps.length) continue
    const stepData = exercise.steps[i]
    for (const layer of stepData.layers) {
      layers.push(layer)
    }
    if (i < step && stepData.layersAfter) {
      for (const layer of stepData.layersAfter) {
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
          <div className="p-3 xl:px-6 overflow-auto">{renderPrompt()}</div>
        }
        right={
          <GraphPaper
            height={exercise.height}
            content={layers}
            warnings={wrongs.map((w) => exercise.steps[w].cursor)}
            cursor={exercise.steps[step]?.cursor}
          />
        }
      />
      {showNotice && (
        <div
          style={{ zIndex: 200 }}
          className="fixed left-0 right-0 bottom-0 md:left-auto md:right-6 md:bottom-4 rounded bg-lime-100 p-1 shadow"
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
                setWrongs([...wrongs, step])
              }
              incrStep()
            }}
            key={step}
          />
        )
      } else {
        return <AudioPrompt data={prompt} onDone={incrStep} key={step} />
      }
    }
  }
}
