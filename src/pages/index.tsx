import Head from 'next/head'
import Link from 'next/link'
import { PlayIcon } from '../components/icons/PlayIcon'

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <Head>
        <title>BERTA - Mathematik Lernen mit Spaß für die Sekundarstufe</title>
      </Head>

      <h1 className="text-5xl mt-16 text-gray-900">BERTA</h1>
      <p className="text-xl mt-6 text-gray-700">
        Mathematik Lernen mit Spaß für die Sekundarstufe
      </p>

      <h2 className="text-3xl mt-20 mb-8 border-b-2 border-gray-100">Themen</h2>

      {/*<div className="p-4 rounded-xl border-blue-100 border-2">
        <h3 className="text-2xl mt-2 mb-4">
          Mittlerer Schulabschluss (Realschule) Bayern, 2018, Zweig I
        </h3>

        <ul className="mt-3 list-disc list-inside">
          <li>
            <a href="" className="text-blue-500">
              Aufgabe A1
            </a>
            :{' '}
            <span className="text-gray-700">
              Exponentialfunktion, Gleichung, Logarithmus
            </span>
          </li>
          <li>
            <a href="" className="text-blue-500">
              Aufgabe A2
            </a>
            :{' '}
            <span className="text-gray-700">
              Raumgeometrie, Trigonometrie, Schrägbild, Tangens,
              Vierstreckensatz
            </span>
          </li>
          <li>
            <a href="" className="text-blue-500">
              Aufgabe A3
            </a>
            : <span className="text-gray-700">---</span>
          </li>
          <li>
            <a href="" className="text-blue-500">
              Aufgabe B1
            </a>
            : <span className="text-gray-700">---</span>
          </li>
          <li>
            <a href="" className="text-blue-500">
              Aufgabe B2
            </a>
            : <span className="text-gray-700">---</span>
          </li>
        </ul>
  </div>*/}

      <div className="mt-8">
        <h3 className="text-2xl mt-2 mb-4">Prototypen</h3>

        <ul className="mt-3 list-disc list-inside">
          <li>
            <a href="/1" className="text-blue-500">
              Realschule 10. Klasse Buch S. 118 Aufgabe 1
            </a>
            :{' '}
            <span className="text-gray-700">
              Trigonometrie, Tangens, Sinus, Kosinus, Satz des Pythagoras,
              Flächeninhalt mit Sinus, Sinussatz, Vierstreckensatz
            </span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl mt-20 mb-4 border-b-2 border-gray-100">
        Spenden
      </h2>

      <p>
        Hat dir BERTA weitergeholfen? Unterstütze die weitere Entwicklung mit{' '}
        <a
          href="http://paypal.me/Dav1dL1"
          target="_blank"
          className="hover:underline text-blue-500"
        >
          einer Spende
        </a>
        .
      </p>

      {/*<div className="h-40" />

      <p className="mb-2">
        <a href="" className="text-blue-500 hover:underline">
          Kontakt / Datenschutz / Lizenz
        </a>
</p>*/}
    </div>
  )
}

function Start({ title, href }: { title: string; href: string }) {
  return (
    <p className="mt-6">
      <Link href={href}>
        <a href={href}>
          {' '}
          <button className="bg-lime-400 hover:bg-gray text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center">
            <PlayIcon className="w-4 h-4 mr-2" />
            <span>{title}</span>
          </button>
        </a>
      </Link>
    </p>
  )
}
