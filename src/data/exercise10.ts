import { ExerciseData } from './types'

export const exercise10: ExerciseData = {
  id: 10,
  task: '/content/10/task.png',
  width: 715,
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/10/b1_0.mp3',
      ogg: '/content/10/b1_0.ogg',
      size: 5,
      position: { left: 8, top: -0.5 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/10/b1_1.mp3',
      ogg: '/content/10/b1_1.ogg',
      size: 5,
      position: { left: 8, top: 16.5 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/10/b1_2.mp3',
      ogg: '/content/10/b1_2.ogg',
      size: 5,
      position: { left: 8, top: 33.3 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/10/b1_3.mp3',
      ogg: '/content/10/b1_3.ogg',
      size: 5,
      position: { left: 8, top: 53 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/10/b1_4.mp3',
      ogg: '/content/10/b1_4.ogg',
      size: 5,
      position: { left: 8, top: 63.7 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/10/b1_5.mp3',
      ogg: '/content/10/b1_5.ogg',
      size: 5,
      position: { left: 8, top: 81 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/10/b1_6.mp3',
      ogg: '/content/10/b1_6.ogg',
      size: 5,
      position: { left: 8, top: 92 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe B 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe B 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe B 1.3',
      audioIndex: 3,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe B 1.4',
      audioIndex: 4,
    },
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe B 1.5',
      audioIndex: 5,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe B 1.6',
      audioIndex: 6,
    },
  ],
  quiz: [
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
