import { buildImg } from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise7: ExerciseData = {
  id: 7,
  task: '/content/7/task.png',
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/7/a1_0.mp3',
      ogg: '/content/7/a1_0.ogg',
      size: 5,
      position: { left: 10, top: -1 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/7/a1_1.mp3',
      ogg: '/content/7/a1_1.ogg',
      size: 5,
      position: { left: 10, top: 20 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/7/a1_2.mp3',
      ogg: '/content/7/a1_2.ogg',
      size: 5,
      position: { left: 10, top: 76 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/7/a1_3.mp3',
      ogg: '/content/7/a1_3.ogg',
      size: 5,
      position: { left: 10, top: 90 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe A 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe A 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe A 1.3',
      audioIndex: 3,
    },
  ],
  quiz: [
    {
      description:
        'Fülle die Wertetabelle aus. Beginne mit x = 0. Wie lautet der zugehörige y-Wert?',
      correctChoice: '5000',
      wrong1: '0',
      wrong2: '8000',
      cursor: { x: 11, y: 6 },
      quickviews: [{ type: 'solution', start: 2.7, end: 5.3 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/7/1.PNG' }, { src: '/content/7/2.PNG', offset: 1 }],
      layersPost: [{ src: '/content/7/3.PNG', offset: 5 }],
    },
    {
      description: "Weiter geht's. Wie lautet der Wert für x = 1 ?",
      correctChoice: '9000',
      wrong1: '5000',
      wrong2: '8000',
      cursor: { x: 14, y: 6 },
      quickviews: [{ type: 'solution', start: 2.7, end: 5.3 }],
      autoShowViews: true,
      layersPre: [],
      layersPost: [{ src: '/content/7/4.PNG', offset: 5 }],
    },
    {
      description: `Berechne die weiteren Werte und zeichne den Graph zu f. Wie sieht der korrekte Graph aus? ${buildImg(
        '/content/7/a1_1.png'
      )}`,
      correctChoice: '1',
      wrong1: '2',
      wrong2: '3',
      cursor: { x: 19, y: 12 },
      quickviews: [{ type: 'solution', start: 2.7, end: 5.3 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/7/5.PNG', offset: 7 }],
      layersPost: [{ src: '/content/7/6.PNG', offset: 5 }],
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
