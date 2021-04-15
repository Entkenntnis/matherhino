import { QuizData } from '../data/types'

export interface QuizProps {
  quiz: QuizData
  selected: number[]
  shuffling: number[]
  smallHeight: boolean
  interactive: boolean
  onSelect: (index: number) => void
  jokers?: number
}

export function Quiz({
  quiz,
  selected,
  shuffling,
  smallHeight,
  interactive,
  onSelect,
  jokers,
}: QuizProps) {
  const entries = [
    { id: 0, value: quiz.correctChoice },
    { id: 1, value: quiz.wrong1 },
    { id: 2, value: quiz.wrong2 },
  ]

  return (
    <div className="max-w-xl mx-auto relative">
      {jokers !== undefined && jokers > 0 && (
        <div className="text-gray-500 absolute right-1 top-1">
          Jokers: {jokers}
        </div>
      )}
      <div className="mx-3">
        <p
          className={`${smallHeight ? 'pt-3' : 'pt-6 sm:pt-16 xl:pt-24'}`}
          dangerouslySetInnerHTML={{
            __html: quiz.description,
          }}
        />
        <div
          className={`flex flex-wrap ${
            smallHeight ? 'mt-4' : 'mt-6 sm:mt-12'
          } items-center justify-evenly`}
        >
          {shuffling.map((index) => (
            <div
              key={index}
              onClick={() => {
                if (interactive) onSelect(index)
              }}
              className={`px-4 py-2 rounded bg-gray-100 ${
                smallHeight ? 'mr-4 mb-4' : 'mr-6 mb-6'
              } select-none ${
                selected.includes(index)
                  ? index == 0
                    ? 'bg-lime-500'
                    : 'line-through text-gray-500 bg-yellow-500'
                  : interactive
                  ? 'cursor-pointer'
                  : ''
              }`}
              dangerouslySetInnerHTML={{ __html: entries[index].value }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
