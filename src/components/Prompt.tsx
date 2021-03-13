import { useEffect, useRef, useState } from 'react'
import type {
  AudioPrompt as AudioPromptData,
  Prompt as PromptData,
  QuizPrompt as QuizPromptData,
} from '../data'

export interface PromptProps {
  data: PromptData
  moveForward?: () => void
  step: number
  addWrong: () => void
}

export function Prompt({ data, moveForward, step, addWrong }: PromptProps) {
  if (data.type == 'static') {
    return (
      <>
        <div className="my-6">{data.description}</div>
        {moveForward && (
          <button
            className="bg-lime-300 rounded p-2 inline-flex mt-5"
            onClick={moveForward}
          >
            Weiter
          </button>
        )}
      </>
    )
  }
  if (data.type == 'audio') {
    return (
      <AudioPrompt
        data={data}
        moveForward={moveForward!}
        key={step}
        step={step}
      />
    )
  }
  return (
    <QuizPrompt
      data={data}
      moveForward={moveForward!}
      key={step}
      addWrong={addWrong}
    />
  )
}

function AudioPrompt({
  data,
  moveForward,
  step,
}: {
  data: AudioPromptData
  moveForward: () => void
  step: number
}) {
  if (data.type != 'audio') throw 'bad'

  const [started, setStarted] = useState(false)
  const audio = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
    audio.current = new Audio(data.src)
    audio.current.load()
    return () => {
      audio.current?.pause()
    }
  }, [])

  return (
    <>
      <h2 className="text-3xl my-2">{data.title}</h2>
      {started ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 512"
            className="w-20 h-20 m-3 animate-pulse"
          >
            <path
              fill="currentColor"
              d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.53 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"
            ></path>
          </svg>
          <button
            className="bg-lime-500 rounded p-2 inline-flex mt-2"
            onClick={() => {
              audio.current?.pause()
              audio.current = null
              setStarted(false)
              if (moveForward) moveForward()
            }}
          >
            Weiter
          </button>
        </>
      ) : (
        <button
          className="bg-lime-500 rounded p-2 inline-flex items-center mt-5"
          onClick={() => {
            if (audio.current) {
              audio.current.play()
              setStarted(true)
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 h-4 mr-2"
          >
            <path
              fill="currentColor"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            ></path>
          </svg>
          Wiedergabe
        </button>
      )}
    </>
  )
}

function QuizPrompt({
  data,
  moveForward,
  addWrong,
}: {
  data: QuizPromptData
  moveForward: () => void
  addWrong: () => void
}) {
  const [choices, setChoices] = useState<any>(() =>
    [
      { correct: true, id: 0, value: data.correctChoice },
      { correct: false, id: 1, value: data.wrong1 },
      { correct: false, id: 2, value: data.wrong2 },
    ].sort(() => Math.random() - 0.5)
  )
  const [selected, setSelected] = useState<number[]>([])
  const [isCorrect, setIsCorrect] = useState(false)

  return (
    <>
      <div className="mt-3 mb-5">{data.description}</div>
      {choices.map((choice: any) => (
        <div
          key={choice.id}
          className={`p-3 border rounded ${
            selected.includes(choice.id)
              ? choice.correct
                ? 'bg-lime-500'
                : 'bg-gray-300 line-through text-gray-500'
              : isCorrect
              ? ''
              : 'hover:bg-gray-300 cursor-pointer '
          } transition border-gray-400 my-3 select-none`}
          onClick={() => {
            if (!isCorrect && !selected.includes(choice.id)) {
              setSelected([...selected, choice.id])
              if (choice.correct) {
                setIsCorrect(true)
              } else {
                addWrong()
              }
            }
          }}
        >
          {choice.value}
        </div>
      ))}
      {isCorrect && (
        <button
          className="bg-lime-500 rounded p-2 inline-flex mt-5"
          onClick={() => {
            if (moveForward) moveForward()
          }}
        >
          Weiter
        </button>
      )}
    </>
  )
}
