import { ExerciseData } from './types'

export const exercise2: ExerciseData = {
  id: 2,
  task: '/content/2/task.png',
  height: 57,
  steps: [
    {
      prompt: {
        type: 'audio',
        title: 'Aufgabenstellung A 1.0',
        src: '/content/2/task.mp3',
      },
      cursor: { x: 1, y: 0 },
      layersPost: [],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe A 1.1 (2P)',
        src: '/content/2/task1_1.mp3',
      },
      cursor: { x: 4, y: 0 },
      layersPre: [{ src: '/content/2/1.PNG' }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Lies aus der Angabe die gegebenen Werte ab. Wie groß ist der Wert für yₐ ?',
        correctChoice: '95°C',
        wrong1: '20°C',
        wrong2: '60°C',
      },
      cursor: { x: 24, y: 0 },
      layersPre: [{ src: '/content/2/2.PNG' }],
      layersPost: [{ src: '/content/2/3.PNG' }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Wie groß ist der Wert für y ?',
        correctChoice: '60°C',
        wrong1: '20°C',
        wrong2: 'unbekannt',
      },
      cursor: { x: 23, y: 4 },
      layersPost: [{ src: '/content/2/3a.PNG', offset: 2 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Welche Variable ist in dieser Aufgabe gesucht?',
        correctChoice: 'Die Zeit x in Minuten',
        wrong1: 'Die Zeit x in Sekunden',
        wrong2: 'Die Temperatur y des Wassers',
      },
      cursor: { x: 20, y: 6 },
      layersPre: [{ src: '/content/2/4.PNG', offset: 6 }],
      layersPost: [{ src: '/content/2/5.PNG', offset: 6 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Setze die Variablen in die Funktionsgleichung ein. Welches Ergebnis erhältst du?',
        correctChoice: '60 = (95 - 20) · 0,9ᕁ + 20',
        wrong1: '20 = (95 - 60) · 0,9ᕁ + 60',
        wrong2: '95 = (60 - 20) · 0,9ᕁ + 20',
      },
      cursor: { x: 25, y: 10 },
      layersPre: [{ src: '/content/2/6.PNG', offset: 8 }],
      layersPost: [{ src: '/content/2/7.PNG', offset: 10 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Vereinfache die Gleichung mit den angegebenen Schritten. Welches Ergebnis erhältst du?',
        correctChoice: '40 ⁄ 75 = 0,9ᕁ',
        wrong1: '60 ⁄ 55 = 0,9ᕁ',
        wrong2: '40 ⁄ 75 = 0,9ᕁ + 20',
      },
      cursor: { x: 16, y: 16 },
      layersPre: [{ src: '/content/2/8.PNG', offset: 9 }],
      layersPost: [{ src: '/content/2/9.PNG', offset: 12 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Welche Äquivalenzumformung ist nun notwendig?',
        correctChoice: 'Logarithmus zur Basis 0,9',
        wrong1: 'Wurzel ziehen',
        wrong2: 'Logarithmus zur Basis x',
      },
      cursor: { x: 24, y: 16 },
      layersPre: [{ src: '/content/2/10.PNG', offset: 16 }],
      layersPost: [{ src: '/content/2/11.PNG', offset: 15 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Welches Ergebnis erhältst du für x ? Benutze zur Berechnung einen Taschenrechner.',
        correctChoice: '6,0',
        wrong1: '-0,6',
        wrong2: '5,0',
      },
      cursor: { x: 15, y: 21 },
      layersPost: [{ src: '/content/2/12.PNG', offset: 18 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Was sagt nun das Ergebnis x = 6,0 aus?',
        correctChoice: 'Das Wasser ist nach 6 Minuten auf 60°C abgekühlt.',
        wrong1: 'Das Wasser ist um 6,0°C abgekühlt.',
        wrong2: 'Das Wasser ist um 6,0°C wärmer als die Umgebung.',
      },
      cursor: { x: 16, y: 25 },
      layersPre: [{ src: '/content/2/13.PNG', offset: 23 }],
      layersPost: [{ src: '/content/2/14.PNG', offset: 23 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe A 1.2 (3P)',
        src: '/content/2/task1_2.mp3',
      },
      cursor: { x: 1, y: 28 },
      layersPost: [{ src: '/content/2/15.PNG', offset: 28 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Mit welcher Strategie kannst du diese Frage am besten angehen?',
        correctChoice:
          'Aufteilen in zwei Schritte: Zuerst den ersten Raum betrachten, dann den zweiten Raum.',
        wrong1: 'Aufstellen einer großen Gleichung für beide Räume.',
        wrong2: 'Einfach mal anfangen, Zahlen in die Gleichung einzusetzen.',
      },
      cursor: { x: 20, y: 32 },
      layersPre: [{ src: '/content/2/16.PNG', offset: 28 }],
      layersPost: [{ src: '/content/2/17.PNG', offset: 28 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Für welche Größen stehen die Werte 72°C, 18°C und 3 ?',
        correctChoice: 'Anfangstemperatur, Umgebungstemperatur, Zeit',
        wrong1:
          'Umgebungstemperatur, Temperatur des Wassers nach der Zeit, Zeit',
        wrong2: 'Umgebungstemperatur, Anfangstemperatur, Zeit',
      },
      cursor: { x: 31, y: 34 },
      layersPre: [{ src: '/content/2/18.PNG', offset: 34 }],
      layersPost: [{ src: '/content/2/19.PNG', offset: 34 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Diese Werte lassen sich in die Funktionsgleichung einsetzen. Welches Ergebnis kommt heraus? Benutze einen Taschenrechner.',
        correctChoice: '57,4',
        wrong1: '28,7',
        wrong2: '67,8',
      },
      cursor: { x: 26, y: 36 },
      layersPre: [{ src: '/content/2/20.PNG', offset: 36 }],
      layersPost: [{ src: '/content/2/21.PNG', offset: 36 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Du hast nun den Wert 57,4 berechnet. Für welche Größe im zweiten Raum kann dieser Wert verwendet werden?',
        correctChoice: 'Anfangstemperatur',
        wrong1: 'Umgebungstemperatur',
        wrong2: 'Wassertemperatur nach 8 Minuten',
      },
      cursor: { x: 31, y: 38 },
      layersPre: [{ src: '/content/2/22.PNG', offset: 38 }],
      layersPost: [{ src: '/content/2/23.PNG', offset: 38 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Rechts sind die Werte in die Gleichung eingesetzt. Löse die Gleichnung nach dem Verfahren deiner Wahl (die Musterlösung ist nur ein Beispiel für eine mögliche Rechnung). Welches Ergebnis erhältst du?',
        correctChoice: '25,1',
        wrong1: '31,4',
        wrong2: '19',
      },
      cursor: { x: 25, y: 50 },
      layersPre: [{ src: '/content/2/24.PNG', offset: 40 }],
      layersPost: [{ src: '/content/2/25.PNG', offset: 44 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Was sagt das Ergebnis nun aus?',
        correctChoice:
          'Die Umgebungstemperatur des zweiten Raums beträgt 25,1°C.',
        wrong1:
          'Das Wasser hat am Ende des zweiten Versuchs eine Temperatur von 25,1°C.',
        wrong2: 'Nach 3 Minuten beträgt die Temperatur des Wassers 25,1°C.',
      },
      cursor: { x: 11, y: 54 },
      layersPre: [{ src: '/content/2/26.PNG', offset: 52 }],
      layersPost: [{ src: '/content/2/27.PNG', offset: 52 }],
    },
  ],
}
