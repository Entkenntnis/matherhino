import Head from 'next/head'

export interface SelectProgressProps {
  onContinue: () => void
  onReset: () => void
}

export function SelectProgress({ onContinue, onReset }: SelectProgressProps) {
  return (
    <>
      <Head>
        <title>MatheRhino</title>
      </Head>
      <div className="h-full flex flex-col justify-center">
        <div className="mx-auto flex flex-col align-middle  ">
          <button
            className="p-3 border-blue-500 border-2 select-none rounded m-2"
            onClick={onContinue}
          >
            Aufgabe mit vorhandenem Fortschritt fortsetzen
          </button>
          <br />
          <button
            className="mt-3 text-blue-500 cursor-pointer underline"
            onClick={onReset}
          >
            Aufgabe neu starten
          </button>
        </div>
      </div>
    </>
  )
}
