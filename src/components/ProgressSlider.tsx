export interface ProgressSliderProps {
  head: number
  step: number
  steps: number
  setStep: (val: number) => void
  checkPoints: {
    correct: number
    id: number
  }[]
}

export function ProgressSlider({
  head,
  step,
  steps,
  setStep,
  checkPoints,
}: ProgressSliderProps) {
  const leftPercents = []
  for (let i = 0; i < steps; i++) {
    leftPercents.push(`${(100 / (steps - 1)) * i}%`)
  }
  return (
    <div className="mx-5 h-full">
      <div className="relative h-full ">
        <div className="bg-gray-300 absolute inset-x-0 inset-y-4" />
        <div
          className="bg-lime-500 absolute left-0 inset-y-4"
          style={{
            width:
              leftPercents[
                checkPoints.filter((cp) => cp.id <= head).length - 1
              ],
          }}
        />
        {leftPercents.map((left, index) => {
          console.log('mark', index, checkPoints[index])
          if (index > checkPoints.length - 1 || checkPoints[index].id > head) {
            return (
              <div
                className="absolute top-4 rounded-full h-2 w-2 -ml-1 -mt-0.5 border-gray-300 bg-white border-2"
                style={{ left }}
                key={index}
              />
            )
          }
          if (
            checkPoints[index].id <= step &&
            (index == checkPoints.length - 1 ||
              checkPoints[index + 1].id > step)
          ) {
            return (
              <div
                className={`absolute top-4 rounded-full h-5 w-5 -ml-2.5 -mt-2 border-lime-500 ${
                  checkPoints[index].correct == 2
                    ? 'bg-red-400'
                    : checkPoints[index].correct == 3 && head < steps - 1
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
                  setStep(checkPoints[index].id)
                }}
              >
                <div
                  className={`rounded-full h-3 w-3 border-lime-500 ${
                    checkPoints[index].correct == 2
                      ? 'bg-red-400'
                      : checkPoints[index].correct == 3 && head < steps - 1
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
