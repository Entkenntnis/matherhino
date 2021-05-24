import {
  buildFrac,
  buildImg,
  buildOverline,
  buildSqrt,
} from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise10: ExerciseData = {
  id: 10,
  task: '/content/10/task.png',
  width: 715,
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 160,
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
      beforeQuiz: 10,
    },
    {
      mp3: '/content/10/b1_3.mp3',
      ogg: '/content/10/b1_3.ogg',
      size: 5,
      position: { left: 8, top: 53 },
      beforeQuiz: 14,
    },
    {
      mp3: '/content/10/b1_4.mp3',
      ogg: '/content/10/b1_4.ogg',
      size: 5,
      position: { left: 8, top: 63.7 },
      beforeQuiz: 23,
    },
    {
      mp3: '/content/10/b1_5.mp3',
      ogg: '/content/10/b1_5.ogg',
      size: 5,
      position: { left: 8, top: 81 },
      beforeQuiz: 34,
    },
    {
      mp3: '/content/10/b1_6.mp3',
      ogg: '/content/10/b1_6.ogg',
      size: 5,
      position: { left: 8, top: 92 },
      beforeQuiz: 39,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 57 },
      title: 'Teilaufgabe B 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 60 },
      title: 'Teilaufgabe B 1.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 89 },
      title: 'Teilaufgabe B 1.4',
      audioIndex: 4,
    },
    {
      position: { x: 23, y: 115 },
      title: 'Teilaufgabe B 1.5',
      audioIndex: 5,
    },
    {
      position: { x: 23, y: 140 },
      title: 'Teilaufgabe B 1.6',
      audioIndex: 6,
    },
  ],
  quiz: [
    {
      description:
        'Benutze ein Gleichungssystem, um die Werte für b und c zu berechnen. Welche Gleichung für den Punkt P ist korrekt?',
      correctChoice: '19 = 0,5 &sdot; (-2)² + b &sdot; (-2) + c',
      wrong1: '-2 = 0,5 &sdot; (19)² + b &sdot; (19) + c',
      wrong2: '-2 = 0,5 &sdot; (-2)² + b &sdot; (-2) + c',
      cursor: { x: 22, y: 3 },
      quickviews: [{ type: 'task', start: 4, end: 27 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/10/1.PNG', offset: 1 },
        { src: '/content/10/2.PNG', offset: 1 },
      ],
      layersPost: [{ src: '/content/10/3.PNG', offset: 3 }],
    },
    {
      description: 'Wie lautet die Gleichung für den Punkt Q?',
      correctChoice: '-5 = 0,5 &sdot; 4² + b &sdot; 4 + c',
      wrong1: '-5 = 0,5 &sdot; 4² + b &sdot; 4',
      wrong2: '4 = 0,5 &sdot; (-5)² + b &sdot; (-5) + c',
      cursor: { x: 22, y: 5 },
      quickviews: [{ type: 'task', start: 4, end: 27 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/4.PNG', offset: 3 }],
      layersPost: [{ src: '/content/10/5.PNG', offset: 5 }],
    },
    {
      description: 'Vereinfache die Gleichung I so weit wie möglich:',
      correctChoice: '19 = 2 - 2b + c',
      wrong1: '19 = c',
      wrong2: '19 = -2 - 2b + c',
      cursor: { x: 20, y: 8 },
      quickviews: [{ type: 'solution', start: 2.5, end: 8.4 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/6.PNG', offset: 8 }],
      layersPost: [{ src: '/content/10/7.PNG', offset: 8 }],
    },
    {
      description: 'Vereinfache entsprechend auch die Gleichung II:',
      correctChoice: '-5 = 8 + 4b + c',
      wrong1: '-5 = 16 + 4b + c',
      wrong2: '-5 = 12 + 4b + c',
      cursor: { x: 20, y: 10 },
      quickviews: [{ type: 'solution', start: 2.5, end: 10.4 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/8.PNG', offset: 8 }],
      layersPost: [{ src: '/content/10/9.PNG', offset: 10 }],
    },
    {
      description:
        "Nutze das Subtraktionsverfahren (andere Verfahren sind auch möglich). Wie lautet die vereinfachte Gleichung I' - II' ?",
      correctChoice: '24 = (-6) - 6b',
      wrong1: '24 = 6 - 6b',
      wrong2: '24 = 10 - 6b',
      cursor: { x: 15, y: 16 },
      quickviews: [{ type: 'solution', start: 7.5, end: 16.4 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/10.PNG', offset: 12 }],
      layersPost: [{ src: '/content/10/11.PNG', offset: 14 }],
    },
    {
      description: 'Wie lauten die übrigen Umformungsschritte?',
      correctChoice: '30 = -6b &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = -5',
      wrong1: '30 = 6b &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = 5',
      wrong2: '12 = -6b &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = -2',
      cursor: { x: 11, y: 18 },
      quickviews: [{ type: 'solution', start: 15.5, end: 18.4 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/12.PNG', offset: 18 }],
      layersPost: [{ src: '/content/10/13.PNG', offset: 18 }],
    },
    {
      description:
        "Der Wert für b kann nun in die Gleichung I' eingesetzt werden, um c zu berechnen. Wie lautet die korrekte Einsetzung?",
      correctChoice: '19 = 2 - 2 &sdot; (-5) + c',
      wrong1: '19 = 2 - 2b - 5',
      wrong2: '19 = 2 - 2 - 5 + c',
      cursor: { x: 18, y: 22 },
      quickviews: [
        { type: 'solution', start: 19.5, end: 22.4 },
        { type: 'solution', start: 7.5, end: 8.4 },
        { type: 'solution', start: 17.5, end: 18.4 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/14.PNG', offset: 20 }],
      layersPost: [{ src: '/content/10/15.PNG', offset: 22 }],
    },
    {
      description: 'Wie lauten die übrigen Umformungsschritte?',
      correctChoice: '19 = 12 + c &nbsp;&nbsp;&rArr;&nbsp;&nbsp; c = 7',
      wrong1: '19 = 10 + c &nbsp;&nbsp;&rArr;&nbsp;&nbsp; c = 7',
      wrong2: '19 = 8 + c &nbsp;&nbsp;&rArr;&nbsp;&nbsp; c = 7',
      cursor: { x: 15, y: 24 },
      quickviews: [{ type: 'solution', start: 21.5, end: 24.4 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/16.PNG', offset: 24 }],
      layersPost: [{ src: '/content/10/17.PNG', offset: 24 }],
    },
    {
      description: 'Zeiche die Parabel. Welche Hilfspunkte sind korrekt?',
      correctChoice: '<img src="/content/10/b11_1.png" class="max-w-sm">',
      wrong1: '<img src="/content/10/b11_2.png" class="max-w-sm">',
      wrong2: '<img src="/content/10/b11_3.png" class="max-w-sm">',
      cursor: { x: 20, y: 45 },
      quickviews: [],
      layersPre: [{ src: '/content/10/18.PNG', offset: 26 }],
      layersPost: [{ src: '/content/10/19.PNG', offset: 29 }],
    },
    {
      description: `Welche Gerade ist korrekt? ${buildImg(
        '/content/10/b11_g.png'
      )}`,
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 21, y: 45 },
      quickviews: [{ type: 'task', start: 4, end: 27 }],
      layersPre: [],
      layersPost: [{ src: '/content/10/20.PNG', offset: 37 }],
    },
    {
      description:
        'Welche Zeichnung für A<sub>1</sub> und C<sub>1</sub> ist korrekt?',
      correctChoice: '<img src="/content/10/b12_11.png" class="max-w-xs">',
      wrong1: '<img src="/content/10/b12_12.png" class="max-w-xs">',
      wrong2: '<img src="/content/10/b12_13.png" class="max-w-xs">',
      cursor: { x: 17, y: 57 },
      quickviews: [{ type: 'task', start: 65, end: 96 }],
      layersPre: [{ src: '/content/10/21.PNG', offset: 57 }],
      layersPost: [{ src: '/content/10/22.PNG', offset: 43 }],
    },
    {
      description:
        'Welche Zeichnung für B<sub>1</sub> und D<sub>1</sub> ist korrekt?',
      correctChoice: '<img src="/content/10/b12_21.png" class="max-w-xs">',
      wrong1: '<img src="/content/10/b12_22.png" class="max-w-xs">',
      wrong2: '<img src="/content/10/b12_23.png" class="max-w-xs">',
      cursor: { x: 18, y: 57 },
      quickviews: [{ type: 'task', start: 65, end: 96 }],
      layersPre: [],
      layersPost: [{ src: '/content/10/23.PNG', offset: 44 }],
    },
    {
      description:
        'Welche Zeichnung für A<sub>2</sub> und C<sub>2</sub> ist korrekt?',
      correctChoice: '<img src="/content/10/b12_31.png">',
      wrong1: '<img src="/content/10/b12_32.png">',
      wrong2: '<img src="/content/10/b12_33.png">',
      cursor: { x: 19, y: 57 },
      quickviews: [{ type: 'task', start: 65, end: 96 }],
      layersPre: [],
      layersPost: [{ src: '/content/10/24.PNG', offset: 39 }],
    },
    {
      description:
        'Welche Zeichnung für B<sub>2</sub> und D<sub>2</sub> ist korrekt?',
      correctChoice: '<img src="/content/10/b12_41.png">',
      wrong1: '<img src="/content/10/b12_42.png">',
      wrong2: '<img src="/content/10/b12_43.png">',
      cursor: { x: 20, y: 57 },
      quickviews: [{ type: 'task', start: 65, end: 96 }],
      layersPre: [],
      layersPost: [{ src: '/content/10/25.PNG', offset: 41 }],
    },
    {
      description:
        'Was weißt du über den Bereich, in dem es Rauten A<sub>n</sub>B<sub>n</sub>C<sub>n</sub>D<sub>n</sub> gibt?',
      correctChoice:
        'Der Bereich liegt zwischen den Schnittpunkten von p und g',
      wrong1: 'Der Bereich liegt zwischen 0 und 10',
      wrong2: 'Der Bereich liegt zwischen C<sub>1</sub> und C<sub>2</sub>',
      cursor: { x: 23, y: 63 },
      quickviews: [
        { type: 'task', start: 65, end: 96 },
        { type: 'solution', start: 29.5, end: 54 },
      ],
      autoShowViews: true,
      layersPre: [
        { src: '/content/10/26.PNG', offset: 60 },
        { src: '/content/10/27.PNG', offset: 60 },
      ],
      layersPost: [{ src: '/content/10/28.PNG', offset: 60 }],
    },
    {
      description:
        'Die Parabel p besitzt die Gleichung y = 0,5x² - 5x + 7, die Gerade die Gleichung y = 0,5x - 2.<br><br>Welche neue Gleichung hilft bei der Bestimmung der Schnittpunkte von p und g ?',
      correctChoice: '0,5x² - 5x + 7 = 0,5x - 2',
      wrong1: '0,5x² - 5x + 7 = 0',
      wrong2: '0 = 0,5x - 2',
      cursor: { x: 22, y: 66 },
      quickviews: [],
      layersPre: [{ src: '/content/10/29.PNG', offset: 64 }],
      layersPost: [{ src: '/content/10/30.PNG', offset: 66 }],
    },
    {
      description:
        'Bringe die Terme auf die linke Seite. Wie lautet die zusammengefasste Gleichung?',
      correctChoice: '0,5x² - 5,5x + 9 = 0',
      wrong1: '0,5x² - 5x + 9 = 0',
      wrong2: '0,5x² - 4,5x + 9 = 0',
      cursor: { x: 14, y: 68 },
      quickviews: [{ type: 'solution', start: 65, end: 68 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/31.PNG', offset: 68 }],
      layersPost: [{ src: '/content/10/32.PNG', offset: 68 }],
    },
    {
      description:
        'Nutze die Lösungsformel für quadratische Gleichungen aus der Merkhilfe. Wie lautet der eingesetzte Term für D?<br><br>(Hinweis: a = 0,5 &nbsp;/&nbsp; b = -5,5 &nbsp;/&nbsp; c = 9)',
      correctChoice: 'D = (-5,5)² - 4 &sdot; 0,5 &sdot; 9',
      wrong1: 'D = 0,5² - 4 &sdot; 0,5 &sdot; 9',
      wrong2: 'D = 9² - 4 &sdot; 0,5 &sdot; 9',
      cursor: { x: 20, y: 74 },
      quickviews: [{ type: 'solution', start: 67, end: 74 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/33.PNG', offset: 70 }],
      layersPost: [{ src: '/content/10/34.PNG', offset: 74 }],
    },
    {
      description: 'Berechne den Wert von D.',
      correctChoice: '12,25',
      wrong1: '2,25',
      wrong2: '7,25',
      cursor: { x: 13, y: 76 },
      quickviews: [{ type: 'solution', start: 73.4, end: 76 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/35.PNG', offset: 76 }],
      layersPost: [{ src: '/content/10/36.PNG', offset: 76 }],
    },
    {
      description:
        'Die Lösungsformel ergibt zwei Lösungen. Der Term für x<sub>1</sub> ist angegeben. Wie lautet die erste Lösung?',
      correctChoice: 'x<sub>1</sub> = 9',
      wrong1: 'x<sub>1</sub> = 7',
      wrong2: 'x<sub>1</sub> = 5',
      cursor: { x: 15, y: 79 },
      quickviews: [{ type: 'solution', start: 73.4, end: 80 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/37.PNG', offset: 78 }],
      layersPost: [{ src: '/content/10/38.PNG', offset: 79 }],
    },
    {
      description: 'Wie lautet das Ergebnis für x<sub>2</sub> ?',
      correctChoice: `x<sub>2</sub> = ${buildFrac(
        `5,5 - ${buildSqrt('D')}`,
        '2 &sdot; 0,5'
      )} = 2`,
      wrong1: `x<sub>2</sub> = ${buildFrac(
        `5,5 - ${buildSqrt('D')}`,
        '2 &sdot; 0,5'
      )} = 1`,
      wrong2: `x<sub>2</sub> = ${buildFrac(
        `5,5 - ${buildSqrt('D')}`,
        '2 &sdot; 0,5'
      )} = 3`,
      cursor: { x: 15, y: 83 },
      quickviews: [{ type: 'solution', start: 73.4, end: 84 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/39.PNG', offset: 83 }],
      layersPost: [{ src: '/content/10/40.PNG', offset: 82 }],
    },
    {
      description:
        'Du weißt, dass die Schnittpunkte bei 2 und 9 liegen.<br><br>Wie lautet das gesuchte Intervall für x , in dem es Rauten A<sub>n</sub>B<sub>n</sub>C<sub>n</sub>D<sub>n</sub> gibt?',
      correctChoice: 'x &isinv; ] 2 ; 9 [',
      wrong1: 'x &isinv; [ 2 ; 9 ]',
      wrong2: 'x &isinv; { 2 ; 9 }',
      cursor: { x: 11, y: 86 },
      quickviews: [
        { type: 'task', start: 65, end: 96 },
        { type: 'solution', start: 29.5, end: 54 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/41.PNG', offset: 86 }],
      layersPost: [{ src: '/content/10/42.PNG', offset: 86 }],
    },
    {
      description:
        'Welcher Zusammenhang gilt für die Länge der Strecke A<sub>n</sub>C<sub>n</sub> ?',
      correctChoice: `${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )}(x) = y<sub>C<sub>n</sub></sub> - y<sub>A<sub>n</sub></sub>`,
      wrong1: `${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )}(x) = y<sub>A<sub>n</sub></sub> - y<sub>C<sub>n</sub></sub>`,
      wrong2: `${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )}(x) = y<sub>A<sub>n</sub></sub> + y<sub>C<sub>n</sub></sub>`,
      cursor: { x: 23, y: 89 },
      quickviews: [
        { type: 'solution', start: 88, end: 89.3 },
        { type: 'solution', start: 29.5, end: 54 },
        { type: 'task', start: 65, end: 96 },
      ],
      autoShowViews: true,
      layersPre: [
        { src: '/content/10/43.PNG', offset: 89 },
        { src: '/content/10/44.PNG', offset: 89 },
      ],
      layersPost: [{ src: '/content/10/45.PNG', offset: 89 }],
    },
    {
      description: 'Wie lautet der eingesetzte Term?',
      correctChoice: '(0,5x - 2) - (0,5x² - 5x + 7)',
      wrong1: '(0,5x² - 5x + 7) - (0,5x - 2)',
      wrong2: '(0,5x - 2) + (0,5x² - 5x + 7)',
      cursor: { x: 23, y: 91 },
      quickviews: [
        { type: 'solution', start: 88, end: 93 },
        { type: 'task', start: 65, end: 96 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/46.PNG', offset: 91 }],
      layersPost: [{ src: '/content/10/47.PNG', offset: 91 }],
    },
    {
      description: `Berechne als nächstes den Winkel &phi; : ${'<img src="/content/10/b14_1.png" class="mx-auto h-96 p-3">'} Welche Skizze zeigt einen sinnvollen Weg, um &phi; zu berechnen?`,
      correctChoice: '<img src="/content/10/b14_11.png" class="w-32">',
      wrong1: '<img src="/content/10/b14_12.png" class="w-32">',
      wrong2: '<img src="/content/10/b14_13.png" class="w-32">',
      cursor: { x: 7, y: 98 },
      quickviews: [],
      layersPre: [],
      layersPost: [{ src: '/content/10/49.PNG', offset: 95 }],
    },
    {
      description: 'Welcher Term passt zur Skizze?',
      correctChoice: `tan ${buildFrac('&phi;', '2')}`,
      wrong1: `sin ${buildFrac('&phi;', '2')}`,
      wrong2: `cos ${buildFrac('&phi;', '2')}`,
      cursor: { x: 13, y: 96 },
      quickviews: [{ type: 'solution', start: 94.5, end: 105 }],
      autoShowViews: true,
      layersPre: [],
      layersPost: [{ src: '/content/10/50.PNG', offset: 96 }],
    },
    {
      description: 'Welcher Wert kommt in den Zähler?',
      correctChoice: '1',
      wrong1: '2',
      wrong2: '3',
      cursor: { x: 19, y: 96 },
      quickviews: [
        { type: 'solution', start: 94.5, end: 105 },
        { type: 'solution', start: 38, end: 54 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/51.PNG', offset: 97 }],
      layersPost: [{ src: '/content/10/52.PNG', offset: 96 }],
    },
    {
      description: 'Welcher Wert kommt in den Nenner?',
      correctChoice: `0,5 &sdot; ${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )}(6)`,
      wrong1: `0,5 &sdot; ${buildOverline('A<sub>n</sub>C<sub>n</sub>')}(2)`,
      wrong2: `0,5 &sdot; ${buildOverline('A<sub>n</sub>C<sub>n</sub>')}(4)`,
      cursor: { x: 23, y: 98 },
      quickviews: [
        { type: 'solution', start: 94.5, end: 105 },
        { type: 'solution', start: 38, end: 54 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/53.PNG', offset: 98 }],
      layersPost: [{ src: '/content/10/54.PNG', offset: 98 }],
    },
    {
      description: `Berechne den Wert von ${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )}(6):`,
      correctChoice: '6',
      wrong1: '5',
      wrong2: '7',
      cursor: { x: 17, y: 103 },
      quickviews: [
        { type: 'solution', start: 94.5, end: 105 },
        { type: 'task', start: 122, end: 136 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/55.PNG', offset: 99 }],
      layersPost: [{ src: '/content/10/56.PNG', offset: 101 }],
    },
    {
      description: 'Welchen Wert hat der Tangens?',
      correctChoice: `${buildFrac('1', '3')}`,
      wrong1: `${buildFrac('1', '2')}`,
      wrong2: `${buildFrac('1', '6')}`,
      cursor: { x: 17, y: 106 },
      quickviews: [{ type: 'solution', start: 94.5, end: 107 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/57.PNG', offset: 106 }],
      layersPost: [{ src: '/content/10/58.PNG', offset: 105 }],
    },
    {
      description: 'Löse die Gleichung nach &phi; auf:',
      correctChoice: `&phi; = 2 &sdot; tan<sup>-1</sup> (${buildFrac(
        '1',
        '3'
      )})`,
      wrong1: `&phi; = tan<sup>-1</sup> (${buildFrac('1', '3')})`,
      wrong2: `&phi; = 3 &sdot; tan<sup>-1</sup> (${buildFrac('1', '3')})`,
      cursor: { x: 17, y: 108 },
      quickviews: [{ type: 'solution', start: 104.5, end: 109 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/59.PNG', offset: 109 }],
      layersPost: [{ src: '/content/10/60.PNG', offset: 108 }],
    },
    {
      description: 'Berechne schließlich das Ergebnis für &phi; :',
      correctChoice: '36,87°',
      wrong1: '38,87°',
      wrong2: '40,87°',
      cursor: { x: 23, y: 109 },
      quickviews: [{ type: 'solution', start: 104.5, end: 109 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/61.PNG', offset: 109 }],
      layersPost: [{ src: '/content/10/62.PNG', offset: 109 }],
    },
    {
      description: 'Berechne die Länge von A<sub>2</sub>B<sub>2</sub> :',
      correctChoice: `${buildOverline(
        'A<sub>2</sub>B<sub>2</sub>'
      )} = ${buildSqrt('1² + 3²')}`,
      wrong1: `${buildOverline('A<sub>2</sub>B<sub>2</sub>')} = ${buildSqrt(
        '1 + 3'
      )}`,
      wrong2: `${buildOverline('A<sub>2</sub>B<sub>2</sub>')} = ${buildSqrt(
        '1³ + 3³'
      )}`,
      cursor: { x: 12, y: 112 },
      quickviews: [{ type: 'solution', start: 38, end: 54 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/63.PNG', offset: 112 }],
      layersPost: [{ src: '/content/10/64.PNG', offset: 112 }],
    },
    {
      description: 'Wie lautet das Ergebnis?',
      correctChoice: '3,16 LE',
      wrong1: '3,26 LE',
      wrong2: '3,06 LE',
      cursor: { x: 20, y: 112 },
      quickviews: [{ type: 'solution', start: 111, end: 112 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/65.PNG', offset: 112 }],
      layersPost: [{ src: '/content/10/66.PNG', offset: 112 }],
    },
    {
      description:
        'Welche Skizze zeigt einen sinnvollen Weg, um die Koordinaten von B<sub>n</sub> zu bestimmen?',
      correctChoice: '<img src="/content/10/b15_3.png" width="255">',
      wrong1: '<img src="/content/10/b15_1.png" width="255">',
      wrong2: '<img src="/content/10/b15_2.png" width="255">',
      cursor: { x: 9, y: 122 },
      quickviews: [],
      layersPre: [
        { src: '/content/10/67_s114.PNG', offset: 115 },
        { src: '/content/10/68_s114.PNG', offset: 115 },
      ],
      layersPost: [{ src: '/content/10/69_s114.PNG', offset: 118 }],
    },
    {
      description:
        'A<sub>n</sub> und C<sub>n</sub> sind bekannt. Wie lauten die Koordinaten von M<sub>n</sub> ?',
      correctChoice: `M<sub>n</sub> ( x | ${buildFrac(
        'y<sub>A<sub>n</sub></sub> + y<sub>C<sub>n</sub></sub>',
        '2'
      )} )`,
      wrong1: `M<sub>n</sub> ( x | ${buildFrac(
        'y<sub>A<sub>n</sub></sub> - y<sub>C<sub>n</sub></sub>',
        '2'
      )} )`,
      wrong2: `M<sub>n</sub> ( x | ${buildFrac(
        'y<sub>A<sub>n</sub></sub> &sdot; y<sub>C<sub>n</sub></sub>',
        '2'
      )} )`,
      cursor: { x: 22, y: 126 },
      quickviews: [{ type: 'solution', start: 114, end: 127 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/70_s114.PNG', offset: 123 }],
      layersPost: [{ src: '/content/10/71_s114.PNG', offset: 125 }],
    },
    {
      description: 'Setze ein.',
      correctChoice: `M<sub>n</sub> ( x | ${buildFrac(
        '0,5x² - 5x + 7 + 0,5x - 2',
        '2'
      )} )`,
      wrong1: `M<sub>n</sub> ( x | ${buildFrac(
        '0,5x² - 5x + 7 - 0,5x + 2',
        '2'
      )} )`,
      wrong2: `M<sub>n</sub> ( x | ${buildFrac(
        '- 0,5x² + 5x - 7 + 0,5x - 2',
        '2'
      )} )`,
      cursor: { x: 23, y: 130 },
      quickviews: [
        { type: 'solution', start: 124.5, end: 131 },
        { type: 'task', start: 65, end: 96 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/72_s114.PNG', offset: 129 }],
      layersPost: [{ src: '/content/10/73_s114.PNG', offset: 129 }],
    },
    {
      description: 'Vereinfache.',
      correctChoice: `M<sub>n</sub> ( x | 0,25x² - 2,25x + 2,5 )`,
      wrong1: `M<sub>n</sub> ( x | 0,5x² - 4,5x + 5 )`,
      wrong2: `M<sub>n</sub> ( x | x² -9x + 10 )`,
      cursor: { x: 21, y: 133 },
      quickviews: [{ type: 'solution', start: 128, end: 133 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/74_s114.PNG', offset: 133 }],
      layersPost: [{ src: '/content/10/75_s114.PNG', offset: 133 }],
    },
    {
      description: 'Wie lauten die Koordinaten von B<sub>n</sub> ?',
      correctChoice: 'B<sub>n</sub> ( x + 1 | 0,25x² - 2,25x + 2,5 )',
      wrong1: 'B<sub>n</sub> ( x - 1 | 0,25x² - 2,25x + 2,5 )',
      wrong2: 'B<sub>n</sub> ( x | 0,25x² - 2,25x + 2,5 )',
      cursor: { x: 23, y: 137 },
      quickviews: [{ type: 'solution', start: 131.5, end: 137 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/76_s114.PNG', offset: 135 }],
      layersPost: [{ src: '/content/10/77_s114.PNG', offset: 137 }],
    },
    {
      description: 'Welche Formel beschreibt den Flächeninhalt der Raute?',
      correctChoice: `A = ${buildFrac('1', '2')} &sdot; ${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )} &sdot; 2`,
      wrong1: `A = ${buildFrac('1', '3')} &sdot; ${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )} &sdot; 2`,
      wrong2: `A = ${buildFrac('1', '4')} &sdot; ${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )} &sdot; 2`,
      cursor: { x: 19, y: 142 },
      quickviews: [{ type: 'solution', start: 25 + 114, end: 28 + 114 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/10/78_s114.PNG', offset: 140 },
        { src: '/content/10/79_s114.PNG', offset: 140 },
      ],
      layersPost: [{ src: '/content/10/80_s114.PNG', offset: 142 }],
    },
    {
      description: 'Wann erreicht der Flächeninhalt sein Maximum?',
      correctChoice: `Bei maximaler Länge ${buildOverline(
        'A<sub>0</sub>C<sub>0</sub>'
      )}`,
      wrong1: `Bei Länge ${buildOverline('A<sub>n</sub>C<sub>n</sub>')} = 6`,
      wrong2: `Bei minimaler Länge ${buildOverline(
        'A<sub>0</sub>C<sub>0</sub>'
      )}`,
      cursor: { x: 9, y: 146 },
      quickviews: [{ type: 'solution', start: 25 + 114, end: 31.5 + 114 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/81_s114.PNG', offset: 144 }],
      layersPost: [{ src: '/content/10/82_s114.PNG', offset: 144 }],
    },
    {
      description: `Berechne mit dem Taschenrechner die maximale Länge ${buildOverline(
        'A<sub>0</sub>C<sub>0</sub>'
      )} .<br><br>Es ist bekannt: ${buildOverline(
        'A<sub>n</sub>C<sub>n</sub>'
      )}(x) = (-0,5x² + 5,5x - 9) LE`,
      correctChoice: '6,13 LE',
      wrong1: '6,23 LE',
      wrong2: '6,33 LE',
      cursor: { x: 18, y: 146 },
      quickviews: [],
      layersPre: [{ src: '/content/10/83_s114.PNG', offset: 146 }],
      layersPost: [{ src: '/content/10/84_s114.PNG', offset: 146 }],
    },
    {
      description: 'Welche Schlussfolgerung gilt?',
      correctChoice: `Der maximale Flächeninhalt A<sub>max</sub> beträgt 6,13 FE, daher ist der Flächeninhalt der Rauten stets kleiner als 7 FE.`,
      wrong1: `Der maximale Flächeninhalt A<sub>max</sub> beträgt somit 7 FE.`,
      wrong2:
        'Damit gilt, dass jede Raute mindestens einen Flächeninhalt von 6,13&nbsp;FE hat.',
      cursor: { x: 13, y: 152 },
      quickviews: [{ type: 'solution', start: 25 + 114, end: 38 + 114 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/10/85_s114.PNG', offset: 148 }],
      layersPost: [{ src: '/content/10/86_s114.PNG', offset: 148 }],
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
