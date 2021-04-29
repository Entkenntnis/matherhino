import { ExerciseData } from './types'

export const exercise6: ExerciseData = {
  id: 6,
  task: '/content/6/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/6/b2_0.mp3',
      ogg: '/content/6/b2_0.ogg',
      size: 5,
      position: { left: 9, top: -0.7 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/6/b2_1.mp3',
      ogg: '/content/6/b2_1.ogg',
      size: 5,
      position: { left: 9, top: 21.3 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/6/b2_2.mp3',
      ogg: '/content/6/b2_2.ogg',
      size: 5,
      position: { left: 9, top: 35.8 },
      beforeQuiz: 5,
    },
    {
      mp3: '/content/6/b2_3.mp3',
      ogg: '/content/6/b2_3.ogg',
      size: 5,
      position: { left: 9, top: 50.6 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/6/b2_4.mp3',
      ogg: '/content/6/b2_4.ogg',
      size: 5,
      position: { left: 9, top: 59.6 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/6/b2_5.mp3',
      ogg: '/content/6/b2_5.ogg',
      size: 5,
      position: { left: 9, top: 74 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/6/b2_6.mp3',
      ogg: '/content/6/b2_6.ogg',
      size: 5,
      position: { left: 9, top: 90.6 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 2.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 11 },
      title: 'Teilaufgabe B 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 21 },
      title: 'Teilaufgabe B 2.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 31 },
      title: 'Teilaufgabe B 2.4',
      audioIndex: 4,
    },
    {
      position: { x: 23, y: 41 },
      title: 'Teilaufgabe B 2.5',
      audioIndex: 5,
    },
    {
      position: { x: 23, y: 51 },
      title: 'Teilaufgabe B 2.6',
      audioIndex: 6,
    },
  ],
  quiz: [
    {
      description:
        'Beginne mit dem Zeichnen der Gerade g . Wie sieht die korrekte Zeichnung aus? <img class="p-3 pt-8" src="/content/6/b21_1.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 18, y: 14 },
      quickviews: [{ type: 'task', start: 3, end: 36 }],
      layersPre: [
        { src: '/content/6/1.PNG', offset: 1 },
        { src: '/content/6/2.PNG', offset: 2 },
      ],
      layersPost: [{ src: '/content/6/3.PNG', offset: 17 }],
    },

    {
      description:
        'Die Punkte A und B sind bereits eingezeichnet. Welche Punkte/Strecken kannst du als nächstes zeichnen?',
      correctChoice: '[AC] und M',
      wrong1: 'D<sub>1</sub>',
      wrong2: '[B<sub>1</sub>D<sub>1</sub>]',
      cursor: { x: 19, y: 14 },
      quickviews: [
        { type: 'solution', start: 14, end: 25 },
        { type: 'task', start: 3, end: 36 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/4.PNG', offset: 16 }],
      layersPost: [{ src: '/content/6/5.PNG', offset: 17 }],
    },
    {
      description:
        'Wo befindet sich der Punkt B<sub>1</sub> ? <img class="p-3 pt-8" src="/content/6/b21_2.png" />',
      correctChoice: '1',
      wrong1: '2',
      wrong2: '3',
      cursor: { x: 20, y: 14 },
      quickviews: [
        { type: 'task', start: 41, end: 54 },
        { type: 'task', start: 3, end: 36 },
      ],
      layersPre: [],
      layersPost: [{ src: '/content/6/6.PNG', offset: 22 }],
    },
    {
      description:
        'Wo befindet sich schließlich der Punkt D<sub>1</sub> ? <img class="p-3 pt-8" src="/content/6/b21_3.png" />',
      correctChoice: '1',
      wrong1: '2',
      wrong2: '3',
      cursor: { x: 21, y: 14 },
      quickviews: [{ type: 'task', start: 3, end: 36 }],
      layersPre: [],
      layersPost: [{ src: '/content/6/7.PNG', offset: 5 }],
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
    },*/
  ],
}
