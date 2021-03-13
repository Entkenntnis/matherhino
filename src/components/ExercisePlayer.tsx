import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Exercise } from '../data'
import GraphPaper from './GraphPaper'
import { ProgressSlider } from './ProgressSlider'
import { Prompt } from './Prompt'

export interface ExercisePlayerProps {
  exercise: Exercise
}

function percentToGrade(p: number) {
  if (p >= 85) return 1
  if (p >= 70) return 2
  if (p >= 55) return 3
  if (p >= 40) return 4
  if (p >= 20) return 5
  return 6
}

export function ExercisePlayer({ exercise }: ExercisePlayerProps) {
  const storageKey = `head_${exercise.id}`
  const [head, setHead] = useState(0)
  const [step, setStep] = useState(head)
  const [wrongs, setWrongs] = useState<number[]>([])

  useEffect(() => {
    const progress = 0 //parseInt(localStorage.getItem(storageKey) ?? '0')
    setHead(progress)
    setStep(progress)
  }, [])

  const moveForward = () => {
    const newStep = step + 1
    setStep(newStep)
    if (newStep > head) {
      setHead(newStep)
      localStorage.setItem(storageKey, newStep.toString())
    }
  }

  const addWrong = () => {
    if (!wrongs.includes(step) && step == head) {
      setWrongs([...wrongs, step])
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

  return (
    <>
      <Head>
        <title>
          Schritt {step + 1} von {exercise.steps.length + 1}
        </title>
      </Head>
      <div className="w-full h-9">
        <ProgressSlider
          step={step}
          head={head}
          setStep={setStep}
          steps={exercise.steps.length + 1}
          wrongs={wrongs}
          audios={exercise.steps.reduce((acc, val, index) => {
            if (val.prompt.type == 'audio') acc.push(index)
            return acc
          }, [] as number[])}
        />
      </div>
      <div
        className="w-full remainingHeight flex"
        style={{ height: 'calc(100vh - 36px)' }}
      >
        <div className="w-1/2 flex-none  flex flex-col">
          <div className="h-1/2 flex-none overflow-y-auto">
            <img
              className="w-full"
              style={{ minWidth: 700 }}
              src={exercise.task}
            />
          </div>
          <div className="h-1/2 flex-none p-3 xl:mx-4">
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
                <h2 className="text-3xl my-2">Geschafft!</h2>
                <p className="mt-4">
                  Quiz: {correct} von {quizes} richtig (
                  {Math.round((correct / quizes) * 100)}%)
                </p>
                <p className="mt-4">
                  Entspricht Note{' '}
                  {percentToGrade(Math.round((correct / quizes) * 100))}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 flex-none overflow-auto">
          <GraphPaper content={visibleLayers} height={exercise.height} />
        </div>
      </div>
    </>
  )
}
