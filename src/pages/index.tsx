import Head from 'next/head'
import Link from 'next/link'
import { PlayIcon } from '../components/icons/PlayIcon'

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <Head>
        <title>mathe.arrrg.de</title>
      </Head>

      <h1 className="text-7xl mt-32 text-gray-900">
        Kein Bock auf lange Mathe-Aufgaben?
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

      <Start
        title="Realschule 10. Klasse Buch S. 118 Aufgabe 1 (Trigonometrie)"
        href="/1"
      />

      <div className="h-20" />
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
