import { useState } from 'react'
import { QuizPromptData } from '../data/types'
import { shuffleArray } from '../utils/shuffleArray'
import { RedoIcon } from './icons/RedoIcon'

export interface ReflexionPromptData {
  type: 'reflection'
  description: string
  choices: string[]
  feedback: string[]
}

export interface QuizPromptProps {
  data: QuizPromptData | ReflexionPromptData
  onDone: (correct: boolean) => void
  onFinished: (correct: boolean) => void
  onRepeat?: () => void
}

export function QuizPrompt({
  data,
  onDone,
  onFinished,
  onRepeat,
}: QuizPromptProps) {
  const [choices, setChoices] = useState(() =>
    shuffleArray(
      data.type == 'quiz'
        ? [
            { correct: true, id: 0, value: data.correctChoice },
            { correct: false, id: 1, value: data.wrong1 },
            { correct: false, id: 2, value: data.wrong2 },
          ]
        : data.choices.map((choice, index) => {
            return { id: index, value: choice, correct: true }
          })
    )
  )
  const [selected, setSelected] = useState<number[]>([])
  const [isCorrect, setIsCorrect] = useState(false)

  return (
    <>
      <div className="mt-3 mb-5">{data.description}</div>
      {choices.map((choice: any) => (
        <div
          key={choice.id}
          className={`${
            data.type == 'quiz' ? 'p-3 my-3' : 'p-1 my-2'
          } border rounded ${
            selected.includes(choice.id)
              ? choice.correct
                ? data.type == 'quiz'
                  ? 'bg-lime-500'
                  : 'bg-blue-300'
                : 'bg-gray-300 line-through text-gray-500'
              : isCorrect
              ? ''
              : 'hover:bg-gray-300 cursor-pointer '
          } transition border-gray-400  select-none`}
          onClick={() => {
            if (!isCorrect && !selected.includes(choice.id)) {
              const newSelected = [...selected, choice.id]
              setSelected(newSelected)
              if (choice.correct) {
                setIsCorrect(true)
                onFinished(newSelected.length == 1)
              }
            }
          }}
        >
          {choice.value}
        </div>
      ))}
      {data.type == 'reflection' && isCorrect && (
        <p className="mt-6 mb-6">
          {data.feedback[selected[0]].startsWith('%%Rückmeldung%%') ? (
            <>
              Du kannst eine Mitteilung über dieses{' '}
              <a
                target="_blank"
                className="underline text-blue-500 cursor-pointer"
                href={`https://docs.google.com/forms/d/e/1FAIpQLSdCeqCU_clJ1s0lDXmQrVT8OsyCB4MSGyGn4CcuFrxpVssw8g/viewform?usp=pp_url&entry.821371224=${encodeURIComponent(
                  data.feedback[selected[0]].substring(15)
                )}`}
              >
                Rückmelde-Formular
              </a>{' '}
              schicken.
            </>
          ) : (
            data.feedback[selected[0]]
          )}
        </p>
      )}
      {isCorrect && (
        <div className={data.type == 'quiz' ? '' : 'flex justify-between'}>
          {onRepeat && (
            <button
              className={`${
                selected.length == 1 && data.type == 'quiz'
                  ? 'bg-lime-500'
                  : 'bg-blue-300'
              } rounded p-2 inline-flex mt-5 mb-4`}
              onClick={onRepeat}
            >
              <RedoIcon className="w-4 h-5 mr-2 pt-1" />
              Vorherige Frage erneut anzeigen
            </button>
          )}
          <button
            className={`${
              selected.length == 1 && data.type == 'quiz'
                ? 'bg-lime-500'
                : 'bg-blue-300'
            } rounded p-2 inline-flex mt-5 mb-4`}
            onClick={() => onDone(selected.length == 1)}
          >
            Weiter
          </button>
        </div>
      )}
    </>
  )
}
