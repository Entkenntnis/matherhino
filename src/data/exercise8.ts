import { buildFrac, buildOverline, buildSqrt } from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise8: ExerciseData = {
  id: 8,
  task: '/content/8/task.png',
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 81,
  audio: [
    {
      mp3: '/content/8/a2_0.mp3',
      ogg: '/content/8/a2_0.ogg',
      size: 5,
      position: { left: 10, top: -1 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/8/a2_1.mp3',
      ogg: '/content/8/a2_1.ogg',
      size: 5,
      position: { left: 10, top: 45.3 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/8/a2_2.mp3',
      ogg: '/content/8/a2_2.ogg',
      size: 5,
      position: { left: 10, top: 62 },
      beforeQuiz: 10,
    },
    {
      mp3: '/content/8/a2_3.mp3',
      ogg: '/content/8/a2_3.ogg',
      size: 5,
      position: { left: 10, top: 81.4 },
      beforeQuiz: 15,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe A 2.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 26 },
      title: 'Teilaufgabe A 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 43 },
      title: 'Teilaufgabe A 2.3',
      audioIndex: 3,
    },
  ],
  quiz: [
    {
      description: `Berechne die Länge der Strecke [BD]. Schaue dir an, welche Angaben gegeben sind. Mit welcher Methode lässt sich die gesuchte Länge bestimmen?`,
      correctChoice: 'Satz des Pythagoras',
      wrong1: 'Kosinussatz',
      wrong2: 'Sinussatz',
      cursor: { x: 20, y: 1 },
      quickviews: [{ type: 'task', start: 2.2, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/1.PNG', offset: 1 }],
      layersPost: [{ src: '/content/8/2.PNG', offset: 1 }],
    },
    {
      description:
        'Wende den Satz des Pythagoras an. Wie lautet die korrekte Rechnung?',
      correctChoice: `${buildSqrt(' 7,8² + 5,2²')} cm = 9,4 cm`,
      wrong1: `${buildSqrt(' 7,8 + 5,2')} cm = 9,4 cm`,
      wrong2: `7,8² + 5,2² cm = 9,4 cm`,
      cursor: { x: 22, y: 3 },
      quickviews: [
        { type: 'solution', start: 0.5, end: 3.5 },
        { type: 'task', start: 2.2, end: 70 },
      ],
      layersPre: [{ src: '/content/8/3.PNG', offset: 3 }],
      layersPost: [{ src: '/content/8/4.PNG', offset: 3 }],
    },
    {
      description:
        'Mit welcher Formel lässt sich der Flächeninhalt A<sub>BCD</sub> bestimmen? Beachte auch, welche Angaben dir bekannt sind.',
      correctChoice: 'Flächenformel mit Sinus',
      wrong1: 'Flächenformel mit Kosinus',
      wrong2: `${buildFrac('1', '2')} &sdot; g &sdot; h`,
      cursor: { x: 17, y: 7 },
      quickviews: [{ type: 'task', start: 2.2, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/5.PNG', offset: 5 }],
      layersPost: [{ src: '/content/8/6.PNG', offset: 5 }],
    },
    {
      description:
        'Wie lautet die korrekte Anwendung der Flächenformel mit Sinus?',
      correctChoice: `A<sub>BCD</sub> = ${buildFrac(
        '1',
        '2'
      )} &sdot; 9,4 &sdot; 8,6 &sdot; sin &angle;CBD`,
      wrong1: `A<sub>BCD</sub> = 0,5 &sdot; 9,4 &sdot; 8,6 &sdot; sin 70°`,
      wrong2: `A<sub>BCD</sub> = 0,5 &sdot; 9,4 &sdot; 5,2 &sdot; sin &angle;CBD`,
      cursor: { x: 22, y: 9 },
      quickviews: [
        { type: 'task', start: 2.2, end: 70 },
        { type: 'solution', start: 2, end: 3.5 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/7.PNG', offset: 9 }],
      layersPost: [{ src: '/content/8/8.PNG', offset: 8 }],
    },
    {
      description:
        'Der Winkel &angle;CBD lässt sich nicht direkt berechnen. Allerdings kannst du diesen Winkel auf einen anderen Winkel zurückführen, der berechenbar ist. Wie lautet die korrekte Gleichung?',
      correctChoice: '&angle;CBD = 70° - &angle;DBA',
      wrong1: '&angle;CBD = 90° - &angle;BAE',
      wrong2: '&angle;CBD = 90° - &angle;DBA',
      cursor: { x: 22, y: 11 },
      quickviews: [
        { type: 'solution', start: 10.5, end: 11.5 },
        { type: 'task', start: 2.2, end: 70 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/9.PNG', offset: 11 }],
      layersPost: [{ src: '/content/8/10.PNG', offset: 11 }],
    },
    {
      description:
        'Berechne den Winkel &angle;DBA. Welche Funktion hilft dir dabei? Schaue dir an, welche Angaben bekannt sind.',
      correctChoice: 'Tangens',
      wrong1: 'Sinus',
      wrong2: 'Kosinus',
      cursor: { x: 13, y: 15 },
      quickviews: [{ type: 'task', start: 2.2, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/11.PNG', offset: 14 }],
      layersPost: [{ src: '/content/8/12.PNG', offset: 14 }],
    },
    {
      description:
        'Welches Seitenverhältnis beschreibt der Tangens von Winkel DBA?',
      correctChoice: `tan &angle;DBA = ${buildFrac('5,2', '7,8')}`,
      wrong1: `tan &angle;DBA = ${buildFrac('7,8', '5,2')}`,
      wrong2: `tan &angle;DBA = ${buildFrac('7,8', '8,6')}`,
      cursor: { x: 19, y: 14 },
      quickviews: [{ type: 'task', start: 2.2, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/13.PNG', offset: 14 }],
      layersPost: [{ src: '/content/8/14.PNG', offset: 13 }],
    },
    {
      description:
        'Löse die Gleichung. Wie lautet das Ergebnis für den Winkel DBA ?',
      correctChoice: '33,7°',
      wrong1: '32,3°',
      wrong2: '29,8°',
      cursor: { x: 24, y: 17 },
      quickviews: [{ type: 'solution', start: 13, end: 18 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/15.PNG', offset: 17 }],
      layersPost: [{ src: '/content/8/16.PNG', offset: 17 }],
    },
    {
      description: 'Wie groß ist folglich der Winkel CBD ?',
      correctChoice: '36,3°',
      wrong1: '33,7°',
      wrong2: '37,3°',
      cursor: { x: 21, y: 19 },
      quickviews: [{ type: 'solution', start: 10.8, end: 19.5 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/17.PNG', offset: 19 }],
      layersPost: [{ src: '/content/8/18.PNG', offset: 19 }],
    },
    {
      description:
        'Setze alle Werte ein und berechne den Flächeninhalt von A<sub>BCD</sub> . Wie lautet das Ergebnis?',
      correctChoice: '23,9 cm²',
      wrong1: '47,9 cm²',
      wrong2: '34,8 cm²',
      cursor: { x: 12, y: 23 },
      quickviews: [
        { type: 'solution', start: 8.3, end: 9.7 },
        { type: 'solution', start: 18.6, end: 23 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/19.PNG', offset: 19 }],
      layersPost: [{ src: '/content/8/20.PNG', offset: 21 }],
    },
    {
      description:
        'Du kannst für den Flächeninhalt von ABE eine Gleichung aufstellen. Welche Flächenformel ist hier am meisten geeignet?',
      correctChoice: 'Flächenformel mit Sinus',
      wrong1: `${buildFrac('1', '2')} &sdot; g &sdot; h`,
      wrong2: 'Sinussatz',
      cursor: { x: 21, y: 28 },
      quickviews: [{ type: 'task', start: 2.2, end: 70 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/8/21.PNG', offset: 26 },
        { src: '/content/8/22.PNG', offset: 26 },
      ],
      layersPost: [{ src: '/content/8/23.PNG', offset: 28 }],
    },
    {
      description:
        'Bei der Anwendung der Flächeformel mit Sinus gibt es noch eine Lücke. Was kommt in die Lücke?',
      correctChoice: buildOverline('BE'),
      wrong1: '8,6 cm',
      wrong2: '5,2 cm',
      cursor: { x: 20, y: 31 },
      quickviews: [
        { type: 'solution', start: 29.4, end: 30.5 },
        { type: 'task', start: 2.2, end: 70 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/24.PNG', offset: 30 }],
      layersPost: [{ src: '/content/8/25.PNG', offset: 30 }],
    },
    {
      description:
        'Im Dreieck ABE sind also zwei Seiten und der dazwischenliegende Winkel bekannt. Mit welcher Formel lässt sich daraus die Länge von AE berechnen?',
      correctChoice: 'Kosinussatz',
      wrong1: 'Sinussatz',
      wrong2: 'Satz des Pythagoras',
      cursor: { x: 5, y: 36 },
      quickviews: [{ type: 'task', start: 2.2, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/26.PNG', offset: 34 }],
      layersPost: [{ src: '/content/8/27.PNG', offset: 34 }],
    },
    {
      description:
        'Die Anwendung des Kosinussatz ist noch nicht vollständig. Wie lautet die vollständige Formel?',
      correctChoice: '7,8² + 6,5² - 2 &sdot; 7,8 &sdot; 6,5 &sdot; cos 70°',
      wrong1: '7,8² + 6,5² - 7,8 &sdot; 6,5',
      wrong2: '7,8² + 6,5² - cos 70°',
      cursor: { x: 20, y: 37 },
      quickviews: [
        { type: 'solution', start: 37.4, end: 38 },
        { type: 'task', start: 2.2, end: 70 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/28.PNG', offset: 38 }],
      layersPost: [{ src: '/content/8/29.PNG', offset: 38 }],
    },
    {
      description:
        'Berechne den Term. Wie lautet das korrekte Ergebnis für die Länge von AE ?',
      correctChoice: `${buildSqrt('68,4 cm²')} = 8,3 cm`,
      wrong1: `${buildSqrt('68,9 cm²')} = 8,3 cm`,
      wrong2: `${buildSqrt('68,7 cm²')} = 8,3 cm`,
      cursor: { x: 22, y: 40 },
      quickviews: [{ type: 'solution', start: 37.4, end: 40.3 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/30.PNG', offset: 40 }],
      layersPost: [{ src: '/content/8/31.PNG', offset: 40 }],
    },
    {
      description:
        'Wie sieht die korrekte Zeichnung für den Kreisbogen PQ aus?',
      correctChoice: '<img src="/content/8/a23_3.png" class="max-w-xs">',
      wrong1: '<img src="/content/8/a23_1.png" class="max-w-xs">',
      wrong2: '<img src="/content/8/a23_2.png" class="max-w-xs">',
      cursor: { x: 21, y: 50 },
      quickviews: [{ type: 'task', start: 134, end: 152 }],
      layersPre: [
        { src: '/content/8/32.PNG', offset: 42 },
        { src: '/content/8/33.PNG', offset: 43 },
      ],
      layersPost: [{ src: '/content/8/34.PNG', offset: 49 }],
    },
    {
      description:
        'Bevor du den Flächeninhalt des Kreissektors berechnen kannst, brauchst du den zugehörigen Winkel &angle;PEG = &alpha; . Schaue dir an, welche Angaben im Dreieck ABE bekannt sind. Mit welchem Satz lässt sich &alpha; bestimmen?',
      correctChoice: 'Sinussatz',
      wrong1: 'Kosinussatz',
      wrong2: 'Innenwinkelsatz',
      cursor: { x: 12, y: 60 },
      quickviews: [
        { type: 'task', start: 2.2, end: 70 },
        { type: 'task', start: 117, end: 125 },
      ],
      layersPre: [{ src: '/content/8/35.PNG', offset: 47 }],
      layersPost: [{ src: '/content/8/36.PNG', offset: 60 }],
    },
    {
      description:
        'Wie lautet die rechte Seite der Gleichung im Sinussatz? Nutze die Angaben, die dir bekannt sind.',
      correctChoice: `${buildFrac('sin 70°', '8,3')}`,
      wrong1: `${buildFrac('8,3', 'sin 70°')}`,
      wrong2: `${buildFrac('70°', '8,3')}`,
      cursor: { x: 17, y: 63 },
      quickviews: [
        { type: 'solution', start: 61.5, end: 64 },
        { type: 'task', start: 2.2, end: 70 },
        { type: 'task', start: 117, end: 125 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/37.PNG', offset: 62 }],
      layersPost: [{ src: '/content/8/38.PNG', offset: 62 }],
    },
    {
      description:
        'Löse diese Gleichung nach &alpha; auf. Welches Ergebnis erhältst du? Passe auf, dass du Zwischenergebnisse nicht zu stark rundest.',
      correctChoice: '62,0°',
      wrong1: '65,0°',
      wrong2: '68,0°',
      cursor: { x: 23, y: 70 },
      quickviews: [{ type: 'solution', start: 61.4, end: 70 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/39.PNG', offset: 67 }],
      layersPost: [{ src: '/content/8/40.PNG', offset: 61 }],
    },
    {
      description:
        'Setze die bekannten Angaben in Flächenformel für einen Kreissektor aus der Formelsammlung ein. Wie lautet der Term für den Flächeninhalt?',
      correctChoice: `3² &sdot; &pi; &sdot; ${buildFrac('62,0°', '360°')}`,
      wrong1: `3² &sdot; &pi; &sdot; 62,0°`,
      wrong2: `${buildFrac('1', '2')} &sdot; 3² &sdot; &pi; &sdot; ${buildFrac(
        '62,0°',
        '360°'
      )}`,
      cursor: { x: 20, y: 73 },
      quickviews: [],
      layersPre: [{ src: '/content/8/41.PNG', offset: 73 }],
      layersPost: [{ src: '/content/8/42.PNG', offset: 72 }],
    },
    {
      description: 'Bereche mit dem Taschenrechner. Wie lautet das Ergebnis?',
      correctChoice: '4,9cm²',
      wrong1: '4,7cm²',
      wrong2: '4,5cm²',
      cursor: { x: 12, y: 76 },
      quickviews: [{ type: 'solution', start: 71.5, end: 76 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/8/43.PNG', offset: 76 }],
      layersPost: [{ src: '/content/8/44.PNG', offset: 76 }],
    },
  ],
}
