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
      beforeQuiz: 3,
    },
    {
      mp3: '/content/7/a1_3.mp3',
      ogg: '/content/7/a1_3.ogg',
      size: 5,
      position: { left: 10, top: 90 },
      beforeQuiz: 7,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe A 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 21 },
      title: 'Teilaufgabe A 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 32 },
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
      layersPre: [
        { src: '/content/7/1.PNG' },
        { src: '/content/7/2.PNG', offset: 1 },
      ],
      layersPost: [{ src: '/content/7/3.PNG', offset: 5 }],
    },
    {
      description:
        'Nutze den Taschenrechner. Wie lautet der Tabellenwert für x = 1 ?',
      correctChoice: '9000',
      wrong1: '5000',
      wrong2: '8750',
      cursor: { x: 14, y: 6 },
      quickviews: [
        { type: 'solution', start: 2.7, end: 5.3 },
        { type: 'task', start: 32, end: 43 },
      ],
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
    {
      description: 'Wie groß ist die ursprüngliche Anzahl der Ladestationen?',
      correctChoice: '5000',
      wrong1: '9000',
      wrong2: '1,75',
      cursor: { x: 21, y: 22 },
      quickviews: [
        { type: 'task', start: 3, end: 26 },
        { type: 'solution', start: 2.7, end: 5.3 },
      ],
      autoShowViews: true,
      layersPre: [
        { src: '/content/7/7.PNG', offset: 21 },
        { src: '/content/7/8.PNG', offset: 21 },
      ],
      layersPost: [{ src: '/content/7/9.PNG', offset: 21 }],
    },
    {
      description:
        'Die Anzahl der Ladestationen steigt um 600%. Wie viele Ladestationen sind das dann?',
      correctChoice: '35000',
      wrong1: '30000',
      wrong2: '40000',
      cursor: { x: 21, y: 25 },
      quickviews: [{ type: 'solution', start: 20.5, end: 25.2 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/7/10.PNG', offset: 23 }],
      layersPost: [{ src: '/content/7/11.PNG', offset: 25 }],
    },
    {
      description:
        'Die Anzahl der Ladestationen ist auf 35000 gestiegen. Wie lautet der zugehörige x-Wert ungefähr?',
      correctChoice: '3,5',
      wrong1: '3,2',
      wrong2: '3,8',
      cursor: { x: 21, y: 27 },
      quickviews: [{ type: 'solution', start: 6.5, end: 18.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/7/12.PNG', offset: 27 }],
      layersPost: [{ src: '/content/7/13.PNG', offset: 11 }],
    },
    {
      description:
        'Nach welcher Zeit hat die Anzahl der Ladestationen erstmals um 600% zugenommen?',
      correctChoice: 'ungefähr 3,5 Jahren',
      wrong1: 'ungefähr 3,5 Monaten',
      wrong2: 'ungefähr 3,5 Wochen',
      cursor: { x: 22, y: 29 },
      quickviews: [
        { type: 'task', start: 3, end: 26 },
        { type: 'solution', start: 6.5, end: 18.5 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/7/14.PNG', offset: 29 }],
      layersPost: [{ src: '/content/7/15.PNG', offset: 29 }],
    },
    {
      description:
        'Die Anzahl der Ladestationen wird jedes Jahr mit einem festen Faktor multipliziert. Wie lautet dieser Faktor?',
      correctChoice: '1,75',
      wrong1: '5000',
      wrong2: '600%',
      cursor: { x: 9, y: 34 },
      quickviews: [{ type: 'task', start: 3, end: 26 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/7/16.PNG', offset: 32 },
        { src: '/content/7/17.PNG', offset: 32 },
      ],
      layersPost: [{ src: '/content/7/18.PNG', offset: 34 }],
    },
    {
      description: 'Welcher jährlichen Zunahme in Prozent entspricht das?',
      correctChoice: '75%',
      wrong1: '175%',
      wrong2: '275%',
      cursor: { x: 17, y: 36 },
      quickviews: [{ type: 'solution', start: 31.5, end: 36 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/7/19.PNG', offset: 36 }],
      layersPost: [{ src: '/content/7/20.PNG', offset: 36 }],
    },
  ],
}
