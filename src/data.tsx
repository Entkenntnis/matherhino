export interface Exercise {
  id: number
  task: string
  height: number
  steps: {
    prompt: Prompt
    layers: { src: string; offset?: number }[]
    focus: { x: number; y: number }
  }[]
}

export interface StaticPrompt {
  type: 'static'
  description: any
}

export interface AudioPrompt {
  type: 'audio'
  title: string
  src: string
}

export interface QuizPrompt {
  type: 'quiz'
  description: any
  correctChoice: any
  wrong1: any
  wrong2: any
}

export type Prompt = StaticPrompt | AudioPrompt | QuizPrompt

export const allExercises: Exercise[] = [
  {
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
        layers: [{ src: '/content/1/1.PNG' }],
        focus: { x: 1, y: 1 },
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe a)',
          src: '/content/1/task_a.mp3',
        },
        focus: { x: 3, y: 1 },
        layers: [{ src: '/content/1/2.PNG' }, { src: '/content/1/3.PNG' }],
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
        focus: { x: 27, y: 23 },
        layers: [{ src: '/content/1/4.PNG' }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe b)',
          src: '/content/1/task_b.mp3',
        },
        focus: { x: 1, y: 33 },
        layers: [{ src: '/content/1/5.PNG' }],
      },
      {
        prompt: {
          type: 'quiz',
          description: 'Wo findet sich im Schrägbild der Winkel δ ?',
          correctChoice: 'Bei SDH',
          wrong1: 'Bei BCS',
          wrong2: 'Bei DAS',
        },
        focus: { x: 6, y: 32 },
        layers: [{ src: '/content/1/6.PNG' }],
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
        focus: { x: 28, y: 32 },
        layers: [{ src: '/content/1/7.PNG' }],
      },
      {
        prompt: {
          type: 'quiz',
          description: 'Wie lautet das Ergebnis für δ ?',
          correctChoice: '63,43°',
          wrong1: '60°',
          wrong2: '70,48°',
        },
        focus: { x: 21, y: 40 },
        layers: [{ src: '/content/1/8.PNG' }],
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
        focus: { x: 29, y: 48 },
        layers: [{ src: '/content/1/9.PNG' }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe c)',
          src: '/content/1/task_c.mp3',
        },
        focus: { x: 1, y: 51 },
        layers: [{ src: '/content/1/10.PNG' }],
      },
      {
        prompt: {
          type: 'quiz',
          description:
            'Welches Hilfsmittel brauchst du beim Einzeichnen von T ?',
          correctChoice: 'Geodreick mit Winkelmarkierungen',
          wrong1: 'einfaches Lineal',
          wrong2: 'Zirkel',
        },
        focus: { x: 15, y: 18 },
        layers: [{ src: '/content/1/11.PNG' }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe d)',
          src: '/content/1/task_d.mp3',
        },
        focus: { x: 1, y: 54 },
        layers: [{ src: '/content/1/12.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'quiz',
          description: 'Mit welcher Methode lässt sich ε berechnen?',
          correctChoice: 'Tangens im Dreieck DTH',
          wrong1: 'Sinus im Dreieck DTH',
          wrong2: 'Kosinus im Dreieck DTH',
        },
        focus: { x: 6, y: 56 },
        layers: [{ src: '/content/1/13.PNG', offset: 53 }],
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
        focus: { x: 14, y: 56 },
        layers: [{ src: '/content/1/14.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe e)',
          src: '/content/1/task_e.mp3',
        },
        focus: { x: 1, y: 63 },
        layers: [{ src: '/content/1/15.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'quiz',
          description:
            'Nutze den Vierstreckensatz, um die Länge von TU zu berechnen. Welches Längenverhältnis passt zum Verhältnis TU ⁄ ST?',
          correctChoice: 'DH geteilt durch HS',
          wrong1: 'HS geteilt durch DH',
          wrong2: 'DH geteilt durch TU',
        },
        focus: { x: 16, y: 66 },
        layers: [{ src: '/content/1/16.PNG', offset: 53 }],
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
        focus: { x: 24, y: 71 },
        layers: [{ src: '/content/1/17.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe f)',
          src: '/content/1/task_f.mp3',
        },
        focus: { x: 1, y: 79 },
        layers: [{ src: '/content/1/18.PNG', offset: 53 }],
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
        focus: { x: 21, y: 85 },
        layers: [{ src: '/content/1/19.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe g)',
          src: '/content/1/task_g.mp3',
        },
        focus: { x: 1, y: 88 },
        layers: [
          { src: '/content/1/20.PNG', offset: 53 },
          { src: '/content/1/19a.png' },
        ],
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
        focus: { x: 12, y: 90 },
        layers: [{ src: '/content/1/21.png', offset: 53 }],
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
        focus: { x: 32, y: 95 },
        layers: [{ src: '/content/1/22.png', offset: 53 }],
      },
      {
        prompt: {
          type: 'quiz',
          description: 'Wie groß ist nun der Winkel TAP ?',
          correctChoice: '28,3°',
          wrong1: '45°',
          wrong2: '16,7°',
        },
        focus: { x: 30, y: 98 },
        layers: [{ src: '/content/1/23.png', offset: 53 }],
      },
      {
        prompt: {
          type: 'quiz',
          description: 'Wie lang ist die Strecke AT ?',
          correctChoice: '4,24',
          wrong1: '6,85',
          wrong2: '18,24',
        },
        focus: { x: 22, y: 104 },
        layers: [{ src: '/content/1/24.png', offset: 53 }],
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
        focus: { x: 22, y: 108 },
        layers: [{ src: '/content/1/25.png', offset: 53 }],
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
        focus: { x: 4, y: 113 },
        layers: [{ src: '/content/1/26.png', offset: 110 }],
      },
      {
        prompt: {
          type: 'quiz',
          description:
            'Löse die Gleichung auf. Welche Wert erhältst du für PT ?',
          correctChoice: '2,56',
          wrong1: '7,16',
          wrong2: '2,00',
        },
        focus: { x: 25, y: 116 },
        layers: [{ src: '/content/1/27.png', offset: 110 }],
      },
      {
        prompt: {
          type: 'quiz',
          description:
            'Aus welchen bekannten Größen kannst du nun den Flächeninhalt des Dreiecks ATP berechnen?',
          correctChoice: 'Längen AT und TP sowie Winkel PTA',
          wrong1: 'Länge AT und Höhe',
          wrong2: 'Winkel TPA und PAT sowie Siete AT',
        },
        focus: { x: 4, y: 120 },
        layers: [{ src: '/content/1/28.png', offset: 109 }],
      },
      {
        prompt: {
          type: 'quiz',
          description: 'Wie groß ist schließlich der Flächeninhalt von ATP ?',
          correctChoice: '5,34 cm²',
          wrong1: '10,68 cm²',
          wrong2: '1,88 cm²',
        },
        focus: { x: 14, y: 124 },
        layers: [{ src: '/content/1/29.png', offset: 109 }],
      },
    ],
  },
]

export function getExercise(id: number) {
  return allExercises.filter((e) => e.id == id)[0] ?? null
}
