import Head from 'next/head'
import { useState } from 'react'
import { Card } from '../components/Card'

export default function Home() {
  const [showContact, setShowContact] = useState(false)

  function getData() {
    return JSON.parse(atob(process.env.NEXT_PUBLIC_CONTACT ?? ''))
  }

  return (
    <>
      <Head>
        <title>MatheRhino</title>
      </Head>
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl text-gray-900 mt-14 font-bold">MatheRhino</h1>
        <img className="mt-8" src="/nashorn.png" alt="Nashorn" />
        <p className="italic text-xl text-gray-600 mt-2">
          Entdecke die neue Art, Mathe zu üben.
        </p>
        <h2 className="mt-14 text-3xl font-bold">Themen</h2>
        <div className="flex mt-8 items-center justify-center m-2">
          <img src="/landing/rs_by.png" className="w-7" />
          <p className="text-lg m-3 text-blue-500 hover:underline cursor-pointer text-left">
            <a href="/bayern-rs-zweig-i-2018">
              Bayern, Realschulabschluss, Zweig I, 2018 (im Aufbau)
            </a>
          </p>
        </div>
        <div className="flex mt-2 items-center justify-center m-2">
          <img src="/landing/rs_by.png" className="w-7" />
          <p className="text-lg m-3 text-left">
            Bayern, Realschulabschluss, Zweig II/III, 2018 (in Planung)
          </p>
        </div>
        <div className="py-14 text-2xl">...</div>
        <h2 className="mt-20 text-3xl font-bold">Unterstützung</h2>
        <p className="mt-4 text-base">
          MatheRhino ist in meiner Freizeit entstanden. Ich glaube, dass mit
          dieser Website das Mathe Üben viel mehr Spaß machen kann und vor allem
          sehr effektiv ist. Falls dir die Idee gefällt, kannst du das Projekt
          auf viele Arten unterstützen. <strong>Nutze MatheRhino!</strong> Es
          freut mich sehr, wenn Software auch Anwendung findet.{' '}
          <strong>Erzähl es weiter!</strong> Sicherlich freuen sich auch andere
          Schüler:innen über eine Unterstützung beim Lernen. Falls du Lust hast,
          selber Inhalte zu erstellen, kannst du über das Impressum Kontakt
          aufnehmen. Außerdem gibt es die Möglichkeit, mir über PayPal{' '}
          <a
            href="http://paypal.me/Dav1dL1"
            target="_blank"
            className="hover:underline text-blue-500"
          >
            einer Spende
          </a>{' '}
          zu übermitteln.
        </p>
        <div className="flex flex-col sm:flex-row justify-between mt-20 mb-4">
          <span className="text-gray-600 hover:text-black cursor-pointer">
            Datenschutz
          </span>
          <span
            className="text-gray-600 hover:text-black cursor-pointer"
            onClick={() => setShowContact(true)}
          >
            Impressum
          </span>
        </div>
      </div>
      {showContact && (
        <div
          className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full z-50"
          style={{ background: 'rgba(80,80,80,0.8)' }}
          onClick={() => {
            setShowContact(false)
          }}
        >
          <div
            className="bg-white rounded-lg max-w-1/2 p-10 m-3"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <h3 className="text-lg font-bold">Impressum</h3>

            <h4 className="mt-8">Betreiber:</h4>

            <p className="mt-4">{getData().name}</p>
            <p className="">{getData().address1}</p>
            <p className="">{getData().address2}</p>

            <h4 className="mt-8">Kontakt:</h4>

            <p className="mt-4">{getData().email}</p>
          </div>
        </div>
      )}
    </>
  )

  /*

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
*/
}
