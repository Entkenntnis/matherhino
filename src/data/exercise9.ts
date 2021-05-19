import { buildFrac, buildImg, buildOverline } from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise9: ExerciseData = {
  id: 9,
  task: '/content/9/task.jpg',
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 45,
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
      description:
        'Mit welchem Ansatz lässt sich das Volumen der Praline berechnen?',
      correctChoice:
        'V<sub>Praline</sub> = V<sub>großer Kegel</sub> - V<sub>kleiner Kegel</sub>',
      wrong1: 'V<sub>Praline</sub> = V<sub>Trapez</sub> &sdot; r²',
      wrong2:
        'V<sub>Praline</sub> = V<sub>große Pyramide</sub> - V<sub>kleine Pyramide</sub>',
      cursor: { x: 21, y: 26 },
      quickviews: [{ type: 'task', start: 4, end: 47 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/9/12.PNG', offset: 24 },
        { src: '/content/9/13.PNG', offset: 26 },
      ],
      layersPost: [{ src: '/content/9/14.PNG', offset: 26 }],
    },
    {
      description:
        'Wie lautet die Formel für das Volumen eines Kegels? Schlage in der Merkhilfe nach.',
      correctChoice: `${buildFrac('1', '3')} &sdot; r² &sdot; &pi; &sdot; h`,
      wrong1: `${buildFrac('1', '2')} &sdot; r² &sdot; &pi; &sdot; h`,
      wrong2: `${buildFrac('1', '6')} &sdot; r² &sdot; &pi; &sdot; h`,
      cursor: { x: 7, y: 30 },
      quickviews: [],
      layersPre: [{ src: '/content/9/15.PNG', offset: 29 }],
      layersPost: [{ src: '/content/9/16.PNG', offset: 28 }],
    },
    {
      description: 'Wie groß ist der Radius des großen Kegels?',
      correctChoice: '1,7 cm',
      wrong1: '1,0 cm',
      wrong2: '2,0 cm',
      cursor: { x: 12, y: 30 },
      quickviews: [
        { type: 'task', start: 4, end: 47 },
        { type: 'task', start: 56, end: 69 },
      ],
      layersPre: [],
      layersPost: [{ src: '/content/9/17.PNG', offset: 29 }],
    },
    {
      description: 'Welche Höhe hat der große Kegel?',
      correctChoice: '5 cm',
      wrong1: '4 cm',
      wrong2: '2 cm',
      cursor: { x: 17, y: 30 },
      quickviews: [{ type: 'task', start: 4, end: 47 }],
      layersPre: [],
      layersPost: [{ src: '/content/9/18.PNG', offset: 29 }],
    },
    {
      description:
        'Berechne das Volumen des großen Kegels. Wie lautet das Ergebnis?',
      correctChoice: '15,1 cm³',
      wrong1: '14,1 cm³',
      wrong2: '13,1 cm³',
      cursor: { x: 24, y: 29 },
      quickviews: [{ type: 'solution', start: 28, end: 30 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/19.PNG', offset: 29 }],
      layersPost: [{ src: '/content/9/20.PNG', offset: 29 }],
    },
    {
      description:
        'Mit welchem Term lässt sich das Volumen des kleine Kegels berechnen?',
      correctChoice: `${buildFrac('1', '3')} &sdot; 1,0² &sdot; &pi; &sdot; 3`,
      wrong1: `${buildFrac('1', '3')} &sdot; 1,7² &sdot; &pi; &sdot; 2`,
      wrong2: `${buildFrac('1', '3')} &sdot; 1,3² &sdot; &pi; &sdot; 3`,
      cursor: { x: 16, y: 34 },
      quickviews: [
        { type: 'task', start: 4, end: 47 },
        { type: 'task', start: 56, end: 69 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/21.PNG', offset: 33 }],
      layersPost: [{ src: '/content/9/22.PNG', offset: 32 }],
    },
    {
      description:
        'Berechne das Volumen des kleine Kegels. Wie lautet das Ergebnis?',
      correctChoice: '3,1 cm³',
      wrong1: '3,3 cm³',
      wrong2: '3,5 cm³',
      cursor: { x: 23, y: 33 },
      quickviews: [{ type: 'solution', start: 32, end: 33.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/23.PNG', offset: 33 }],
      layersPost: [{ src: '/content/9/24.PNG', offset: 33 }],
    },
    {
      description: 'Wie groß ist nun das Volumen der Praline?',
      correctChoice: '12,0 cm³',
      wrong1: '11,0 cm³',
      wrong2: '13,0 cm³',
      cursor: { x: 24, y: 36 },
      quickviews: [{ type: 'solution', start: 25.5, end: 37 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/25.PNG', offset: 36 }],
      layersPost: [{ src: '/content/9/26.PNG', offset: 36 }],
    },
    {
      description:
        'Wenn die Praline aus 89% Schokolade besteht, dann nimmt die Füllung 11% des Volumen der Praline ein. Welchen Faktor benötigst du in der Rechnung?',
      correctChoice: '0,11',
      wrong1: '1,11',
      wrong2: '1,10',
      cursor: { x: 10, y: 40 },
      quickviews: [{ type: 'solution', start: 38, end: 40 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/27.PNG', offset: 39 }],
      layersPost: [{ src: '/content/9/28.PNG', offset: 39 }],
    },
    {
      description: 'Berechne schließlich das Volumen der Füllung.',
      correctChoice: '1,3 cm³',
      wrong1: '1,4 cm³',
      wrong2: '1,2 cm³',
      cursor: { x: 24, y: 39 },
      quickviews: [{ type: 'solution', start: 38, end: 40 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/9/29.PNG', offset: 39 }],
      layersPost: [{ src: '/content/9/30.PNG', offset: 39 }],
    },
  ],
}
