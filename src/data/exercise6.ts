import { buildVec, buildVec2 } from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise6: ExerciseData = {
  id: 6,
  task: '/content/6/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 150,
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
      beforeQuiz: 4,
    },
    {
      mp3: '/content/6/b2_3.mp3',
      ogg: '/content/6/b2_3.ogg',
      size: 5,
      position: { left: 9, top: 50.6 },
      beforeQuiz: 9,
    },
    {
      mp3: '/content/6/b2_4.mp3',
      ogg: '/content/6/b2_4.ogg',
      size: 5,
      position: { left: 9, top: 59.6 },
      beforeQuiz: 13,
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
      position: { x: 23, y: 29 },
      title: 'Teilaufgabe B 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 56 },
      title: 'Teilaufgabe B 2.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 81 },
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
    {
      description: `Schaue dir an, welche Zusammenhänge zwischen B<sub>n</sub> und D<sub>n</sub> bekannt sind. Welcher Rechenansatz lässt sich daraus für die Bestimmung der Koordinaten von D<sub>n</sub> aufstellen?`,
      correctChoice: `Der Ortvektor ${buildVec(
        'OD<sub>n</sub>'
      )} ist die Verkettung von ${buildVec('OB<sub>n</sub>')} und ${buildVec(
        'B<sub>n</sub>D<sub>n</sub>'
      )}`,
      wrong1:
        'Die Koordinaten von D<sub>n</sub> sind das 3,5-fache von B<sub>n</sub>',
      wrong2: `Der Ortsvektor von D<sub>n</sub> ist das 3,5-fache des Vektors ${buildVec(
        'B<sub>n</sub>M'
      )}`,
      cursor: { x: 24, y: 32 },
      quickviews: [
        { type: 'task', start: 25, end: 35 },
        { type: 'solution', start: 4, end: 24 },
      ],
      layersPre: [
        { src: '/content/6/8.PNG', offset: 29 },
        { src: '/content/6/9.PNG', offset: 29 },
      ],
      layersPost: [{ src: '/content/6/10.PNG', offset: 31 }],
    },
    {
      description: `Für diesen Rechenansatz benötigst du die Koordinaten des Punktes M. Wie lauten die Koordinaten von M ?`,
      correctChoice: 'M ( 0,5 | 2,5 )',
      wrong1: 'M ( 1 | 5 )',
      wrong2: 'M ( 5 | 1 )',
      cursor: { x: 24, y: 35 },
      quickviews: [{ type: 'task', start: 4, end: 27 }],
      layersPre: [{ src: '/content/6/11.PNG', offset: 35 }],
      layersPost: [{ src: '/content/6/12.PNG', offset: 35 }],
    },
    {
      description: `Spitze minus Fuß. Welche Werte hat der Vektor ${buildVec(
        'B<sub>n</sub>M'
      )}(x) ?`,
      correctChoice: `${buildVec('B<sub>n</sub>M')}(x) = ${buildVec2(
        '0,5 - x',
        '2,5 - 0,5x'
      )}`,
      wrong1: `${buildVec('B<sub>n</sub>M')}(x) = ${buildVec2(
        'x - 0,5',
        '0,5x - 2,5'
      )}`,
      wrong2: `${buildVec('B<sub>n</sub>M')}(x) = ${buildVec2('-0,5x', '2x')}`,
      cursor: { x: 18, y: 38 },
      quickviews: [
        { type: 'task', start: 4, end: 27 },
        { type: 'solution', start: 34, end: 39 },
      ],
      layersPre: [{ src: '/content/6/13.PNG', offset: 37 }],
      layersPost: [{ src: '/content/6/14.PNG', offset: 37 }],
    },
    {
      description: `Du kannst jetzt die bekannten Werte in den Ansatz einsetzen. Welchen Wert hat der Vektor im letzten Summand?`,
      correctChoice: `${buildVec2('1,75 - 3,5x', '8,75 - 1,75x')}`,
      wrong1: `${buildVec2('0,5 - x', '2,5 - 0,5x')}`,
      wrong2: `${buildVec2('4 - x', '6 - 0,5x')}`,
      cursor: { x: 21, y: 47 },
      quickviews: [{ type: 'solution', start: 36.5, end: 49 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/15.PNG', offset: 41 }],
      layersPost: [{ src: '/content/6/16.PNG', offset: 46 }],
    },
    {
      description: `Wie lauten schließlich die Koordinaten für D<sub>n</sub> ?`,
      correctChoice: 'D<sub>n</sub> ( -2,5x + 1,75 | -1,25x + 8,75 )',
      wrong1: 'D<sub>n</sub> ( -4,5x + 1,75 | -2,25x + 8,75 )',
      wrong2: 'D<sub>n</sub> ( 0,75x | 6,5x )',
      cursor: { x: 23, y: 53 },
      quickviews: [{ type: 'solution', start: 40, end: 54 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/17.PNG', offset: 50 }],
      layersPost: [{ src: '/content/6/18.PNG', offset: 50 }],
    },
    {
      description: 'Mit welchem Ansatz lässt sich der Trägergraph bestimmen?',
      correctChoice: 'Aufstellung eines Gleichungssystems',
      wrong1: 'Anwendung der Mitternachtsformel',
      wrong2: 'Gleichsetzung der x- und y-Koordinaten',
      cursor: { x: 19, y: 60 },
      quickviews: [],
      layersPre: [
        { src: '/content/6/19.PNG', offset: 56 },
        { src: '/content/6/20.PNG', offset: 56 },
      ],
      layersPost: [{ src: '/content/6/21.PNG', offset: 58 }],
    },
    {
      description: 'Wie lautet der erste Umformungsschritt?',
      correctChoice:
        'Auflösen von <span class="font-serif font-bold">I</span> nach x',
      wrong1:
        'Auflösen von <span class="font-serif font-bold">II</span> nach x',
      wrong2:
        'Einsetzen von <span class="font-serif font-bold">I</span> in <span class="font-serif font-bold">II</span>',
      cursor: { x: 16, y: 62 },
      quickviews: [{ type: 'solution', start: 57, end: 62 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/22.PNG', offset: 62 }],
      layersPost: [{ src: '/content/6/23.PNG', offset: 62 }],
    },
    {
      description:
        'Führe die angegebenen Umformungsschritte aus. Wie lautet das Ergebnis?',
      correctChoice: 'x = -0,4 x<sub>D<sub>n</sub></sub> + 0,7',
      wrong1: 'x = 0,4 x<sub>D<sub>n</sub></sub> - 0,7',
      wrong2: 'x = 0,4 x<sub>D<sub>n</sub></sub> - 1,75',
      cursor: { x: 23, y: 68 },
      quickviews: [{ type: 'solution', start: 61, end: 68 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/24.PNG', offset: 64 }],
      layersPost: [{ src: '/content/6/25.PNG', offset: 66 }],
    },
    {
      description:
        'Setze schließlich x in <span class="font-serif font-bold">II</span> ein und vereinfache. Wie lautet das Ergebnis für den Trägergraph?',
      correctChoice: 'y = 0,5x + 7,88',
      wrong1: 'y = 0,7x + 5,86',
      wrong2: 'y = 0,4x + 7,38',
      cursor: { x: 23, y: 78 },
      quickviews: [{ type: 'solution', start: 55, end: 79 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/26.PNG', offset: 70 }],
      layersPost: [{ src: '/content/6/27.PNG', offset: 71 }],
    },
    {
      description:
        'Welche der folgenden Eigenschaften gilt für jedes Drachenviereck?',
      correctChoice: 'Die Diagonalen sind zueinander senkrecht',
      wrong1: 'Alle Seiten sind gleich lang',
      wrong2: 'Gegenüberliegende Seiten sind parallel',
      cursor: { x: 19, y: 83 },
      quickviews: [],
      layersPre: [
        { src: '/content/6/28.PNG', offset: 81 },
        { src: '/content/6/29.PNG', offset: 81 },
      ],
      layersPost: [{ src: '/content/6/30.PNG', offset: 81 }],
    },
    {
      description:
        'Welche Gleichung lässt sich aus dieser Eigenschaft aufstellen um die gesuchte x-Koordinate zu bestimmen?',
      correctChoice: `Das Skalarprodukt von ${buildVec('AC')} und ${buildVec(
        'B<sub>2</sub>M'
      )} ist gleich 0`,
      wrong1: `Das Skalarprodukt von ${buildVec(
        'AB<sub>2</sub>'
      )} und ${buildVec('B<sub>2</sub>C')} ist gleich 0`,
      wrong2: 'Länge von AC ist gleich Länge von B<sub>2</sub>D<sub>2</sub>',
      cursor: { x: 18, y: 88 },
      quickviews: [{ type: 'solution', start: 4, end: 25 }],
      layersPre: [{ src: '/content/6/31.PNG', offset: 83 }],
      layersPost: [{ src: '/content/6/32.PNG', offset: 87 }],
    },
    {
      description: `Welchen Wert hat der Vektor ${buildVec('AC')} ?`,
      correctChoice: buildVec2('5', '1'),
      wrong1: buildVec2('3', '3'),
      wrong2: buildVec2('10', '2'),
      cursor: { x: 9, y: 92 },
      quickviews: [
        { type: 'solution', start: 86.5, end: 92 },
        { type: 'solution', start: 4, end: 25 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/33.PNG', offset: 90 }],
      layersPost: [{ src: '/content/6/34.PNG', offset: 90 }],
    },
    {
      description: `In einer vorherigen Teilaufgabe wurde bereits eine Formel für den Vektor ${buildVec(
        'B<sub>n</sub>M'
      )} hergeleitet. Diese kommt in dieser Aufgabe wieder zum Einsatz. Wie lautet die Formel?`,
      correctChoice: buildVec2('0,5 - x', '2,5 - 0,5x'),
      wrong1: buildVec2('x', '0,5x'),
      wrong2: buildVec2('1,75 - 3,5x', '8,75 - 1,75x'),
      cursor: { x: 17, y: 95 },
      quickviews: [{ type: 'solution', start: 86.5, end: 95 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/35.PNG', offset: 93 }],
      layersPost: [{ src: '/content/6/36.PNG', offset: 93 }],
    },
    {
      description: 'Berechne das Skalarprodukt. Wie lautet das Ergebnis?',
      correctChoice: '5 &sdot; (0,5 - x) + 1 &sdot; (2,5 - 0,5x)',
      wrong1: '5 &sdot; (2,5 - 0,5x) - 1 &sdot; (0,5 - x)',
      wrong2: '5 &sdot; 0,5 - x + 1 &sdot; 2,5 - 0,5x',
      cursor: { x: 23, y: 97 },
      quickviews: [{ type: 'solution', start: 92.5, end: 97 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/37.PNG', offset: 97 }],
      layersPost: [{ src: '/content/6/38.PNG', offset: 97 }],
    },
    {
      description:
        'Diese Gleichung kannst du vereinfachen. Wie lautet das vollständig vereinfachte Ergebnis?',
      correctChoice: '5 - 5,5x = 0',
      wrong1: '5,5 - 5x = 0',
      wrong2: '5,5 - 5,5x',
      cursor: { x: 15, y: 101 },
      quickviews: [{ type: 'solution', start: 96, end: 101 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/39.PNG', offset: 99 }],
      layersPost: [{ src: '/content/6/40.PNG', offset: 99 }],
    },
    {
      description:
        'Löse die Gleichung nun nach x auf. Wie lautet das Ergebnis für x ? Benutze den Taschenrechner.',
      correctChoice: '0,91',
      wrong1: '1,10',
      wrong2: '-0,75',
      cursor: { x: 17, y: 105 },
      quickviews: [{ type: 'solution', start: 100, end: 105 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/41.PNG', offset: 101 }],
      layersPost: [{ src: '/content/6/42.PNG', offset: 103 }],
    },
    {
      description:
        'Wie lässt sich der Flächeninhalt eines Drachenvierecks berechnen?',
      correctChoice: 'Produkt der Diagonalen geteilt durch 2',
      wrong1: 'Produkt der Diagonalen',
      wrong2: 'Produkt der Diagonalen geteilt durch 3',
      cursor: { x: 19, y: 107 },
      quickviews: [],
      layersPre: [{ src: '/content/6/43.PNG', offset: 107 }],
      layersPost: [{ src: '/content/6/44.PNG', offset: 106 }],
    },
    {
      description:
        '[AC] ist die eine Diagonale des Drachenvierecks. Wie lang ist diese Strecke? Nutze dabei auch die Vektordarstellung, die du vorher bestimmt hast.',
      correctChoice: '5,10',
      wrong1: '4,92',
      wrong2: '6,00',
      cursor: { x: 24, y: 110 },
      quickviews: [{ type: 'solution', start: 108.7, end: 110 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/45.PNG', offset: 110 }],
      layersPost: [{ src: '/content/6/46.PNG', offset: 109 }],
    },
    {
      description:
        'Bestimme die Länge von [B<sub>2</sub>M]. Wie lautet das Ergebnis? Nutze dafür die bisherigen Ergebnisse.',
      correctChoice: '2,09',
      wrong1: '1,32',
      wrong2: '3,29',
      cursor: { x: 24, y: 112 },
      quickviews: [
        { type: 'solution', start: 111.7, end: 113 },
        { type: 'solution', start: 36.8, end: 38.8 },
        { type: 'solution', start: 104.2, end: 104.6 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/47.PNG', offset: 112 }],
      layersPost: [{ src: '/content/6/48.PNG', offset: 113 }],
    },
    {
      description:
        'Füge nun alle Ergebnisse zusammen. Wie lautet der Flächeninhalt des Drachenvierecks AB<sub>2</sub>CD<sub>2</sub> ?',
      correctChoice: '18,65 FE',
      wrong1: '10,66 FE',
      wrong2: '5,33 FE',
      cursor: { x: 24, y: 115 },
      quickviews: [{ type: 'solution', start: 105.8, end: 115.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/49.PNG', offset: 115 }],
      layersPost: [{ src: '/content/6/50.PNG', offset: 115 }],
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
