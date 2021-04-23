import { Card } from '../components/Card'

export default function Page() {
  return (
    <>
      <title>Bayern, Realschulabschluss, Zweig I, 2018 - MatheRhino</title>
      <div className="max-w-xl mx-auto">
        <img src="/landing/rs_by.png" className="mx-auto w-24 mt-8" />
        <h1 className="text-center text-3xl mt-8">
          Bayern, Realschulabschluss, Zweig I, 2018
        </h1>

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

        <Card id={4} count={27} title="A3 (todo)" topics="coming soon" />

        <Card id={5} count={27} title="B1 (todo)" topics="coming soon" />

        <Card id={6} count={27} title="B2 (todo)" topics="coming soon" />

        <div className=" text-center my-8">
          <a href="/" className="text-blue-500 hover:underline cursor-pointer">
            zurück zur Startseite
          </a>
        </div>
      </div>
    </>
  )
}
