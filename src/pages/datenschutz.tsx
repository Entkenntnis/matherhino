import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Datenschutz - MatheRhino</title>
      </Head>
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl mt-8">Datenschutz</h1>

        <p className="mt-8">
          MatheRhino nimmt den Schutz deiner Privatsphäre sehr ernst. Beim
          Lernen mit MatheRhino wird der Fortschritt deiner Aufgaben daher nur
          lokal auf deinem Gerät gespeichert. Auf diese Daten kannst nur du
          zugreifen, außerdem kannst du deinen Fortschritt jederzeit über den
          Link auf der Startseite löschen.
        </p>
        <p className="mt-8">
          Diese Website wird über{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="text-blue-500 hover:underline"
          >
            vercel.com
          </a>{' '}
          gehostet. Für das korrekte Aufrufen der Website werden technische
          Informationen wie z.B. die IP-Adresse übermittelt. Eine weitere
          Verarbeitung dieser persönlichen Daten über die Bereitstellung der
          Website hinaus findet durch Vercel nicht statt.
        </p>
        <p className="mt-8">
          Diese Website verwendet keine Cookies. Der Betreiber behält sich vor,
          eine statistische Auswertung der Benutzung durchzuführen. Die
          Datenpunkte dafür werden dann entsprechend stark anonymisiert und
          lassen sich nicht auf einzelne Benutzer zurückführen.
        </p>
        <div className="my-8">
          <a href="/" className="text-blue-500 hover:underline cursor-pointer">
            zurück zur Startseite
          </a>
        </div>
      </div>
    </>
  )
}
