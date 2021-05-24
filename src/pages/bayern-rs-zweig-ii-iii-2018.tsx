import Link from 'next/link'
import { Card } from '../components/Card'
import { ChevronLeft } from '../components/icons/ChevronLeftIcon'

export default function Page() {
  return (
    <>
      <title>
        Bayern, Realschulabschlussprüfung, Zweig II/III, 2018 - MatheRhino
      </title>
      <div className="flex bg-gray-100 h-12 items-center justify-center relative">
        <Link href="/">
          <div className="absolute w-4 h-4 sm:w-6 sm:h-6 left-1 cursor-pointer text-gray-300">
            <ChevronLeft className="w-full h-full " />
          </div>
        </Link>
        <div>Thema</div>
      </div>
      <div className="max-w-xl mx-auto">
        <img src="/landing/rs_by.png" className="mx-auto w-24 mt-8" />
        <h1 className="text-center text-3xl mt-8">
          Bayern, Realschulabschlussprüfung, Zweig&nbsp;II/III, 2018
        </h1>

        <Card
          id={7}
          title="A1"
          topics="Exponentialfunktion, Prozentrechnung, Graph einer Funktion"
        />

        <Card
          id={8}
          title="A2"
          topics="Ebene Geometrie, Flächeninhalt mit Sinus, Sinussatz, Kosinussatz, Satz des Pythagoras, Kreissektor"
        />

        <Card
          id={9}
          title="A3"
          topics="Raumgeometrie, Tangens, Sinussatz, Volumen eines Kegels, Prozentrechnung"
        />

        <Card
          id={10}
          title="B1"
          topics="Funktionen, Parabel, Gleichungssystem, Rauten, Tangens, Satz des Pythagoras, Mittelpunkt, Maximum"
        />

        <Card id={11} title="B2 (todo)" topics="coming soon" />

        <div className="my-20 text-center text-lg">
          Finde{' '}
          <a
            href="https://de.serlo.org/76750"
            target="_blank"
            className="text-blue-500 underline"
          >
            zusätzliche Inhalte auf Serlo
          </a>
          !
          <br />
          <small>
            Zum Beispiel: Weitere Prüfungen, Videos, Erklärungen, ...
          </small>
        </div>
      </div>
    </>
  )
}
