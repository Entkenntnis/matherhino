import { ExerciseData } from './types'

export const exercise4: ExerciseData = {
  id: 4,
  task: '/content/4/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 55,
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
      position: { x: 23, y: 14 },
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
        { type: 'task', start: 15, end: 23 },
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
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
      layersPre: [{ src: '/content/3/1.PNG' }, { src: '/content/3/2.PNG' }],
      layersPost: [{ src: '/content/3/3.PNG' }],
    },*/
  ],
}
