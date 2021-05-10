import { ExerciseData } from './types'

export const exercise11: ExerciseData = {
  id: 11,
  task: '/content/11/task.png',
  width: 715,
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/11/b2_0.mp3',
      ogg: '/content/11/b2_0.ogg',
      size: 5,
      position: { left: 8, top: -0.3 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/11/b2_1.mp3',
      ogg: '/content/11/b2_1.ogg',
      size: 5,
      position: { left: 8, top: 26.7 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/11/b2_2.mp3',
      ogg: '/content/11/b2_2.ogg',
      size: 5,
      position: { left: 8, top: 47.8 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/11/b2_3.mp3',
      ogg: '/content/11/b2_3.ogg',
      size: 5,
      position: { left: 8, top: 61.1 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/11/b2_4.mp3',
      ogg: '/content/11/b2_4.ogg',
      size: 5,
      position: { left: 8, top: 84.3 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/11/b2_5.mp3',
      ogg: '/content/11/b2_5.ogg',
      size: 5,
      position: { left: 8, top: 92.4 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe B 2.1',
      audioIndex: 1,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe B 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe B 2.3',
      audioIndex: 3,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe B 2.4',
      audioIndex: 4,
    },
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe B 2.5',
      audioIndex: 5,
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
