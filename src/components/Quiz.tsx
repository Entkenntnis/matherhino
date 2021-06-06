import clsx from 'clsx'
import { QuizData } from '../data/types'

export interface QuizProps {
  quiz: QuizData
  selected: number[]
  shuffling: number[]
  smallHeight: boolean
  noBorder?: boolean
  interactive: boolean
  onSelect: (index: number) => void
}

export function Quiz({
  quiz,
  selected,
  shuffling,
  smallHeight,
  noBorder,
  interactive,
  onSelect,
}: QuizProps) {
  const entries = [
    { id: 0, value: quiz.correctChoice },
    { id: 1, value: quiz.wrong1 },
    { id: 2, value: quiz.wrong2 },
  ]

  return (
    <div className={clsx('mx-auto relative', !noBorder && 'max-w-xl')}>
      <div
        className={clsx(
          !noBorder && 'border-2 rounded border-gray-200',
          'px-3',
          smallHeight ? 'pt-3' : 'pt-3 mt-6 sm:mt-13 xl:mt-20'
        )}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: quiz.description,
          }}
        />
        <div
          className={`flex flex-wrap ${
            smallHeight ? 'mt-6' : 'mt-6 sm:mt-8'
          } items-center justify-evenly`}
        >
          {shuffling.map((index) => (
            <button
              key={index}
              onClick={() => {
                if (interactive) onSelect(index)
              }}
              className={`px-4 py-2 rounded bg-gray-100 ${
                smallHeight ? 'mr-4 mb-4' : 'mr-6 mb-6'
              } select-none ${
                selected.includes(index)
                  ? index == 0
                    ? 'bg-lime-500 cursor-auto'
                    : 'line-through text-gray-500 bg-yellow-500 cursor-auto'
                  : interactive
                  ? 'cursor-pointer'
                  : 'cursor-auto'
              }`}
              dangerouslySetInnerHTML={{ __html: entries[index].value }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
