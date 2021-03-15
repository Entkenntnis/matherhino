export interface ResultPromptProps {
  grade: number
  text: string
  onRestart: () => void
}

export function ResultPrompt({ grade, text, onRestart }: ResultPromptProps) {
  return (
    <div>
      <img
        src={
          grade >= 5
            ? '/finish_sad.png'
            : grade >= 2
            ? '/finish.png'
            : '/finish_1.png'
        }
      />
      <p className="mt-4">{text}</p>
      <p>
        <span
          className="underline text-blue-500 cursor-pointer select-none"
          onClick={onRestart}
        >
          Neu starten
        </span>
      </p>
    </div>
  )
}
