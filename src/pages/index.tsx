import Head from 'next/head'
import Link from 'next/link'
import { PlayIcon } from '../components/icons/PlayIcon'

export default function Home() {
  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>Das alte Nashorn</title>
      </Head>

      <h1 className="text-3xl sm:text-5xl mt-8 sm:mt-16 text-gray-900">
        Das alte Nashorn
      </h1>

      <img
        className="mt-4"
        src="/nashorn.png"
        alt="Nashorn"
        style={{ width: 500 }}
      />

      <p className="text-xl mt-6 text-gray-700">
        Gewinnt keine Schönheitswettbewerbe mehr, kann dafür gut Mathematik
        erklären
      </p>

      <h2 className="text-3xl mt-10 mb-8 border-b-2 border-gray-100">Themen</h2>

      <div className="mt-8">
        <h3 className="text-2xl mt-2 mb-4">
          Mittlerer Schulabschluss (Realschule) Bayern, 2018, Zweig I
        </h3>

        <ul className="mt-3 list-disc list-inside">
          <li>
            <Link href="/2" passHref>
              <a className="text-blue-500">Aufgabe A1</a>
            </Link>
            :{' '}
            <span className="text-gray-700">
              Exponentialfunktion, Gleichung lösen, Logarithmus
            </span>
          </li>
          <li>Aufgabe A2 (coming soon)</li>
          <li>Aufgabe A3 (coming soon)</li>
          <li>Aufgabe B1 (coming soon)</li>
          <li>Aufgabe B2 (coming soon)</li>
        </ul>
      </div>

      {/*<div className="mt-8">
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
  </div>*/}

      <h2 className="text-3xl mt-20 mb-4 border-b-2 border-gray-100">
        Spenden
      </h2>

      <p className="mb-10">
        Hat dir NASHORN weitergeholfen? Unterstütze die weitere Entwicklung mit{' '}
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
