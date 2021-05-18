import { buildFrac, buildImg, buildOverline } from '../utils/mathBuilder'
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
      beforeQuiz: 5,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe A 3.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 24 },
      title: 'Teilaufgabe A 3.2',
      audioIndex: 2,
    },
  ],
  quiz: [
    {
      description: `Beginne mit der Berechnung von ${buildOverline(
        'MD'
      )} . Welche farblich markierten Angaben sind bekannt und helfen dir bei der Berechnung von ${buildOverline(
        'MD'
      )} ?`,
      correctChoice: '<img src="/content/9/a31_1.png" class="max-h-96">',
      wrong1: '<img src="/content/9/a31_2.png" class="max-h-96">',
      wrong2: '<img src="/content/9/a31_3.png" class="max-h-96">',
      cursor: { x: 24, y: 3 },
      quickviews: [{ type: 'task', start: 28, end: 37 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/9/1.PNG', offset: 1 },
        { src: '/content/9/2.PNG', offset: 1 },
      ],
      layersPost: [{ src: '/content/9/3.PNG', offset: 3 }],
    },
    {
      description: `Nutze den Tangens im Dreieck DSM. Wie lautet die Gleichung? <img src="/content/9/a31_1.png" class="max-h-96 mx-auto">`,
      correctChoice: `tan 71,6° = ${buildFrac('5 cm', buildOverline('MD'))}`,
      wrong1: `tan 71,6° = ${buildFrac(buildOverline('MD'), '5 cm')}`,
      wrong2: `tan 71,6° = ${buildFrac('2 cm', '5 cm')}`,
      cursor: { x: 14, y: 6 },
      quickviews: [{ type: 'task', start: 28, end: 37 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/4.PNG', offset: 6 }],
      layersPost: [{ src: '/content/9/5.PNG', offset: 5 }],
    },
    {
      description:
        'Löse die Gleichung nach der gesuchten Länge auf. Wie lautet das Ergebnis?',
      correctChoice: `${buildOverline('MD')} = ${buildFrac(
        '5 cm',
        'tan 71,6°'
      )}`,
      wrong1: `${buildOverline('MD')} = ${buildFrac('tan 71,6°', '5 cm')}`,
      wrong2: `${buildOverline('MD')} = ${buildFrac('5 cm', '71,6°')}`,
      cursor: { x: 13, y: 11 },
      quickviews: [{ type: 'solution', start: 5, end: 11 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/6.PNG', offset: 10 }],
      layersPost: [{ src: '/content/9/7.PNG', offset: 9 }],
    },
    {
      description:
        'Verwende den Vierstreckensatz, um die Länge der Strecke AN zu berechnen. Die linke Seite der Gleichung ist bereits gegeben. Wie lautet die rechte Seite?',
      correctChoice: buildFrac('3 cm', '5 cm'),
      wrong1: buildFrac('2 cm', '5 cm'),
      wrong2: buildFrac('5 cm', '3 cm'),
      cursor: { x: 11, y: 17 },
      quickviews: [
        { type: 'solution', start: 12.4, end: 21 },
        { type: 'task', start: 28, end: 37 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/8.PNG', offset: 12 }],
      layersPost: [{ src: '/content/9/9.PNG', offset: 16 }],
    },
    {
      description:
        'Löse auch diese Gleichung auf. Wie lautet der korrekte Umformungsschritt?',
      correctChoice: `${buildOverline('AN')} = ${buildFrac(
        '3',
        '5'
      )} &sdot; ${buildOverline('MD')}`,
      wrong1: `${buildOverline('AN')} = ${buildFrac(
        '3',
        `5 &sdot; ${buildOverline('MD')}`
      )}`,
      wrong2: `${buildOverline('AN')} = ${buildFrac(
        `3 &sdot; ${buildOverline('MD')}`,
        '5'
      )}`,
      cursor: { x: 20, y: 21 },
      quickviews: [{ type: 'solution', start: 12.4, end: 22 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/10.PNG', offset: 21 }],
      layersPost: [{ src: '/content/9/11.PNG', offset: 20 }],
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
