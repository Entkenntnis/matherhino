export interface Exercise {
  id: number
  task: string
  height: number
  steps: {
    prompt: Prompt
    layers: { src: string; offset?: number }[]
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
    height: 100,
    steps: [
      {
        prompt: {
          type: 'audio',
          title: 'Aufgabenstellung',
          src: '/content/1/task.mp3',
        },
        layers: [],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe a)',
          src: '/content/1/task_a.mp3',
        },
        layers: [
          { src: '/content/1/1.PNG' },
          { src: '/content/1/2.PNG' },
          { src: '/content/1/3.PNG' },
        ],
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
        layers: [{ src: '/content/1/4.PNG' }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe b)',
          src: '/content/1/task_b.mp3',
        },
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
        layers: [{ src: '/content/1/9.PNG' }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe c)',
          src: '/content/1/task_c.mp3',
        },
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
        layers: [{ src: '/content/1/11.PNG' }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe d)',
          src: '/content/1/task_d.mp3',
        },
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
        layers: [{ src: '/content/1/14.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe e)',
          src: '/content/1/task_e.mp3',
        },
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
        layers: [{ src: '/content/1/17.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe f)',
          src: '/content/1/task_f.mp3',
        },
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
        layers: [{ src: '/content/1/19.PNG', offset: 53 }],
      },
      {
        prompt: {
          type: 'audio',
          title: 'Teilaufgabe g)',
          src: '/content/1/task_g.mp3',
        },
        layers: [],
      },
    ],
  },
]

export function getExercise(id: number) {
  return allExercises.filter((e) => e.id == id)[0] ?? null
}
