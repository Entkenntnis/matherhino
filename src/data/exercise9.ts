import { ExerciseData } from './types'

export const exercise9: ExerciseData = {
  id: 9,
  task: '/content/9/task.jpg',
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/9/a3_0.mp3',
      ogg: '/content/9/a3_0.ogg',
      size: 5,
      position: { left: 10, top: -1 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/9/a3_1.mp3',
      ogg: '/content/9/a3_1.ogg',
      size: 5,
      position: { left: 10, top: 60.3 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/9/a3_2.mp3',
      ogg: '/content/9/a3_2.ogg',
      size: 5,
      position: { left: 10, top: 87.7 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe A 3.1',
      audioIndex: 1,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe A 3.2',
      audioIndex: 2,
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
