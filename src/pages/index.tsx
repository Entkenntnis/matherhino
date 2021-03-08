import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <Head>
        <title>Mathe üben online - Abitur, Mittlere Reife, ...</title>
      </Head>

      <h1 className="text-7xl mt-32 text-gray-900">
        Angst vor langen Mathe-Aufgaben?
      </h1>

      <p className="text-3xl mt-20 text-gray-700">
        Hier findest du <strong className="text-black">Hilfe</strong>! Löse
        umfangreiche Aufgaben Schritt-für-Schritt mit diesem{' '}
        <strong className="text-black">interaktiven</strong> Tool.
      </p>
      <p className="text-3xl mt-4 text-gray-700">
        Inklusive handgefertigter Musterlösung zum Übernehmen in dein Heft.
      </p>

      <h2 className="text-4xl mt-20">Probiere es aus:</h2>

      <div className="h-3" />

      <Start title="Realschulabschluss Bayern 2020 Teil B Aufgabe 1" />
      <Start title="Abitur Bayern 2020 Teil B Analysis 1 Aufgabe 1" />

      <div className="h-20" />
    </div>
  )
}

function Start({ title }: { title: string }) {
  return (
    <p className="mt-6">
      <button className="bg-lime-400 hover:bg-gray text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4 mr-2"
        >
          <path
            fill="currentColor"
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
          ></path>
        </svg>
        <span>{title}</span>
      </button>
    </p>
  )
}

/*

<p className="mt-4">
        <button className="bg-green-300 hover:bg-gray text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 h-4 mr-2"
          >
            <path
              fill="currentColor"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            ></path>
          </svg>
          <span>Abschlussprüfung Realschule Bayern 2020 Teil B Aufgabe 1</span>
        </button>
      </p>*/
