import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Exercise } from '../data'
import GraphPaper from './GraphPaper'
import { ProgressBar } from './ProgressBar'
import { ProgressSlider } from './ProgressSlider'
import { Prompt } from './Prompt'

export interface ExercisePlayerProps {
  exercise: Exercise
}

function percentToGrade(p: number) {
  if (p >= 90) return 1
  if (p >= 80) return 2
  if (p >= 70) return 3
  if (p >= 60) return 4
  if (p >= 30) return 5
  return 6
}

export function ExercisePlayer({ exercise }: ExercisePlayerProps) {
  const storageKey = `head_${exercise.id}`
  const [head, setHead] = useState(0)
  const [step, setStep] = useState(head)
  const [wrongs, setWrongs] = useState<number[]>([])

  useEffect(() => {
    loadFromLocalStorage()
    window.onbeforeunload = () => {
      sessionStorage.removeItem(storageKey)
      return 'Fortschritt geht verloren'
    }
  }, [])

  useEffect(() => {
    saveToLocalStorage()
  }, [head, step, wrongs])

  function loadFromLocalStorage() {
    try {
      const data = JSON.parse(sessionStorage.getItem(storageKey) || '{}')
      if (data.head !== undefined && data.step !== undefined && data.wrongs) {
        setHead(data.head)
        setStep(data.step)
        setWrongs(data.wrongs)
      }
    } catch (e) {
      //
    }
  }

  function saveToLocalStorage() {
    sessionStorage.setItem(storageKey, JSON.stringify({ head, step, wrongs }))
  }

  const moveForward = () => {
    const newStep = step + 1
    setStep(newStep)
    if (newStep > head) {
      setHead(newStep)
    }
  }

  const addWrong = () => {
    if (!wrongs.includes(step) && step == head) {
      setWrongs([...wrongs, step])
      saveToLocalStorage()
    }
  }

  const visibleLayers: any = []

  for (let i = 0; i < step; i++) {
    visibleLayers.push.apply(visibleLayers, exercise.steps[i].layers)
  }

  const quizes = exercise.steps.filter(
    (exercise) => exercise.prompt.type == 'quiz'
  ).length
  const correct = quizes - wrongs.length

  const warnings = []

  for (let i = 0; i <= head && i < exercise.steps.length; i++) {
    if (wrongs.includes(i)) {
      warnings.push(exercise.steps[i].focus)
    }
  }

  return (
    <>
      <Head>
        <title>
          Schritt {step + 1} von {exercise.steps.length + 1}
        </title>
      </Head>
      <div
        className="w-full remainingHeight flex"
        style={{ height: 'calc(100vh - 0px)' }}
      >
        <div className="w-1/2 flex-none  flex flex-col">
          <div className="h-1/2 flex-none overflow-y-auto">
            <img
              className="w-full"
              style={{ minWidth: 700 }}
              src={exercise.task}
            />
          </div>
          <div className="h-1/2 flex-none p-3 xl:mx-4 overflow-auto">
            {step < exercise.steps.length ? (
              <Prompt
                data={exercise.steps[step].prompt}
                moveForward={
                  step < exercise.steps.length ? moveForward : undefined
                }
                step={step}
                addWrong={addWrong}
              />
            ) : (
              <div>
                <img
                  src={
                    Math.round((correct / quizes) * 100) < 60
                      ? '/finish_sad.png'
                      : 'finish.png'
                  }
                />
                <p className="mt-4">
                  {correct} von {quizes} richtig (
                  {Math.round((correct / quizes) * 100)}%) = Note{' '}
                  {percentToGrade(Math.round((correct / quizes) * 100))}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 flex-none overflow-auto">
          <GraphPaper
            content={visibleLayers}
            height={exercise.height}
            focus={exercise.steps[step]?.focus}
            warnings={warnings}
          />
        </div>
      </div>
    </>
  )
}
