import { useState } from 'react'
import { QuizPromptData } from '../data/types'
import { shuffleArray } from '../utils/shuffleArray'

export interface QuizPromptProps {
  data: QuizPromptData
  onDone: (correct: boolean) => void
}

export function QuizPrompt({ data, onDone }: QuizPromptProps) {
  const [choices, setChoices] = useState(() =>
    shuffleArray([
      { correct: true, id: 0, value: data.correctChoice },
      { correct: false, id: 1, value: data.wrong1 },
      { correct: false, id: 2, value: data.wrong2 },
    ])
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
          onClick={() => onDone(selected.length == 1)}
        >
          Weiter
        </button>
      )}
    </>
  )
}
