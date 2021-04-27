import { ExerciseData } from './types'

export const exercise5: ExerciseData = {
  id: 5,
  task: '/content/5/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 100,
  audio: [
    {
      mp3: '/content/5/b1_0.mp3',
      ogg: '/content/5/b1_0.ogg',
      size: 5,
      position: { left: 9, top: -0.2 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/5/b1_1.mp3',
      ogg: '/content/5/b1_1.ogg',
      size: 5,
      position: { left: 9, top: 20.8 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/5/b1_2.mp3',
      ogg: '/content/5/b1_2.ogg',
      size: 5,
      position: { left: 9, top: 31.5 },
      beforeQuiz: 4,
    },
    {
      mp3: '/content/5/b1_3.mp3',
      ogg: '/content/5/b1_3.ogg',
      size: 5,
      position: { left: 9, top: 45.7 },
      beforeQuiz: 11,
    },
    {
      mp3: '/content/5/b1_4.mp3',
      ogg: '/content/5/b1_4.ogg',
      size: 5,
      position: { left: 9, top: 70.2 },
      beforeQuiz: 14,
    },
    {
      mp3: '/content/5/b1_5.mp3',
      ogg: '/content/5/b1_5.ogg',
      size: 5,
      position: { left: 9, top: 81.5 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 25 },
      title: 'Teilaufgabe B 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 65 },
      title: 'Teilaufgabe B 1.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 34 },
      title: 'Teilaufgabe B 1.4',
      audioIndex: 4,
    },
    {
      position: { x: 23, y: 34 },
      title: 'Teilaufgabe B 1.5',
      audioIndex: 5,
    },
  ],
  quiz: [
    {
      description:
        "Bei der Anwendung der orthogonalen Affinität mit der x-Achse als Affinitätsachse verändert sich die Abszisse x nicht. Allerdings findet eine Transformation der Ordinate y statt. Wie lautet der Term für y' ?",
      correctChoice: "y' = -0,5y",
      wrong1: "y' = y -0,5",
      wrong2: "y' = y",
      cursor: { x: 15, y: 5 },
      quickviews: [
        { type: 'solution', start: 0, end: 6 },
        { type: 'task', start: 10, end: 29 },
      ],
      layersPre: [
        { src: '/content/5/1.PNG', offset: 1 },
        { src: '/content/5/2.PNG', offset: 1 },
      ],
      layersPost: [{ src: '/content/5/3.PNG', offset: 5 }],
    },
    {
      description:
        'Setze die Gleichung ein und multipliziere aus. Wie lautet das Ergebnis?',
      correctChoice: "y' = log<sub>0,5</sub> x' + 0,75",
      wrong1: "y' = log<sub>0,5</sub> x' - 1,5",
      wrong2: "y' = -2 &sdot; log<sub>0,5</sub> x' - 2",
      cursor: { x: 19, y: 9 },
      quickviews: [
        { type: 'solution', start: 4.7, end: 10 },
        { type: 'task', start: 5, end: 13 },
      ],
      layersPre: [{ src: '/content/5/4.PNG', offset: 7 }],
      layersPost: [{ src: '/content/5/5.PNG', offset: 7 }],
    },
    {
      description:
        'Wie lässt sich die Parallelverschiebung um den gegebenen Vektor anschaulich beschreiben?',
      correctChoice: 'Verschiebung um 1,5 nach unten',
      wrong1: 'Verschiebung um 1,5 nach oben',
      wrong2: 'Verschiebung um 1,5 nach rechts',
      cursor: { x: 16, y: 14 },
      quickviews: [{ type: 'solution', start: 11, end: 15 }],
      layersPre: [{ src: '/content/5/6.PNG', offset: 11 }],
      layersPost: [{ src: '/content/5/7.PNG', offset: 14 }],
    },
    {
      description:
        "Auch bei dieser Abbildung bleibt die Abszisse x unverändert, allerdings wird die Ordinate y verändert. Wie lautet der Term für y'' nach dem Einsetzen?",
      correctChoice: "y'' = (log<sub>0,5</sub> x' + 0,75) - 1,5",
      wrong1: "y'' = (log<sub>0,5</sub> x' + 0,75) &sdot; 1,5",
      wrong2: "y'' = (log<sub>0,5</sub> x' + 0,75) + 1,5",
      cursor: { x: 19, y: 22 },
      quickviews: [
        { type: 'solution', start: 11, end: 23 },
        { type: 'solution', start: 4.7, end: 10 },
      ],
      layersPre: [{ src: '/content/5/8.PNG', offset: 16 }],
      layersPost: [{ src: '/content/5/9.PNG', offset: 18 }],
    },
    {
      description:
        'Erstelle eine Wertetabelle, um den Graph der Funktion f<sub>1</sub> zu zeichnen. Welcher Anfangsverlauf passt zur Funktion f<sub>1</sub> ? <img class="p-3 pt-8" src="/content/5/b12_1.png" />',
      correctChoice: '3',
      wrong1: '1',
      wrong2: '2',
      cursor: { x: 6, y: 39 },
      quickviews: [{ type: 'task', start: 5, end: 13 }],
      layersPre: [
        { src: '/content/5/10.PNG', offset: 25 },
        { src: '/content/5/11.PNG', offset: 27 },
      ],
      layersPost: [{ src: '/content/5/12.PNG', offset: 40 }],
    },
    {
      description:
        'Wie sieht der vollständige Graph zu f<sub>1</sub> aus? <img class="p-3 pt-8" src="/content/5/b12_2.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 13, y: 34 },
      quickviews: [{ type: 'task', start: 5, end: 13 }],
      layersPre: [],
      layersPost: [{ src: '/content/5/13.PNG', offset: 28 }],
    },
    {
      description:
        'Wie sieht der Graph zu f<sub>2</sub> aus? Erstelle wieder eine Wertetabelle. <img class="p-3 pt-8" src="/content/5/b12_3.png" />',
      correctChoice: '3',
      wrong1: '1',
      wrong2: '2',
      cursor: { x: 13, y: 45 },
      quickviews: [{ type: 'solution', start: 21.6, end: 22.5 }],
      layersPre: [],
      layersPost: [{ src: '/content/5/14.PNG', offset: 40 }],
    },
    {
      description:
        'Mit welcher Gleichung lässt sich die Nullstelle von f<sub>1</sub> bestimmen?',
      correctChoice: '-2 &sdot; log<sub>0,5</sub> x - 1,5 = 0',
      wrong1: 'y = -2 &sdot; log<sub>0,5</sub> 0 - 1,5',
      wrong2: '-2 &sdot; log<sub>0,5</sub> x = 0',
      cursor: { x: 18, y: 54 },
      quickviews: [{ type: 'task', start: 5, end: 13 }],
      layersPre: [{ src: '/content/5/15.PNG', offset: 52 }],
      layersPost: [{ src: '/content/5/16.PNG', offset: 54 }],
    },
    {
      description:
        'Führe die angegebenen Umformungsschritte durch. Welche Gleichung erhältst du?',
      correctChoice: 'log<sub>0,5</sub> x = -0,75',
      wrong1: 'log<sub>0,5</sub> x = -3',
      wrong2: 'x = -3',
      cursor: { x: 20, y: 58 },
      quickviews: [{ type: 'solution', start: 53.4, end: 58.4 }],
      layersPre: [{ src: '/content/5/17.PNG', offset: 54 }],
      layersPost: [{ src: '/content/5/18.PNG', offset: 56 }],
    },
    {
      description:
        'Diese Gleichung lässt sich mithilfe der Umkehrfunktion des Logarithmus zur Basis 0,5 nach x auflösen. Wie lautet die passende rechte Seite der Gleichung?',
      correctChoice: '0,5<sup>-0,75</sub>',
      wrong1: '(-0,75)<sup>0,5</sub>',
      wrong2: '0,5 &sdot; (-0,75)',
      cursor: { x: 22, y: 60 },
      quickviews: [{ type: 'solution', start: 57.4, end: 60 }],
      layersPre: [{ src: '/content/5/19.PNG', offset: 60 }],
      layersPost: [{ src: '/content/5/20.PNG', offset: 59 }],
    },
    {
      description:
        'Wie lautet nun die Nullstelle der Funktion f<sub>1</sub> ? Berechne mit dem Taschenrechner.',
      correctChoice: '1,68',
      wrong1: '1,71',
      wrong2: '1,63',
      cursor: { x: 23, y: 62 },
      quickviews: [{ type: 'solution', start: 51.4, end: 62 }],
      layersPre: [{ src: '/content/5/21.PNG', offset: 62 }],
      layersPost: [{ src: '/content/5/22.PNG', offset: 62 }],
    },
    {
      description:
        'Wo befindet sich die Strecke A<sub>1</sub>B<sub>1</sub> ? <img class="p-3 pt-8" src="/content/5/b13_1.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 20, y: 65 },
      quickviews: [{ type: 'task', start: 85, end: 123 }],
      layersPre: [
        { src: '/content/5/23.PNG', offset: 65 },
        { src: '/content/5/24.PNG', offset: 65 },
      ],
      layersPost: [{ src: '/content/5/25.PNG', offset: 38 }],
    },
    {
      description:
        'Wo liegt der Punkt C<sub>1</sub> ? <img class="p-3 pt-8" src="/content/5/b13_2.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 21, y: 65 },
      quickviews: [{ type: 'task', start: 85, end: 123 }],
      layersPre: [],
      layersPost: [{ src: '/content/5/26.PNG', offset: 39 }],
    },
    {
      description:
        'Wo liegt der Punkt C<sub>2</sub> ? <img class="p-3 pt-8" src="/content/5/b13_3.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 22, y: 65 },
      quickviews: [{ type: 'task', start: 85, end: 123 }],
      layersPre: [{ src: '/content/5/27.PNG', offset: 30 }],
      layersPost: [{ src: '/content/5/28.PNG', offset: 32 }],
    },
    /*{
      description: 'TODO',
      correctChoice: '---',
      wrong1: '---',
      wrong2: '---',
      cursor: { x: 8, y: 7 },
      quickviews: [
        { type: 'task', start: 85, end: 125 },
        { type: 'task', start: 15, end: 27 },
      ],
      layersPre: [],
      layersPost: [],
    },
    {
      description: 'TODO',
      correctChoice: '---',
      wrong1: '---',
      wrong2: '---',
      cursor: { x: 8, y: 7 },
      quickviews: [
        { type: 'task', start: 85, end: 125 },
        { type: 'task', start: 15, end: 27 },
      ],
      layersPre: [],
      layersPost: [],
    },
    {
      description: 'TODO',
      correctChoice: '---',
      wrong1: '---',
      wrong2: '---',
      cursor: { x: 8, y: 7 },
      quickviews: [
        { type: 'task', start: 85, end: 125 },
        { type: 'task', start: 15, end: 27 },
      ],
      layersPre: [],
      layersPost: [],
    },*/
  ],
}
