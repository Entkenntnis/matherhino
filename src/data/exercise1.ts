import { ExerciseData } from './types'

export const exercise1: ExerciseData = {
  id: 1,
  task: '/content/1/task.jpg',
  height: 129,
  steps: [
    {
      prompt: {
        type: 'audio',
        title: 'Aufgabenstellung',
        src: '/content/1/task.mp3',
      },
      cursor: { x: 1, y: 1 },
      layersPost: [{ src: '/content/1/1.PNG', offset: 1 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe a)',
        src: '/content/1/task_a.mp3',
      },
      cursor: { x: 3, y: 1 },
      layersPost: [{ src: '/content/1/2.PNG', offset: 1 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Rechts siehst du bereits zwei Strecken des Schrägbilds eingezeichnet. Als nächstes soll [BC] eingezeichnet werden. Unter der Berücksichtigung des Verzerrungsmaßstabs, wie lang ist die Strecke [BC] im Schrägbild?',
        correctChoice: '6 cm',
        wrong1: '12 cm',
        wrong2: '12 Kästchendiagonalen',
      },
      cursor: { x: 27, y: 23 },
      layersPre: [{ src: '/content/1/3.PNG', offset: 4 }],
      layersPost: [{ src: '/content/1/4.PNG', offset: 5 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe b)',
        src: '/content/1/task_b.mp3',
      },
      cursor: { x: 1, y: 33 },
      layersPost: [{ src: '/content/1/5.PNG', offset: 33 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Wo findet sich im Schrägbild der Winkel δ ?',
        correctChoice: 'Bei SDH',
        wrong1: 'Bei BCS',
        wrong2: 'Bei DAS',
      },
      cursor: { x: 6, y: 32 },
      layersPost: [{ src: '/content/1/6.PNG', offset: 33 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Mit welcher Methode lässt sich das Winkelmaß von δ berechnen?',
        correctChoice: 'Mit dem Tangens im Dreieck HDS',
        wrong1: 'Mit dem Sinus im Dreieck HDS',
        wrong2: 'Mit dem Tangens im Dreieck ADS',
      },
      cursor: { x: 28, y: 32 },
      layersPost: [{ src: '/content/1/7.PNG', offset: 32 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Wie lautet das Ergebnis für δ ?',
        correctChoice: '63,43°',
        wrong1: '60°',
        wrong2: '70,48°',
      },
      cursor: { x: 21, y: 40 },
      layersPost: [{ src: '/content/1/8.PNG', offset: 40 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Berechne die Länge von [DS] mit dem Satz des Pythagoras. Welches Ergebnis ist korrekt?',
        correctChoice: '11,18',
        wrong1: '125',
        wrong2: '15',
      },
      cursor: { x: 29, y: 48 },
      layersPost: [{ src: '/content/1/9.PNG', offset: 41 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe c)',
        src: '/content/1/task_c.mp3',
      },
      cursor: { x: 1, y: 51 },
      layersPost: [{ src: '/content/1/10.PNG', offset: 51 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Welches Hilfsmittel brauchst du beim Einzeichnen von T ?',
        correctChoice: 'Geodreick mit Winkelmarkierungen',
        wrong1: 'einfaches Lineal',
        wrong2: 'Zirkel',
      },
      cursor: { x: 15, y: 18 },
      layersPost: [{ src: '/content/1/11.PNG', offset: 19 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe d)',
        src: '/content/1/task_d.mp3',
      },
      cursor: { x: 1, y: 54 },
      layersPost: [{ src: '/content/1/12.PNG', offset: 54 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Mit welcher Methode lässt sich TH berechnen?',
        correctChoice: 'Tangens im Dreieck DTH',
        wrong1: 'Sinus im Dreieck DTH',
        wrong2: 'Kosinus im Dreieck DTH',
      },
      cursor: { x: 6, y: 56 },
      layersPost: [{ src: '/content/1/13.PNG', offset: 54 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Welches Längenverhältnis beschreibt der Tangens von ε im Dreieck DTH?',
        correctChoice: 'TH geteilt durch DH',
        wrong1: 'TH geteilt durch DT',
        wrong2: 'DH geteilt durch DT',
      },
      cursor: { x: 14, y: 56 },
      layersPost: [{ src: '/content/1/14.PNG', offset: 56 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe e)',
        src: '/content/1/task_e.mp3',
      },
      cursor: { x: 1, y: 63 },
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Nutze den Vierstreckensatz, um die Länge von TU zu berechnen. Welches Längenverhältnis passt zum Verhältnis TU ⁄ ST ?',
        correctChoice: 'DH geteilt durch HS',
        wrong1: 'HS geteilt durch DH',
        wrong2: 'DH geteilt durch TU',
      },
      cursor: { x: 16, y: 66 },
      layersPre: [{ src: '/content/1/15.PNG', offset: 63 }],
      layersPost: [{ src: '/content/1/16.PNG', offset: 66 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Berechne nun die Länge von TU durch Umformung der Gleichung. Welches Ergebnis ist korrekt?',
        correctChoice: '3,5',
        wrong1: '7',
        wrong2: '2',
      },
      cursor: { x: 24, y: 71 },
      layersPost: [{ src: '/content/1/17.PNG', offset: 70 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe f)',
        src: '/content/1/task_f.mp3',
      },
      cursor: { x: 1, y: 79 },
      layersPost: [{ src: '/content/1/18.PNG', offset: 79 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Welche gemeinsame Eigenschaft der beiden Dreiecke AUT und HUT begründen den gleichen Flächeninhalten?',
        correctChoice: 'Gleiche Basis und gleiche Höhe',
        wrong1: 'Zwei gleiche Ecken',
        wrong2: 'Beide befinden sich innerhalb des Dreiecks ADS',
      },
      cursor: { x: 21, y: 85 },
      layersPost: [{ src: '/content/1/19.PNG', offset: 79 }],
    },
    {
      prompt: {
        type: 'audio',
        title: 'Teilaufgabe g)',
        src: '/content/1/task_g.mp3',
      },
      cursor: { x: 1, y: 88 },
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Das Dreieck ist im Schrägbild a) eingezeichnet. Um den Flächeninhalt zu berechnen, brauchst du einige Vorbereitungen. Beginne mit dem Winkel HAT. Wie groß ist HAT ?',
        correctChoice: '45°',
        wrong1: '90°',
        wrong2: '60°',
      },
      cursor: { x: 12, y: 90 },
      layersPre: [
        { src: '/content/1/19a.png', offset: 14 },
        { src: '/content/1/20.PNG', offset: 88 },
      ],
      layersPost: [{ src: '/content/1/21.png', offset: 90 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Bestimme als nächsten den Winkel HAS. Welche Methode eignet sich dafür?',
        correctChoice: 'Tangens',
        wrong1: 'Sinus',
        wrong2: 'Kosinus',
      },
      cursor: { x: 32, y: 95 },
      layersPost: [{ src: '/content/1/22.png', offset: 92 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Wie groß ist nun der Winkel TAP ?',
        correctChoice: '28,3°',
        wrong1: '45°',
        wrong2: '16,7°',
      },
      cursor: { x: 30, y: 98 },
      layersPost: [{ src: '/content/1/23.png', offset: 98 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Wie lang ist die Strecke AT ?',
        correctChoice: '4,24',
        wrong1: '6,85',
        wrong2: '18,24',
      },
      cursor: { x: 22, y: 104 },
      layersPost: [{ src: '/content/1/24.png', offset: 100 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Wie groß ist der Winkel APT ? Berechne mithilfe der Dreieckswinkelsumme.',
        correctChoice: '51,7°',
        wrong1: '28,3°',
        wrong2: '80°',
      },
      cursor: { x: 22, y: 108 },
      layersPost: [{ src: '/content/1/25.png', offset: 103 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Du kennst die beiden Winkel TAP und APT sowie die Seite AT. Nun möchtest du daraus die Länge der Seite PT berechnen. Welcher Satz hilft dir weiter?',
        correctChoice: 'Sinussatz',
        wrong1: 'Kosinussatz',
        wrong2: 'Satz des Pythagoras',
      },
      cursor: { x: 4, y: 113 },
      layersPost: [{ src: '/content/1/26.png', offset: 111 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Löse die Gleichung auf. Welchen Wert erhältst du für PT ?',
        correctChoice: '2,56',
        wrong1: '7,16',
        wrong2: '2,00',
      },
      cursor: { x: 25, y: 116 },
      layersPost: [{ src: '/content/1/27.png', offset: 113 }],
    },
    {
      prompt: {
        type: 'quiz',
        description:
          'Aus welchen bekannten Größen kannst du nun den Flächeninhalt des Dreiecks ATP berechnen?',
        correctChoice: 'Längen AT und TP sowie Winkel PTA',
        wrong1: 'Länge AT und Höhe',
        wrong2: 'Winkel TPA und PAT sowie Seite AT',
      },
      cursor: { x: 4, y: 120 },
      layersPost: [{ src: '/content/1/28.png', offset: 118 }],
    },
    {
      prompt: {
        type: 'quiz',
        description: 'Wie groß ist schließlich der Flächeninhalt von ATP ?',
        correctChoice: '5,34 cm²',
        wrong1: '10,68 cm²',
        wrong2: '1,88 cm²',
      },
      cursor: { x: 14, y: 124 },
      layersPost: [{ src: '/content/1/29.png', offset: 122 }],
    },
  ],
}
