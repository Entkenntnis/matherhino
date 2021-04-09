import Head from 'next/head'
import { Card } from '../components/Card'

export default function Home() {
  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>MatheRhino</title>
      </Head>

      <h1 className="text-3xl sm:text-5xl mt-8 sm:mt-16 text-gray-900">
        MatheRhino
      </h1>

      <img
        className="mt-4"
        src="/nashorn.png"
        alt="Nashorn"
        style={{ width: 500 }}
      />

      <p className="text-xl mt-6 text-gray-700">
        Bearbeite Aufgaben interaktiv. Wähle dein Thema und beginne mit dem
        Üben:
      </p>

      <div className="mt-32">
        <h3 className="text-3xl mt-2 mb-12">
          Mittlerer Schulabschluss (Realschule) Bayern, 2018, Zweig I
        </h3>

        <Card
          id={2}
          count={22}
          title="A1"
          topics="Exponentialfunktion, Gleichung lösen, Logarithmus"
        />

        <Card
          id={3}
          count={27}
          title="A2"
          topics="Raumgeometrie, Trigonometrie, Strahlensatz, Flächen und Volumen"
        />

        <ul className="mt-16 list-disc list-inside">
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

      <h2 className="text-3xl mt-60 mb-4 border-b-2 border-gray-100">
        Unterstützung
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

      <div className="h-30" />

      <p className="mb-6">
        <span
          className="cursor-pointer text-blue-500 hover:underline"
          onClick={() => {
            const result = confirm(
              'Möchtest du deinen gesamten Lernfortschritt auf diesem Gerät zurücksetzen?\n\nDieser Vorgang kann nicht rückgängig gemacht werden.'
            )
            if (result) {
              for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key?.startsWith('progress_v2_')) {
                  localStorage.removeItem(key)
                }
              }
            }
          }}
        >
          Fortschritt auf diesem Gerät zurücksetzen
        </span>
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
