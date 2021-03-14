export interface ProgressSliderProps {
  percent: number
}

export function ProgressBar({ percent }: ProgressSliderProps) {
  const width = `${percent * 100}%`
  return (
    <div className="h-full bg-gray-300 ">
      <div className="h-full bg-lime-400" style={{ width }}></div>
    </div>
  )
}
