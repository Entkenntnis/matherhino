import { ExerciseData } from './types'

export const exercise3: ExerciseData = {
  id: 3,
  task: '/content/3/task.png',
  height: 105,
  audio: [
    {
      mp3: '/content/3/a2_0.mp3',
      ogg: '/content/3/a2_0.ogg',
      size: 5,
      position: { left: 9, top: -0.3 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/3/a2_1.mp3',
      ogg: '/content/3/a2_1.ogg',
      size: 5,
      position: { left: 9, top: 57 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/3/a2_2.mp3',
      ogg: '/content/3/a2_2.ogg',
      size: 5,
      position: { left: 9, top: 62.5 },
      beforeQuiz: 3,
    },
    {
      mp3: '/content/3/a2_3.mp3',
      ogg: '/content/3/a2_3.ogg',
      size: 5,
      position: { left: 9, top: 72.7 },
      beforeQuiz: 4,
    },
    {
      mp3: '/content/3/a2_4.mp3',
      ogg: '/content/3/a2_4.ogg',
      size: 5,
      position: { left: 9, top: 87 },
      beforeQuiz: 7,
    },
    {
      mp3: '/content/3/a2_5.mp3',
      ogg: '/content/3/a2_5.ogg',
      size: 5,
      position: { left: 9, top: 94.5 },
      beforeQuiz: 16,
    },
  ],
  quiz: [
    {
      description:
        'Der Winkel MAC befindet sich innerhalb des rechtwinkligen Dreiecks AMC. In diesem Dreieck sind einige Größen bekannt. Mit welcher trigonometrischen Funktion lässt sich daraus der gesuchte Winkel bestimmen?',
      correctChoice: 'Tangens',
      wrong1: 'Sinus',
      wrong2: 'Kosinus',
      cursor: { x: 8, y: 7 },
      layersPre: [
        { src: '/content/3/1.PNG', offset: 1 },
        { src: '/content/3/2.PNG', offset: 1 },
      ],
      layersPost: [{ src: '/content/3/3.PNG', offset: 7 }],
    },
    {
      description:
        'Lies die Längen aus der Angabe ab. Welches Seitenverhältnis beschreibt der Tangens?',
      correctChoice:
        '<div class="frac"><span>0,5 · 10</span><span>8</span></div>',
      wrong1: '<div class="frac"><span>8</span><span>0,5 · 10</span></div>',
      wrong2: '<div class="frac"><span>10</span><span>8</span></div>',
      cursor: { x: 13, y: 7 },
      layersPre: [{ src: '/content/3/4.PNG', offset: 7 }],
      layersPost: [{ src: '/content/3/5.PNG', offset: 2 }],
    },
    {
      description:
        'Mithilfe welcher Äquivalenzumformung lässt sich diese Gleichung nach dem Winkel MAC auflösen?',
      correctChoice: 'Umkehrfunktion zum Tangens',
      wrong1: 'Sinus',
      wrong2: 'Division durch Tangens',
      cursor: { x: 23, y: 10 },
      layersPre: [{ src: '/content/3/6.PNG', offset: 10 }],
      layersPost: [{ src: '/content/3/7.PNG', offset: 6 }],
    },
    {
      description:
        'Der Punkt P<sub>1</sub> soll in das Schrägbild eingezeichnet werden. Wo liegt dieser Punkt?<img class="p-3" src="/content/3/a2_2_crop.png" />',
      correctChoice: 'Y',
      wrong1: 'X',
      wrong2: 'Z',
      cursor: { x: 21, y: 27 },
      layersPre: [
        { src: '/content/3/8.PNG', offset: 12 },
        { src: '/content/3/9.PNG', offset: 12 },
      ],
      layersPost: [{ src: '/content/3/10.PNG', offset: 26 }],
    },
    {
      description:
        'Es sollen also die Punkte E<sub>1</sub>, F<sub>1</sub>, G<sub>1</sub> und N<sub>1</sub> in das Schrägbild eingezeichnet werden. Nicht jeder dieser Punkte lässt sich sofort einzeichnen. Welche zwei Punkte lassen sich geschickt als erstes einzeichnen?',
      correctChoice: 'E<sub>1</sub> und N<sub>1</sub>',
      wrong1: 'F<sub>1</sub> und G<sub>1</sub>',
      wrong2: 'E<sub>1</sub> und F<sub>1</sub>',
      cursor: { x: 22, y: 27 },
      layersPre: [],
      layersPost: [],
    },
    {
      description:
        'Beginne also das Zeichnen der Pyramide mit der Strecke [E<sub>1</sub>N<sub>1</sub>], welche parallel zur Schrägbildachse liegt. Welche Strecke ist korrekt?<img class="p-3" src="/content/3/a2_3_1.png" />',
      correctChoice: 'X',
      wrong1: 'Y',
      wrong2: 'Z',
      cursor: { x: 23, y: 27 },
      layersPre: [],
      layersPost: [{ src: '/content/3/11.PNG', offset: 26 }],
    },
    {
      description:
        'Fahre fort mit der Strecke [F<sub>1</sub>G<sub>1</sub>]. Welche Strecke ist korrekt?<img class="p-3" src="/content/3/a2_3_2.png" />',
      correctChoice: 'Z',
      wrong1: 'Y',
      wrong2: 'X',
      cursor: { x: 24, y: 27 },
      layersPre: [],
      layersPost: [
        { src: '/content/3/12.PNG', offset: 23 },
        { src: '/content/3/13.PNG', offset: 24 },
      ],
    },
    {
      description:
        'Die Strecke [DP<sub>n</sub>] liegt innerhalb mehrerer rechtwinkliger Dreiecke. Welches davon hilft bei der Bestimmung der Länge? <img class="p-3" src="/content/3/a2_4.png" />',
      correctChoice: 'Dreieck ADP<sub>n</sub>',
      wrong1: 'Dreieck DP<sub>n</sub>E<sub>n</sub>',
      wrong2: 'Dreieck DN<sub>n</sub>P<sub>n</sub>',
      cursor: { x: 16, y: 45 },
      layersPre: [{ src: '/content/3/14.PNG', offset: 40 }],
      layersPost: [{ src: '/content/3/15.PNG', offset: 40 }],
    },
    {
      description:
        'Auch in diesem Fall kommt der Tangens zum Einsatz. Welche Zahl kommt in den Nenner?',
      correctChoice: '4,5',
      wrong1: '8,5',
      wrong2: '5',
      cursor: { x: 23, y: 47 },
      layersPre: [{ src: '/content/3/16.PNG', offset: 46 }],
      layersPost: [{ src: '/content/3/17.PNG', offset: 46 }],
    },
    {
      description:
        'Die Strecke [E<sub>n</sub>N<sub>n</sub>] liegt in keinem rechtwinkligen Dreieck und kann daher nicht direkt mit einer trigonometrischen Funktion bestimmt werden. Hier brauchst du stattdessen den Strahlensatz. Von welchem Zentrum aus kann der Strahlensatz angewendet werden?',
      correctChoice: 'S',
      wrong1: 'D',
      wrong2: 'A',
      cursor: { x: 12, y: 52 },
      layersPre: [{ src: '/content/3/18.PNG', offset: 50 }],
      layersPost: [{ src: '/content/3/19.PNG', offset: 52 }],
    },
    {
      description:
        'Welche Strecke mit bekannter Länge liegt parallel zu [E<sub>n</sub>N<sub>n</sub>] und eignet sich für den Strahlensatz? <img class="p-3" src="/content/3/a2_4_x.png" />',
      correctChoice: '[AM]',
      wrong1: '[AD]',
      wrong2: '[BC]',
      cursor: { x: 22, y: 54 },
      layersPre: [{ src: '/content/3/20.PNG', offset: 54 }],
      layersPost: [{ src: '/content/3/21.PNG', offset: 54 }],
    },
    {
      description:
        'Welche zwei Strecken mit bekannter Länge liegen auf einem Strahl und sind zu den parallenen Strecken [E<sub>n</sub>N<sub>n</sub>], [AM] zugehörig? <img class="p-3" src="/content/3/a2_4_x.png" />',
      correctChoice: '[P<sub>n</sub>S], [DS]',
      wrong1: '[DS], [P<sub>n</sub>S]',
      wrong2: '[P<sub>n</sub>S], [DP<sub>n</sub>]',
      cursor: { x: 22, y: 56 },
      layersPre: [{ src: '/content/3/22.PNG', offset: 55 }],
      layersPost: [{ src: '/content/3/23.PNG', offset: 56 }],
    },
    {
      description:
        'Welcher Ausdruck beschreibt die Länge <span class="overline">P<sub>n</sub>S</span> ? <img class="p-3" src="/content/3/a2_4_x.png" />',
      correctChoice:
        '<span class="overline">DS</span> - <span class="overline">DP<sub>n</sub></span>',
      wrong1:
        '<span class="overline">DP<sub>n</sub></span> - <span class="overline">DS</span>',
      wrong2:
        '<span class="overline">DS</span> / <span class="overline">DP<sub>n</sub></span>',
      cursor: { x: 16, y: 58 },
      layersPre: [{ src: '/content/3/24.PNG', offset: 58 }],
      layersPost: [{ src: '/content/3/25.PNG', offset: 58 }],
    },
    {
      description:
        'Nach dem Strahlensatz kann eine Gleichung der Verhältnisse aufgestellt werden. Welcher Bruch passt auf die rechte Seite der Gleichung? <img class="p-3" src="/content/3/a2_4_x.png" />',
      correctChoice:
        '<div class="frac"><span><span class="overline">DS</span> - <span class="overline">DP<sub>n</sub></span></span><span><span class="overline">DS</span></span></div>',
      wrong1:
        '<div class="frac"><span><span class="overline">DS</span></span><span><span class="overline">DS</span> - <span class="overline">DP<sub>n</sub></span></span></div>',
      wrong2:
        '<div class="frac"><span><span class="overline">AM</span></span><span><span class="overline">DS</span></span></div>',
      cursor: { x: 18, y: 61 },
      layersPre: [
        { src: '/content/3/26.PNG', offset: 60 },
        { src: '/content/3/27.PNG', offset: 62 },
      ],
      layersPost: [{ src: '/content/3/28.PNG', offset: 60 }],
    },
    {
      description:
        'Setze für die Längen die entsprechenden Größen oder Terme ein und löse nach der gesuchten Länge auf. Wie lautet der gesuchte Term?',
      correctChoice:
        '<div class="frac"><span>8,5 - 4,5 · tan φ</span><span>8,5</span></div> · 8',
      wrong1:
        '<div class="frac"><span>8 - 4,5 · tan φ</span><span>8</span></div> · 8,5',
      wrong2:
        '<div class="frac"><span>8,5 - 8 · tan φ</span><span>8,5</span></div> · 4,5',
      cursor: { x: 22, y: 65 },
      layersPre: [{ src: '/content/3/29.PNG', offset: 65 }],
      layersPost: [{ src: '/content/3/30.PNG', offset: 64 }],
    },
    {
      description:
        'Nach dem Ausmultiplizieren entsteht der Bruch <div class="frac"><span>4,5 · 8</span><span>8,5</span></div> . Welchen gerundeten Wert hat dieser Bruch?',
      correctChoice: '4,24',
      wrong1: '8',
      wrong2: '4,2',
      cursor: { x: 18, y: 71 },
      layersPre: [{ src: '/content/3/30b.PNG', offset: 67 }],
      layersPost: [{ src: '/content/3/31.PNG', offset: 71 }],
    },
    {
      description:
        'Das Volumen einer Pyramide lässt sich aus der Grundfläche und der Höhe berechnen. Allerdings braucht es noch einen Vorfaktor. Wie lautet dieser?',
      correctChoice: '<div class="frac"><span>1</span><span>3</span></div>',
      wrong1: '<div class="frac"><span>1</span><span>2</span></div>',
      wrong2: '<div class="frac"><span>1</span><span>6</span></div>',
      cursor: { x: 7, y: 77 },
      layersPre: [{ src: '/content/3/32.PNG', offset: 74 }, { src: '/content/3/33.PNG', offset: 72 }],
      layersPost: [{ src: '/content/3/34.PNG', offset: 76 }],
    },
    {
      description: 'Welche Länge entspricht der Höhe der Pyramide?',
      correctChoice: '<span class="overline">DP<sub>1</sub></span>',
      wrong1: '<span class="overline">F<sub>1</sub>G<sub>1</sub></span>',
      wrong2: '<span class="overline">E<sub>1</sub>N<sub>1</sub></span>',
      cursor: { x: 21, y: 77 },
      layersPre: [],
      layersPost: [{ src: '/content/3/35.PNG', offset: 77 }],
    },
    {
      description:
        'Betrachte die bekannten Größen der Grundfläche. Welche Methode lässt sich anwenden, um dessen Flächeninhalt zu berechnen?',
      correctChoice:
        'Flächenformel <div class="frac"><span>1</span><span>2</span></div> · g  · h',
      wrong1: 'Flächenformel mit dem Sinus',
      wrong2: 'Satz des Pythagoras',
      cursor: { x: 19, y: 80 },
      layersPre: [],
      layersPost: [{ src: '/content/3/36.PNG', offset: 76 }],
    },
    {
      description:
        'Mit welcher Grundseite lässt sich die Flächenformel anwenden?',
      correctChoice: '<span class="overline">F<sub>1</sub>G<sub>1</sub></span>',
      wrong1: '<span class="overline">E<sub>1</sub>N<sub>1</sub></span>',
      wrong2: '<span class="overline">N<sub>1</sub>G<sub>1</sub></span>',
      cursor: { x: 13, y: 77 },
      layersPre: [],
      layersPost: [{ src: '/content/3/37.PNG', offset: 76 }],
    },
    {
      description: 'Und wie lautet die entsprechende Höhe dafür?',
      correctChoice: '<span class="overline">E<sub>1</sub>N<sub>1</sub></span>',
      wrong1: '<span class="overline">DP<sub>1</sub></span>',
      wrong2: '<span class="overline">E<sub>1</sub>F<sub>1</sub></span>',
      cursor: { x: 15, y: 77 },
      layersPre: [],
      layersPost: [{ src: '/content/3/38.PNG', offset: 76 }],
    },
    {
      description:
        'Berechne <span class="overline">DP<sub>1</sub></span>. Wie lautet der gerundete Wert?',
      correctChoice: '3,78',
      wrong1: '2,54',
      wrong2: '2,96',
      cursor: { x: 21, y: 82 },
      layersPre: [{ src: '/content/3/39.PNG', offset: 82 }],
      layersPost: [{ src: '/content/3/40.PNG', offset: 82 }],
    },
    {
      description:
        'Wie lautet der gerundete Wert für <span class="overline">E<sub>1</sub>N<sub>1</sub></span> ?',
      correctChoice: '4,44',
      wrong1: '5,55',
      wrong2: '3,07',
      cursor: { x: 23, y: 84 },
      layersPre: [{ src: '/content/3/41.PNG', offset: 84 }],
      layersPost: [{ src: '/content/3/42.PNG', offset: 84 }],
    },
    {
      description:
        'Um die Länge der Grundseite <span class="overline">F<sub>1</sub>G<sub>1</sub></span> zu berechnen, brauchst du wieder den Tangens. Dadurch lässt sich zuerst die eine Hälfte der Strecke bestimmen. Wie lautet der benötigte Winkel?',
      correctChoice: '32,01°',
      wrong1: '40°',
      wrong2: '60°',
      cursor: { x: 9, y: 87 },
      layersPre: [{ src: '/content/3/43.PNG', offset: 86 }],
      layersPost: [{ src: '/content/3/44.PNG', offset: 87 }],
    },
    {
      description: 'Und wie lang ist die zugehörige Seitenlänge?',
      correctChoice: '4,44',
      wrong1: '4,24',
      wrong2: '3,78',
      cursor: { x: 13, y: 88 },
      layersPre: [],
      layersPost: [{ src: '/content/3/45.PNG', offset: 88 }],
    },
    {
      description:
        'Berechne nun die Länge von <span class="overline">F<sub>1</sub>G<sub>1</sub></span>. Wie lautet das Ergebnis?',
      correctChoice: '5,55',
      wrong1: '2,78',
      wrong2: '8,88',
      cursor: { x: 14, y: 94 },
      layersPre: [{ src: '/content/3/46.PNG', offset: 90 }],
      layersPost: [{ src: '/content/3/47.PNG', offset: 90 }],
    },
    {
      description:
        'Benutze alle bisherigen Ergebnisse und berechne das Volumen der Pyramide. Wie lautet das Ergebnis?',
      correctChoice: '15,52 cm³',
      wrong1: '16 cm³',
      wrong2: '42,72 cm³',
      cursor: { x: 14, y: 100 },
      layersPre: [{ src: '/content/3/48.PNG', offset: 97 }],
      layersPost: [{ src: '/content/3/49.PNG', offset: 96 }],
    },
  ],
}
