export interface TaskImageProps {
  src: string
}

export function TaskImage({ src }: TaskImageProps) {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="overflow-auto">
        <img className="w-full flex-shrink min-w-500 xl:min-w-700" src={src} />
      </div>
    </div>
  )
}
