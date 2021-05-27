import {
  buildFrac,
  buildImg,
  buildOverline,
  buildSqrt,
} from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise11: ExerciseData = {
  id: 11,
  task: '/content/11/task.png',
  width: 715,
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 130,
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
      beforeQuiz: 6,
    },
    {
      mp3: '/content/11/b2_3.mp3',
      ogg: '/content/11/b2_3.ogg',
      size: 5,
      position: { left: 8, top: 61.1 },
      beforeQuiz: 12,
    },
    {
      mp3: '/content/11/b2_4.mp3',
      ogg: '/content/11/b2_4.ogg',
      size: 5,
      position: { left: 8, top: 84.3 },
      beforeQuiz: 20,
    },
    {
      mp3: '/content/11/b2_5.mp3',
      ogg: '/content/11/b2_5.ogg',
      size: 5,
      position: { left: 8, top: 92.4 },
      beforeQuiz: 31,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 2.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 37 },
      title: 'Teilaufgabe B 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 49 },
      title: 'Teilaufgabe B 2.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 76 },
      title: 'Teilaufgabe B 2.4',
      audioIndex: 4,
    },
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 2.5',
      audioIndex: 5,
    },
  ],
  quiz: [
    {
      description: 'Welche Skizze zeigt die korrekte Position von B und D ?',
      correctChoice: '<img src="/content/11/b21_12.png">',
      wrong1: '<img src="/content/11/b21_11.png">',
      wrong2: '<img src="/content/11/b21_13.png">',
      cursor: { x: 22, y: 28 },
      quickviews: [],
      layersPre: [
        { src: '/content/11/1.PNG', offset: 1 },
        { src: '/content/11/2.PNG', offset: 26 },
      ],
      layersPost: [{ src: '/content/11/3.PNG', offset: 23 }],
    },
    {
      description: 'Welche Skizze zeigt die korrekte Position von E und G ?',
      correctChoice: '<img src="/content/11/b21_21.png">',
      wrong1: '<img src="/content/11/b21_22.png">',
      wrong2: '<img src="/content/11/b21_23.png">',
      cursor: { x: 24, y: 8 },
      quickviews: [],
      layersPre: [],
      layersPost: [{ src: '/content/11/4.PNG', offset: 5 }],
    },
    {
      description: 'Welche Skizze zeigt das vollständige Schrägbild?',
      correctChoice: '<img src="/content/11/b21_31.png">',
      wrong1: '<img src="/content/11/b21_32.png">',
      wrong2: '<img src="/content/11/b21_33.png">',
      cursor: { x: 20, y: 8 },
      quickviews: [],
      layersPre: [],
      layersPost: [{ src: '/content/11/5.PNG', offset: 2 }],
    },
    {
      description: `Wie lang ist die Strecke [ME] ? ${buildImg(
        '/content/11/b21_4.png'
      )}`,
      correctChoice: `${buildOverline('ME')} = ${buildSqrt(
        '5² + 10²'
      )} cm = 11,18 cm`,
      wrong1: `${buildOverline('ME')} = ${buildSqrt('7² + 10²')} cm = 11,18 cm`,
      wrong2: `${buildOverline('ME')} = ${buildSqrt('4² + 10²')} cm = 11,18 cm`,
      cursor: { x: 23, y: 31 },
      quickviews: [],
      layersPre: [{ src: '/content/11/6.PNG', offset: 30 }],
      layersPost: [{ src: '/content/11/7.PNG', offset: 31 }],
    },
    {
      description: `Wie lässt sich das Maß &phi; bestimmen? ${buildImg(
        '/content/11/b21_5.png'
      )}`,
      correctChoice: `tan &phi; = ${buildFrac('10', '5')}`,
      wrong1: `tan &phi; = ${buildFrac('5', '10')}`,
      wrong2: `tan &phi; = 10`,
      cursor: { x: 9, y: 34 },
      quickviews: [],
      layersPre: [{ src: '/content/11/8.PNG', offset: 34 }],
      layersPost: [{ src: '/content/11/9.PNG', offset: 33 }],
    },
    {
      description: 'Wie lässt sich die Gleichung umformen?',
      correctChoice: '&phi; = tan<sup>-1</sup> (2) = 63,43 °',
      wrong1: `&phi; = tan<sup>-1</sup> (${buildFrac('1', '2')}) = 63,43 °`,
      wrong2: `&phi; = tan ${buildFrac('1', '2')} = 63,43 °`,
      cursor: { x: 24, y: 34 },
      quickviews: [{ type: 'solution', start: 33, end: 35 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/10.PNG', offset: 34 }],
      layersPost: [{ src: '/content/11/11.PNG', offset: 34 }],
    },
    {
      description:
        'Welche Skizze zeigt die korrekte Position von S<sub>1</sub> ?',
      correctChoice: '<img src="/content/11/b22_11.png">',
      wrong1: '<img src="/content/11/b22_12.png">',
      wrong2: '<img src="/content/11/b22_13.png">',
      cursor: { x: 19, y: 12 },
      quickviews: [{ type: 'task', start: 97, end: 118 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/11/12.PNG', offset: 37 },
        { src: '/content/11/13.PNG', offset: 37 },
      ],
      layersPost: [{ src: '/content/11/14.PNG', offset: 6 }],
    },
    {
      description:
        'Bereche den Flächeninhalt des Dreiecks S<sub>1</sub>GE. <br><br>Welche Skizze zeigt einen sinnvollen Rechenweg?',
      correctChoice: '<img src="/content/11/b22_21.png">',
      wrong1: '<img src="/content/11/b22_22.png">',
      wrong2: '<img src="/content/11/b22_23.png">',
      cursor: { x: 7, y: 39 },
      quickviews: [],
      layersPre: [{ src: '/content/11/15.PNG', offset: 39 }],
      layersPost: [],
    },
    {
      description: `Welche Formel passt zu dieser Skizze? ${buildImg(
        '/content/11/b22_21.png'
      )}`,
      correctChoice: `A<sub>S<sub>1</sub>GE</sub> = ${buildFrac(
        '1',
        '2'
      )} &sdot; 3 &sdot; 10 &sdot; sin 63,43°`,
      wrong1: `A<sub>S<sub>1</sub>GE</sub> = ${buildFrac(
        '1',
        '2'
      )} &sdot; 3 &sdot; 10 &sdot; cos 63,43°`,
      wrong2: `A<sub>S<sub>1</sub>GE</sub> = ${buildFrac(
        '1',
        '2'
      )} &sdot; 3 &sdot; 10 &sdot; tan 63,43°`,
      cursor: { x: 23, y: 39 },
      quickviews: [],
      layersPre: [],
      layersPost: [{ src: '/content/11/16.PNG', offset: 39 }],
    },
    {
      description: 'Berechne das Ergebnis.',
      correctChoice: '13,42 cm²',
      wrong1: '12,42 cm²',
      wrong2: '11,42 cm²',
      cursor: { x: 20, y: 41 },
      quickviews: [{ type: 'solution', start: 38.3, end: 41.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/17.PNG', offset: 41 }],
      layersPost: [{ src: '/content/11/18.PNG', offset: 41 }],
    },
    {
      description: `Berechne die Länge von S<sub>1</sub>G . ${buildImg(
        '/content/11/b22_21.png'
      )}`,
      correctChoice: `${buildOverline('S<sub>1</sub>G')} = ${buildSqrt(
        ' 3² + 10²  - 2 &sdot; 3 &sdot; 10 &sdot; cos 63,43°'
      )}`,
      wrong1: `${buildOverline('S<sub>1</sub>G')} = ${buildSqrt(
        ' 3² + 10²  - 2 &sdot; 3 &sdot; 10 &sdot; sin 63,43°'
      )}`,
      wrong2: `${buildOverline('S<sub>1</sub>G')} = ${buildSqrt(' 3² + 10²')}`,
      cursor: { x: 24, y: 44 },
      quickviews: [],
      layersPre: [{ src: '/content/11/19.PNG', offset: 44 }],
      layersPost: [{ src: '/content/11/20.PNG', offset: 44 }],
    },
    {
      description: 'Berechne das Ergebnis.',
      correctChoice: '9,06 cm',
      wrong1: '10,06 cm',
      wrong2: '11,06 cm',
      cursor: { x: 12, y: 46 },
      quickviews: [{ type: 'solution', start: 43, end: 46.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/21.PNG', offset: 46 }],
      layersPost: [{ src: '/content/11/22.PNG', offset: 46 }],
    },
    {
      description:
        'Welche Skizze zeigt die korrekte Position von S<sub>2</sub> ?',
      correctChoice: '<img src="/content/11/b23_11.png" class="w-96">',
      wrong1: '<img src="/content/11/b23_12.png" class="w-96">',
      wrong2: '<img src="/content/11/b23_13.png" class="w-96">',
      cursor: { x: 19, y: 28 },
      quickviews: [{ type: 'task', start: 134, end: 145.5 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/11/23.PNG', offset: 49 },
        { src: '/content/11/24.PNG', offset: 49 },
      ],
      layersPost: [{ src: '/content/11/25.PNG', offset: 16 }],
    },
    {
      description: 'Welche Skizze zeigt die vollständige Zeichnung?',
      correctChoice: '<img src="/content/11/b23_21.png">',
      wrong1: '<img src="/content/11/b23_22.png">',
      wrong2: '<img src="/content/11/b23_23.png">',
      cursor: { x: 20, y: 28 },
      quickviews: [{ type: 'task', start: 134, end: 145.5 }],
      autoShowViews: true,
      layersPre: [],
      layersPost: [{ src: '/content/11/26.PNG', offset: 18 }],
    },
    {
      description: 'Welche Formel gilt für das Volumen einer Pyramide?',
      correctChoice: `V = ${buildFrac('1', '3')} &sdot; G &sdot; h`,
      wrong1: `V = ${buildFrac('1', '2')} &sdot; G &sdot; h`,
      wrong2: `V = G &sdot; h`,
      cursor: { x: 11, y: 51 },
      quickviews: [],
      layersPre: [{ src: '/content/11/27.PNG', offset: 51 }],
      layersPost: [{ src: '/content/11/28.PNG', offset: 50 }],
    },
    {
      description:
        'Welchen Flächeninhalt hat die Grundfläche der Pyramide ABCDS<sub>n</sub> ?',
      correctChoice: `G = ${buildFrac('1', '2')} &sdot; 6 &sdot; 10 = 30 cm²`,
      wrong1: `G = &sdot; 6 &sdot; 10 = 60 cm²`,
      wrong2: `G = ${buildFrac('1', '4')} &sdot; 6 &sdot; 10 = 15 cm²`,
      cursor: { x: 19, y: 54 },
      quickviews: [{ type: 'solution', start: 15, end: 29 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/29.PNG', offset: 54 }],
      layersPost: [{ src: '/content/11/30.PNG', offset: 53 }],
    },
    {
      description:
        'Bereche die Länge der Höhe Q<sub>n</sub>S<sub>n</sub> in Abhängigkeit von x .<br><br>Welche Skizze zeigt einen sinnvollen Ansatz?',
      correctChoice: '<img src="/content/11/b23_31.png" class="h-96">',
      wrong1: '<img src="/content/11/b23_32.png" class="h-96">',
      wrong2: '<img src="/content/11/b23_33.png" class="h-96">',
      cursor: { x: 24, y: 56 },
      quickviews: [],
      layersPre: [{ src: '/content/11/31.PNG', offset: 56 }],
      layersPost: [{ src: '/content/11/32.PNG', offset: 56 }],
    },
    {
      description: `<img src="/content/11/b23_31.png" class="mx-auto p-3 my-3 w-72"> Ergänze den Zähler auf der rechten Seite. <br><br>(Bekannt: ${buildOverline(
        'ES<sub>n</sub>'
      )} = x cm; ${buildOverline('AE')} = 10 cm; ${buildOverline(
        'ME'
      )} = 11,18 cm)`,
      correctChoice: '(11,18 - x) cm',
      wrong1: 'x cm',
      wrong2: '(11,18 + x) cm',
      cursor: { x: 19, y: 59 },
      quickviews: [{ type: 'solution', start: 57.4, end: 60 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/33.PNG', offset: 58 }],
      layersPost: [{ src: '/content/11/34.PNG', offset: 58 }],
    },
    {
      description:
        'Forme die Gleichung um. Welcher Zwischenschritt ist korrekt?',
      correctChoice: `${buildOverline(
        'Q<sub>n</sub>S<sub>n</sub>'
      )}(x) = (10 - ${buildFrac('10', '11,18')}x) cm`,
      wrong1: `${buildOverline(
        'Q<sub>n</sub>S<sub>n</sub>'
      )}(x) = (10 - ${buildFrac('1', '11,18')}x) cm`,
      wrong2: `${buildOverline(
        'Q<sub>n</sub>S<sub>n</sub>'
      )}(x) = (10 - ${buildFrac('100', '11,18')}x) cm`,
      cursor: { x: 19, y: 69 },
      quickviews: [{ type: 'solution', start: 57.4, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/35.PNG', offset: 63 }],
      layersPost: [{ src: '/content/11/36.PNG', offset: 63 }],
    },
    {
      description: `Du weißt nun:<br><br>G = 30 cm²<br><br>h = ${buildOverline(
        'Q<sub>n</sub>S<sub>n</sub>'
      )}(x) = (10 - 0,89x) cm<br><br>Wie lautet der Term für das Volumen V ?`,
      correctChoice: `V = ${buildFrac(
        '1',
        '3'
      )} &sdot; 30 &sdot; (10 - 0,89x) cm³`,
      wrong1: `V = ${buildFrac('1', '2')} &sdot; 30 &sdot; (10 - 0,89x) cm³`,
      wrong2: `V = ${buildFrac('1', '6')} &sdot; 30 &sdot; (10 - 0,89x) cm³`,
      cursor: { x: 20, y: 73 },
      quickviews: [{ type: 'solution', start: 70, end: 73.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/37.PNG', offset: 71 }],
      layersPost: [{ src: '/content/11/38.PNG', offset: 70 }],
    },
    {
      description:
        'Mit dem Ergebnis der vorherigen Teilaufgabe: Welcher Wert genügt zur Berechnung des Volumens?',
      correctChoice: buildOverline('ES<sub>2</sub>'),
      wrong1: buildOverline('ME'),
      wrong2: buildOverline('Q<sub>2</sub>S<sub>2</sub>'),
      cursor: { x: 21, y: 78 },
      quickviews: [
        { type: 'solution', start: 2.5, end: 27 },
        { type: 'task', start: 142, end: 155 },
        { type: 'task', start: 99, end: 108 },
      ],
      autoShowViews: true,
      layersPre: [
        { src: '/content/11/39.PNG', offset: 76 },
        { src: '/content/11/40.PNG', offset: 76 },
      ],
      layersPost: [{ src: '/content/11/41.PNG', offset: 77 }],
    },
    {
      description: `Welche Skizze zeigt einen sinnvollen Ansatz um ${buildOverline(
        'ES<sub>2</sub>'
      )} zu berechnen?`,
      correctChoice: '<img src="/content/11/b24_11.png">',
      wrong1: '<img src="/content/11/b24_12.png">',
      wrong2: '<img src="/content/11/b24_13.png">',
      cursor: { x: 5, y: 89 },
      quickviews: [],
      layersPre: [{ src: '/content/11/42.PNG', offset: 80 }],
      layersPost: [{ src: '/content/11/43.PNG', offset: 82 }],
    },
    {
      description:
        'Wende den Sinussatz an. Welcher Bruch kommt auf die rechte Seite?',
      correctChoice: buildFrac(
        buildOverline('AE'),
        'sin &angle; ES<sub>2</sub>A'
      ),
      wrong1: buildFrac(buildOverline('AE'), 'sin &angle; AES<sub>2</sub>'),
      wrong2: buildFrac(buildOverline('AE'), 'sin &angle; S<sub>2</sub>AE'),
      cursor: { x: 24, y: 85 },
      quickviews: [{ type: 'solution', start: 81, end: 90 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/44.PNG', offset: 82 }],
      layersPost: [{ src: '/content/11/45.PNG', offset: 83 }],
    },
    {
      description:
        'Bekannt: &angle;MAS<sub>2</sub> = 54°<br><br>Wie groß ist &angle;S<sub>2</sub>AE ?',
      correctChoice: '90° - 54° = 36°',
      wrong1: '54°',
      wrong2: '180° - 54° = 126°',
      cursor: { x: 24, y: 89 },
      quickviews: [{ type: 'solution', start: 81, end: 90 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/46.PNG', offset: 89 }],
      layersPost: [{ src: '/content/11/47.PNG', offset: 89 }],
    },
    {
      description:
        'Über welchen Ansatz lässt sich der Winkel ES<sub>2</sub>A bestimmen?',
      correctChoice: '180° - 36° - ( ... )',
      wrong1: '90° - 36° - ( ... )',
      wrong2: '270° - 36° - ( ... )',
      cursor: { x: 24, y: 92 },
      quickviews: [{ type: 'solution', start: 81, end: 92 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/48.PNG', offset: 91 }],
      layersPost: [{ src: '/content/11/49.PNG', offset: 91 }],
    },
    {
      description: 'Welcher Term gehört in die Klammern?',
      correctChoice: '90° - 63,43°',
      wrong1: '90° - 73,43°',
      wrong2: '90° - 53,43°',
      cursor: { x: 20, y: 92 },
      quickviews: [{ type: 'solution', start: 81, end: 92 }],
      autoShowViews: true,
      layersPre: [],
      layersPost: [{ src: '/content/11/50.PNG', offset: 91 }],
    },
    {
      description: 'Berechne.',
      correctChoice: '117,43°',
      wrong1: '107,43°',
      wrong2: '97,43°',
      cursor: { x: 16, y: 93 },
      quickviews: [{ type: 'solution', start: 90, end: 93 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/51.PNG', offset: 93 }],
      layersPost: [{ src: '/content/11/52.PNG', offset: 93 }],
    },
    {
      description: 'Füge alle Zwischenergebnisse zusammen.',
      correctChoice: `x = sin 36° &sdot; ${buildFrac('10 cm', 'sin 117,43°')}`,
      wrong1: `x = sin 90° &sdot; ${buildFrac('10 cm', 'sin 117,43°')}`,
      wrong2: `x = sin 54° &sdot; ${buildFrac('10 cm', 'sin 117,43°')}`,
      cursor: { x: 20, y: 96 },
      quickviews: [{ type: 'solution', start: 81, end: 97 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/53.PNG', offset: 96 }],
      layersPost: [{ src: '/content/11/54.PNG', offset: 95 }],
    },
    {
      description: 'Berechne.',
      correctChoice: '6,62 cm',
      wrong1: '7,62 cm',
      wrong2: '8,62 cm',
      cursor: { x: 13, y: 99 },
      quickviews: [{ type: 'solution', start: 94.5, end: 99 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/55.PNG', offset: 99 }],
      layersPost: [{ src: '/content/11/56.PNG', offset: 99 }],
    },
    {
      description:
        'Du weißt nun: x = 6,62<br><br>Welcher Term beschreibt das Volumen der Pyramide ABCDS<sub>n</sub> ?',
      correctChoice: '(100 - 8,9 &sdot; 6,62) cm³',
      wrong1: '(10 - 0,89 &sdot; 6,62) cm³',
      wrong2: '(1 - 0,089 &sdot; 6,62) cm³',
      cursor: { x: 24, y: 101 },
      quickviews: [{ type: 'task', start: 125, end: 162 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/57.PNG', offset: 101 }],
      layersPost: [{ src: '/content/11/58.PNG', offset: 101 }],
    },
    {
      description: 'Berechne.',
      correctChoice: '41,08 cm³',
      wrong1: '42,08 cm³',
      wrong2: '43,08 cm³',
      cursor: { x: 16, y: 103 },
      quickviews: [{ type: 'solution', start: 100, end: 103 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/11/59.PNG', offset: 103 }],
      layersPost: [{ src: '/content/11/60.PNG', offset: 103 }],
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
