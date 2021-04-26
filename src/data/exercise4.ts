import { ExerciseData } from './types'

export const exercise4: ExerciseData = {
  id: 4,
  task: '/content/4/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 56,
  audio: [
    {
      mp3: '/content/4/a3_0.mp3',
      ogg: '/content/4/a3_0.ogg',
      size: 5,
      position: { left: 9, top: -0.4 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/4/a3_1.mp3',
      ogg: '/content/4/a3_1.ogg',
      size: 5,
      position: { left: 9, top: 22.6 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/4/a3_2.mp3',
      ogg: '/content/4/a3_2.ogg',
      size: 5,
      position: { left: 9, top: 68.8 },
      beforeQuiz: 1,
    },
    {
      mp3: '/content/4/a3_3.mp3',
      ogg: '/content/4/a3_3.ogg',
      size: 5,
      position: { left: 9, top: 85.9 },
      beforeQuiz: 7,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe A 3.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 14 },
      title: 'Teilaufgabe A 3.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 34 },
      title: 'Teilaufgabe A 3.2',
      audioIndex: 3,
    },
  ],
  quiz: [
    {
      description:
        'An welcher Position befindet sich der Punkt B<sub>1</sub> ? <img class="p-3" src="/content/4/a3_1.png" />',
      correctChoice: 'Position 2',
      wrong1: 'Position 1',
      wrong2: 'Position 3',
      cursor: { x: 19, y: 14 },
      quickviews: [
        { type: 'task', start: 30, end: 39 },
        { type: 'task', start: 10, end: 23 },
      ],
      layersPre: [
        { src: '/content/4/1.PNG', offset: 1 },
        { src: '/content/4/2.PNG', offset: 2 },
      ],
      layersPost: [{ src: '/content/4/3.PNG', offset: 4 }],
    },
    {
      description:
        'Welcher Satz hilft bei dieser Aufgabe weiter, um die Länge der Strecke [B<sub>n</sub>C] zu bestimmen? Es sind zwei Winkel und eine Seite bekannt.',
      correctChoice: 'Sinussatz',
      wrong1: 'Kosinussatz',
      wrong2: 'Satz des Pythagoras',
      cursor: { x: 22, y: 14 },
      quickviews: [
        { type: 'solution', start: 1, end: 11 },
        { type: 'task', start: 82, end: 96 },
        { type: 'task', start: 5, end: 13 },
      ],
      layersPre: [{ src: '/content/4/4.PNG', offset: 14 }],
      layersPost: [{ src: '/content/4/5.PNG', offset: 14 }],
    },
    {
      description:
        'Die Strecke [B<sub>n</sub>C] steht laut Sinussatz zu einer anderen Größe im Verhältnis. Welche Größe ist das?',
      correctChoice: 'sin &alpha;',
      wrong1: '&alpha;',
      wrong2: 'sin 2&alpha;',
      cursor: { x: 6, y: 19 },
      quickviews: [
        { type: 'solution', start: 16, end: 20 },
        { type: 'solution', start: 1, end: 11 },
      ],
      layersPre: [{ src: '/content/4/6.PNG', offset: 17 }],
      layersPost: [{ src: '/content/4/7.PNG', offset: 19 }],
    },

    {
      description:
        'Entsprechend steht auch die Seite [AC] zu einer Größe im Verhältnis. Welche Größe ist das?',
      correctChoice: 'sin &ang;CB<sub>1</sub>A = sin &beta; ',
      wrong1: 'sin &alpha;',
      wrong2: 'sin 2&alpha;',
      cursor: { x: 14, y: 19 },
      quickviews: [
        { type: 'solution', start: 16, end: 20 },
        { type: 'solution', start: 1, end: 11 },
      ],
      layersPre: [{ src: '/content/4/8.PNG', offset: 17 }],
      layersPost: [{ src: '/content/4/9.PNG', offset: 19 }],
    },
    {
      description:
        'Bestimme das Maß des Winkel &beta; über die Innenwinkelsumme. Wie lautet des Ergebnis?',
      correctChoice: '&beta; = 180° - 3&alpha;',
      wrong1: '&beta; = 180° - &alpha;',
      wrong2: '&beta; = 2&alpha;',
      cursor: { x: 16, y: 23 },
      quickviews: [
        { type: 'solution', start: 20, end: 24 },
        { type: 'solution', start: 1, end: 11 },
      ],
      layersPre: [{ src: '/content/4/10.PNG', offset: 21 }],
      layersPost: [{ src: '/content/4/11.PNG', offset: 21 }],
    },
    {
      description:
        'Mit einer Supplementbeziehung lässt sich Term vereinfachen. Wie lautet die korrekte Vereinfachung?',
      correctChoice: 'sin (180° - 3&alpha;) = sin 3&alpha;',
      wrong1: 'sin (180° - 3&alpha;) = cos &alpha;',
      wrong2: 'sin (180° - 3&alpha;) = sin &alpha;',
      cursor: { x: 21, y: 27 },
      quickviews: [{ type: 'solution', start: 24, end: 28 }],
      layersPre: [{ src: '/content/4/12.PNG', offset: 25 }],
      layersPost: [{ src: '/content/4/13.PNG', offset: 27 }],
    },
    {
      description:
        'Löse die Gleichung nun nach <span class="overline">B<sub>n</sub>C</span>(&alpha;) auf und setze die bekannten Werte ein. Wie lautet das Ergebnis?',
      correctChoice:
        '<span class="overline">B<sub>n</sub>C</span>(&alpha;) = <div class="frac"><span>4 &sdot; sin &alpha;</span><span>sin 3&alpha;</span></div> cm',
      wrong1:
        '<span class="overline">B<sub>n</sub>C</span>(&alpha;) = <div class="frac"><span>4</span><span>sin &alpha; &sdot; sin 3&alpha;</span></div> cm',
      wrong2:
        '<span class="overline">B<sub>n</sub>C</span>(&alpha;) = <div class="frac"><span>4 &sdot; sin 50°</span><span>sin 150°</span></div> cm',
      cursor: { x: 17, y: 30 },
      quickviews: [
        { type: 'solution', start: 16, end: 19 },
        { type: 'solution', start: 26, end: 28 },
        { type: 'task', start: 5, end: 13 },
      ],
      layersPre: [{ src: '/content/4/14.PNG', offset: 30 }],
      layersPost: [{ src: '/content/4/15.PNG', offset: 29 }],
    },
    {
      description:
        'Wie groß ist der Winkel CB<sub>2</sub>A ? Nutze dabei die Tatsache, dass das Dreieck gleichschenklig ist.',
      correctChoice: '&alpha;',
      wrong1: '90°',
      wrong2: '2&alpha;',
      cursor: { x: 12, y: 41 },
      quickviews: [
        { type: 'solution', start: 33, end: 41 },
        { type: 'task', start: 102, end: 110 },
      ],
      layersPre: [
        { src: '/content/4/16.PNG', offset: 34 },
        { src: '/content/4/17.PNG', offset: 34 },
      ],
      layersPost: [{ src: '/content/4/18.PNG', offset: 36 }],
    },
    {
      description:
        'Welche Gleichung gilt für die Innenwinkelsumme im Dreieck AB<sub>2</sub>C ?',
      correctChoice: '180° = 4&alpha;',
      wrong1: '90° = &alpha;',
      wrong2: '180° = 3&alpha;',
      cursor: { x: 21, y: 46 },
      quickviews: [{ type: 'solution', start: 33, end: 46 }],
      layersPre: [{ src: '/content/4/19.PNG', offset: 44 }],
      layersPost: [{ src: '/content/4/20.PNG', offset: 46 }],
    },
    {
      description: 'Löse die Gleichung auf. Wie groß ist &alpha ?',
      correctChoice: '45°',
      wrong1: '60°',
      wrong2: '90°',
      cursor: { x: 11, y: 48 },
      quickviews: [{ type: 'solution', start: 45, end: 49 }],
      layersPre: [{ src: '/content/4/21.PNG', offset: 48 }],
      layersPost: [{ src: '/content/4/22.PNG', offset: 48 }],
    },
    {
      description: 'Was folgt damit für das Dreieck AB<sub>2</sub>C ?',
      correctChoice: 'rechtwinklig bei C',
      wrong1: 'rechtwinklig bei B',
      wrong2: 'gleichseitig',
      cursor: { x: 22, y: 52 },
      quickviews: [
        { type: 'solution', start: 49, end: 52 },
        { type: 'solution', start: 34, end: 41 },
        { type: 'solution', start: 48, end: 48 },
        { type: 'task', start: 102, end: 115 },
      ],
      layersPre: [{ src: '/content/4/23.PNG', offset: 50 }],
      layersPost: [{ src: '/content/4/24.PNG', offset: 50 }],
    },
  ],
}
