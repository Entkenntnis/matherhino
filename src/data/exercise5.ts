import { ExerciseData } from './types'

export const exercise5: ExerciseData = {
  id: 5,
  task: '/content/5/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/5/b1_0.mp3',
      ogg: '/content/5/b1_0.ogg',
      size: 5,
      position: { left: 9, top: -0.7 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/5/b1_1.mp3',
      ogg: '/content/5/b1_1.ogg',
      size: 5,
      position: { left: 9, top: 23.5 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/5/b1_2.mp3',
      ogg: '/content/5/b1_2.ogg',
      size: 5,
      position: { left: 9, top: 35.8 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/5/b1_3.mp3',
      ogg: '/content/5/b1_3.ogg',
      size: 5,
      position: { left: 9, top: 52 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/5/b1_4.mp3',
      ogg: '/content/5/b1_4.ogg',
      size: 5,
      position: { left: 9, top: 68 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/5/b1_5.mp3',
      ogg: '/content/5/b1_5.ogg',
      size: 5,
      position: { left: 9, top: 81.2 },
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
      position: { x: 23, y: 14 },
      title: 'Teilaufgabe B 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 34 },
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
        { type: 'task', start: 9, end: 28 },
      ],
      layersPre: [{ src: '/content/5/1.PNG', offset: 1 }, { src: '/content/5/2.PNG', offset: 1 }],
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
        { type: 'task', start: 4, end: 12 },
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
    },*/
  ],
}
