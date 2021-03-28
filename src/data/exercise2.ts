import { ExerciseData } from './types'

export const exercise2: ExerciseData = {
  id: 2,
  task: '/content/2/task.png',
  height: 59,
  audio: [
    {
      mp3: '/content/2/task.mp3',
      ogg: '/content/2/task.ogg',
      size: 5,
      position: { left: 10, top: 0 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/2/task1_1.mp3',
      ogg: '/content/2/task1_1.ogg',
      size: 5,
      position: { left: 10, top: 48 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/2/task1_2.mp3',
      ogg: '/content/2/task1_2.ogg',
      size: 5,
      position: { left: 10, top: 70 },
      beforeQuiz: 9,
    },
  ],
  quiz: [
    {
      description:
        'Lies als erstes die gegebenen Größen aus der Angabe A 1.1 ab. Beginne mit der Anfangstemperatur. Welcher Wert ist für y<sub>A</sub> gegeben?',
      correctChoice: '95°C',
      wrong1: '20°C',
      wrong2: '60°C',
      cursor: { x: 23, y: 1 },
      layersPre: [{ src: '/content/2/1.PNG', offset: 1 }],
      layersPost: [{ src: '/content/2/2.PNG' }],
    },
    {
      description:
        'In der Angabe findet sich der Wert 20°C. Für welche Variable gilt dieser Wert?',
      correctChoice: 'Umgebungstemperatur y<sub>U</sub>',
      wrong1: 'Wassertemperatur am Ende des Versuchs',
      wrong2: 'Wassertemperatur am Anfang des Versuchs',
      cursor: { x: 23, y: 3 },
      layersPre: [{ src: '/content/2/3.PNG', offset: 3 }],
      layersPost: [{ src: '/content/2/4.PNG', offset: 2 }],
    },
    {
      description:
        'Schließlich findet sich in der Angabe der Wert 60°C. Für welche Variable gilt dieser Wert?',
      correctChoice: 'y',
      wrong1: 'x',
      wrong2: '<strong>G</strong>',
      cursor: { x: 23, y: 5 },
      layersPre: [{ src: '/content/2/5.PNG', offset: 5 }],
      layersPost: [{ src: '/content/2/6.PNG', offset: 4 }],
    },
    {
      description: 'Nach welcher Unbekannten ist gesucht?',
      correctChoice: 'Zeit x in Minuten',
      wrong1: 'Zeit x in Sekunden',
      wrong2: 'Wassertemperatur in °C',
      cursor: { x: 21, y: 7 },
      layersPre: [{ src: '/content/2/7.PNG', offset: 7 }],
      layersPost: [{ src: '/content/2/8.PNG', offset: 6 }],
    },
    {
      description:
        'Setze die Variablen in die Funktionsgleichung ein. Wie lautet das Ergebnis?',
      correctChoice: '60 = (95 - 20) · 0,9ᕁ + 20',
      wrong1: '20 = (95 - 60) · 0,9ᕁ + 60',
      wrong2: '95 = (60 - 20) · 0,9ᕁ + 20',
      cursor: { x: 21, y: 11 },
      layersPre: [{ src: '/content/2/9.PNG', offset: 9 }],
      layersPost: [{ src: '/content/2/10.PNG', offset: 10 }],
    },
    {
      description:
        'Vereinfache die Gleichung mit den angegebenen Schritten. Wie lautet das Ergebnis?',
      correctChoice: '0,53 = 0,9<sup>x</sup>',
      wrong1: '0,8 = 0,9<sup>x</sup>',
      wrong2: '0,59 = x',
      cursor: { x: 9, y: 17 },
      layersPre: [{ src: '/content/2/11.PNG', offset: 13 }],
      layersPost: [{ src: '/content/2/12.PNG', offset: 12 }],
    },
    {
      description: 'Welche Äquivalenzumformung ist nun notwendig?',
      correctChoice: 'Logarithmus zur Basis 0,9',
      wrong1: 'Wurzel ziehen',
      wrong2: 'Logarithmus zur Basis x',
      cursor: { x: 23, y: 18 },
      layersPre: [{ src: '/content/2/13.PNG', offset: 17 }],
      layersPost: [{ src: '/content/2/13a.PNG', offset: 17 }],
    },
    {
      description:
        'Wie lautet das Ergebnis für x ? Benutze zur Berechnung einen Taschenrechner.',
      correctChoice: '6,0',
      wrong1: '-0,6',
      wrong2: '5,0',
      cursor: { x: 13, y: 21 },
      layersPre: [{ src: '/content/2/14.PNG', offset: 19 }],
      layersPost: [{ src: '/content/2/15.PNG', offset: 21 }],
    },
    {
      description: 'Was sagt nun das Ergebnis x = 6,0 aus?',
      correctChoice: 'Das Wasser ist nach 6 Minuten auf 60°C abgekühlt.',
      wrong1: 'Das Wasser ist um 6,0°C abgekühlt.',
      wrong2: 'Das Wasser ist um 6,0°C wärmer als die Umgebung.',
      cursor: { x: 23, y: 25 },
      layersPre: [{ src: '/content/2/16.PNG', offset: 23 }],
      layersPost: [{ src: '/content/2/17.PNG', offset: 23 }],
    },
    {
      description:
        'Mit welcher Strategie kannst du diese Frage am besten angehen?',
      correctChoice:
        'Aufteilen in zwei Schritte: Zuerst den ersten Raum betrachten, dann den zweiten Raum.',
      wrong1: 'Aufstellen einer großen Gleichung für beide Räume.',
      wrong2: 'Einfach mal anfangen, Zahlen in die Gleichung einzusetzen.',
      cursor: { x: 20, y: 32 },
    },
    {
      description: 'Für welche Größen stehen die Werte 72°C, 18°C und 3 ?',
      correctChoice: 'Anfangstemperatur, Umgebungstemperatur, Zeit',
      wrong1: 'Umgebungstemperatur, Temperatur des Wassers nach der Zeit, Zeit',
      wrong2: 'Umgebungstemperatur, Anfangstemperatur, Zeit',
      cursor: { x: 31, y: 34 },
    },
    {
      description:
        'Diese Werte lassen sich in die Funktionsgleichung einsetzen. Welches Ergebnis kommt heraus? Benutze einen Taschenrechner.',
      correctChoice: '57,4',
      wrong1: '28,7',
      wrong2: '67,8',
      cursor: { x: 26, y: 36 },
    },
    {
      description:
        'Du hast nun den Wert 57,4 berechnet. Für welche Größe im zweiten Raum kann dieser Wert verwendet werden?',
      correctChoice: 'Anfangstemperatur',
      wrong1: 'Umgebungstemperatur',
      wrong2: 'Wassertemperatur nach 8 Minuten',
      cursor: { x: 31, y: 38 },
    },
    {
      description:
        'Rechts sind die Werte in die Gleichung eingesetzt. Löse die Gleichnung nach dem Verfahren deiner Wahl (die Musterlösung ist nur ein Beispiel für eine mögliche Rechnung). Welches Ergebnis erhältst du?',
      correctChoice: '25,1',
      wrong1: '31,4',
      wrong2: '19',
      cursor: { x: 25, y: 50 },
    },
    {
      description: 'Was sagt das Ergebnis nun aus?',
      correctChoice:
        'Die Umgebungstemperatur des zweiten Raums beträgt 25,1°C.',
      wrong1:
        'Das Wasser hat am Ende des zweiten Versuchs eine Temperatur von 25,1°C.',
      wrong2: 'Nach 3 Minuten beträgt die Temperatur des Wassers 25,1°C.',
      cursor: { x: 11, y: 54 },
    },
  ],
}
