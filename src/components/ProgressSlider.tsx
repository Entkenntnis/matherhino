export interface ProgressSliderProps {
  head: number
  step: number
  steps: number
  setStep: (val: number) => void
  wrongs: number[]
  audios: number[]
}

export function ProgressSlider({
  head,
  step,
  steps,
  setStep,
  wrongs,
  audios,
}: ProgressSliderProps) {
  const leftPercents = []
  for (let i = 0; i < steps; i++) {
    leftPercents.push(`${(100 / (steps - 1)) * i}%`)
  }
  return (
    <div className="mx-5 h-full">
      <div className="relative h-full">
        <div className="bg-gray-300 absolute inset-x-0 inset-y-4" />
        <div
          className="bg-lime-500 absolute left-0 inset-y-4"
          style={{ width: leftPercents[head] }}
        />
        {leftPercents.map((left, index) => {
          if (index > head) {
            return (
              <div
                className="absolute top-4 rounded-full h-2 w-2 -ml-1 -mt-0.5 border-gray-300 bg-white border-2"
                style={{ left }}
                key={index}
              />
            )
          }
          if (index == step) {
            return (
              <div
                className={`absolute top-4 rounded-full h-5 w-5 -ml-2.5 -mt-2 border-lime-500 ${
                  wrongs.includes(index)
                    ? 'bg-red-400'
                    : audios.includes(index) && index != head
                    ? 'bg-lime-500'
                    : index == head && head < steps - 1
                    ? 'bg-white'
                    : 'bg-lime-500'
                } border-4`}
                style={{ left }}
                key={index}
              />
            )
          } else {
            return (
              <div
                className="absolute h-6 w-6 top-4 -ml-3 -mt-2.5 flex items-center cursor-pointer justify-center"
                style={{ left }}
                key={index}
                onClick={() => {
                  setStep(index)
                }}
              >
                <div
                  className={`rounded-full h-3 w-3 border-lime-500 ${
                    wrongs.includes(index)
                      ? 'bg-red-400'
                      : audios.includes(index) && index != head
                      ? 'bg-lime-500'
                      : index == head && head < steps - 1
                      ? 'bg-white'
                      : 'bg-lime-500'
                  } border-2 transition`}
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
