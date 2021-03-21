import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { ExerciseData, LayerData, QuizPromptData } from '../data/types'
import { percentToGrade } from '../utils/percentToGrade'
import { AudioPrompt } from './AudioPrompt'
import { ExerciseLayout } from './ExerciseLayout'
import GraphPaper from './GraphPaper'
import { WarningIcon } from './icons/WarningIcon'
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
  const [reviewDone, setReviewDone] = useState(false)

  const isReview = step == exercise.steps.length

  const [reviewStep, setReviewStep] = useState(isReview ? step : Infinity)

  const uiStep = Math.min(step, reviewStep)

  const graphPaperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (graphPaperRef.current && isReview && uiStep < exercise.steps.length) {
      const offsetY = exercise.steps[uiStep].cursor.y
      const newScrollTop =
        (graphPaperRef.current.scrollWidth / 35) * offsetY -
        window.document.body.offsetHeight * 0.66
      graphPaperRef.current.scrollTop = newScrollTop
    }
  }, [uiStep])

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || '{}')
      if (data.__version == 1) {
        const s = parseInt(data.step)
        setStep(s)
        if (s == exercise.steps.length) setReviewStep(s)
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
    setReviewDone(false)
    if (showNotice) setShowNotice(false)
    if (step + 1 == exercise.steps.length) setReviewStep(step + 1)

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
    setReviewDone(false)
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
  const layerEnd = uiStep + (reviewDone ? 1 : 0)
  for (let i = 0; i <= layerEnd; i++) {
    if (i >= exercise.steps.length) continue
    const stepData = exercise.steps[i]
    for (const layer of stepData.layers) {
      layers.push(layer)
    }
    if (i < layerEnd && stepData.layersAfter) {
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
        leftBottom={renderBottomLeft()}
        right={
          <div className="overflow-auto h-full w-full" ref={graphPaperRef}>
            <GraphPaper
              height={exercise.height}
              content={layers}
              warnings={wrongs
                .filter((w) => w < uiStep)
                .map((w) => exercise.steps[w].cursor)}
              cursor={exercise.steps[uiStep]?.cursor}
            />
          </div>
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

  function renderBottomLeft() {
    const entries: { index: number; nr: number }[] = []
    let nr = 1
    exercise.steps.forEach((step, index) => {
      if (step.prompt.type == 'quiz') {
        entries.push({ index, nr: nr++ })
      }
    })
    entries.push({ index: exercise.steps.length, nr: -1 })
    entries.reverse()
    if (isReview) {
      return (
        <div className="flex h-full">
          <div className="flex-none w-36 divide-y-2 divide-gray-200 overflow-y-auto h-full">
            {entries.map(({ index, nr }) => (
              <div
                key={nr}
                className={`cursor-pointer py-1 pl-3 ${
                  reviewStep == index ? 'bg-blue-100' : ''
                }`}
                onClick={() => {
                  setReviewStep(index)
                  setReviewDone(false)
                }}
              >
                {index < exercise.steps.length ? (
                  `Frage ${nr}`
                ) : (
                  <strong>Auswertung</strong>
                )}
                {wrongs.includes(index) ? (
                  <>
                    {' '}
                    <WarningIcon className="text-yellow-500 h-4 pb-0.5 inline" />
                  </>
                ) : null}
              </div>
            ))}
          </div>
          <div className="bg-gray-100 w-0.5"></div>
          <div className="p-3 xl:px-6 overflow-auto flex-1">
            {renderPrompt()}
          </div>
        </div>
      )
    } else {
      return <div className="p-3 xl:px-6 overflow-auto">{renderPrompt()}</div>
    }
  }

  function renderPrompt() {
    if (uiStep == exercise.steps.length) {
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
      const prompt = exercise.steps[uiStep].prompt
      if (prompt.type == 'quiz') {
        return (
          <QuizPrompt
            data={prompt}
            onSuccess={() => {
              setReviewDone(true)
            }}
            onDone={
              isReview
                ? undefined
                : (correct) => {
                    if (!correct) {
                      setWrongs([...wrongs, step])
                    }
                    incrStep()
                  }
            }
            key={uiStep}
          />
        )
      } else {
        return <AudioPrompt data={prompt} onDone={incrStep} key={uiStep} />
      }
    }
  }
}
