import { ExerciseData } from './types'

export const exercise5: ExerciseData = {
  id: 5,
  task: '/content/5/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 150,
  audio: [
    {
      mp3: '/content/5/b1_0.mp3',
      ogg: '/content/5/b1_0.ogg',
      size: 5,
      position: { left: 9, top: -0.2 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/5/b1_1.mp3',
      ogg: '/content/5/b1_1.ogg',
      size: 5,
      position: { left: 9, top: 20.8 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/5/b1_2.mp3',
      ogg: '/content/5/b1_2.ogg',
      size: 5,
      position: { left: 9, top: 31.5 },
      beforeQuiz: 4,
    },
    {
      mp3: '/content/5/b1_3.mp3',
      ogg: '/content/5/b1_3.ogg',
      size: 5,
      position: { left: 9, top: 45.7 },
      beforeQuiz: 11,
    },
    {
      mp3: '/content/5/b1_4.mp3',
      ogg: '/content/5/b1_4.ogg',
      size: 5,
      position: { left: 9, top: 70.2 },
      beforeQuiz: 14,
    },
    {
      mp3: '/content/5/b1_5.mp3',
      ogg: '/content/5/b1_5.ogg',
      size: 5,
      position: { left: 9, top: 81.5 },
      beforeQuiz: 20,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 25 },
      title: 'Teilaufgabe B 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 65 },
      title: 'Teilaufgabe B 1.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 68 },
      title: 'Teilaufgabe B 1.4',
      audioIndex: 4,
    },
    {
      position: { x: 23, y: 999 },
      title: 'Teilaufgabe B 1.5',
      audioIndex: 5,
    },
  ],
  quiz: [
    {
      description:
        "Bei der Anwendung der orthogonalen Affinität mit der x-Achse als Affinitätsachse verändert sich die Abszisse x nicht. Allerdings findet eine Transformation der Ordinate y statt. Wie lautet der Term für y' ?",
      correctChoice: "y' = -0,5y",
      wrong1: "y' = y -0,5",
      wrong2: "y' = y",
      cursor: { x: 15, y: 5 },
      quickviews: [
        { type: 'solution', start: 0, end: 6 },
        { type: 'task', start: 10, end: 29 },
      ],
      layersPre: [
        { src: '/content/5/1.PNG', offset: 1 },
        { src: '/content/5/2.PNG', offset: 1 },
      ],
      layersPost: [{ src: '/content/5/3.PNG', offset: 5 }],
    },
    {
      description:
        'Setze die Gleichung ein und multipliziere aus. Wie lautet das Ergebnis?',
      correctChoice: "y' = log<sub>0,5</sub> x' + 0,75",
      wrong1: "y' = log<sub>0,5</sub> x' - 1,5",
      wrong2: "y' = -2 &sdot; log<sub>0,5</sub> x' - 2",
      cursor: { x: 19, y: 9 },
      quickviews: [
        { type: 'solution', start: 4.7, end: 10 },
        { type: 'task', start: 5, end: 13 },
      ],
      layersPre: [{ src: '/content/5/4.PNG', offset: 7 }],
      layersPost: [{ src: '/content/5/5.PNG', offset: 7 }],
    },
    {
      description:
        'Wie lässt sich die Parallelverschiebung um den gegebenen Vektor anschaulich beschreiben?',
      correctChoice: 'Verschiebung um 1,5 nach unten',
      wrong1: 'Verschiebung um 1,5 nach oben',
      wrong2: 'Verschiebung um 1,5 nach rechts',
      cursor: { x: 16, y: 14 },
      quickviews: [{ type: 'solution', start: 11, end: 15 }],
      layersPre: [{ src: '/content/5/6.PNG', offset: 11 }],
      layersPost: [{ src: '/content/5/7.PNG', offset: 14 }],
    },
    {
      description:
        "Auch bei dieser Abbildung bleibt die Abszisse x unverändert, allerdings wird die Ordinate y verändert. Wie lautet der Term für y'' nach dem Einsetzen?",
      correctChoice: "y'' = (log<sub>0,5</sub> x' + 0,75) - 1,5",
      wrong1: "y'' = (log<sub>0,5</sub> x' + 0,75) &sdot; 1,5",
      wrong2: "y'' = (log<sub>0,5</sub> x' + 0,75) + 1,5",
      cursor: { x: 19, y: 22 },
      quickviews: [
        { type: 'solution', start: 11, end: 23 },
        { type: 'solution', start: 4.7, end: 10 },
      ],
      layersPre: [{ src: '/content/5/8.PNG', offset: 16 }],
      layersPost: [{ src: '/content/5/9.PNG', offset: 18 }],
    },
    {
      description:
        'Erstelle eine Wertetabelle, um den Graph der Funktion f<sub>1</sub> zu zeichnen. Welcher Anfangsverlauf passt zur Funktion f<sub>1</sub> ? <img class="p-3 pt-8" src="/content/5/b12_1.png" />',
      correctChoice: '3',
      wrong1: '1',
      wrong2: '2',
      cursor: { x: 6, y: 39 },
      quickviews: [{ type: 'task', start: 5, end: 13 }],
      layersPre: [
        { src: '/content/5/10.PNG', offset: 25 },
        { src: '/content/5/11.PNG', offset: 27 },
      ],
      layersPost: [{ src: '/content/5/12.PNG', offset: 40 }],
    },
    {
      description:
        'Wie sieht der vollständige Graph zu f<sub>1</sub> aus? <img class="p-3 pt-8" src="/content/5/b12_2.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 13, y: 34 },
      quickviews: [{ type: 'task', start: 5, end: 13 }],
      layersPre: [],
      layersPost: [{ src: '/content/5/13.PNG', offset: 28 }],
    },
    {
      description:
        'Wie sieht der Graph zu f<sub>2</sub> aus? Erstelle wieder eine Wertetabelle. <img class="p-3 pt-8" src="/content/5/b12_3.png" />',
      correctChoice: '3',
      wrong1: '1',
      wrong2: '2',
      cursor: { x: 13, y: 45 },
      quickviews: [{ type: 'solution', start: 21.6, end: 22.5 }],
      layersPre: [],
      layersPost: [{ src: '/content/5/14.PNG', offset: 40 }],
    },
    {
      description:
        'Mit welcher Gleichung lässt sich die Nullstelle von f<sub>1</sub> bestimmen?',
      correctChoice: '-2 &sdot; log<sub>0,5</sub> x - 1,5 = 0',
      wrong1: 'y = -2 &sdot; log<sub>0,5</sub> 0 - 1,5',
      wrong2: '-2 &sdot; log<sub>0,5</sub> x = 0',
      cursor: { x: 18, y: 54 },
      quickviews: [{ type: 'task', start: 5, end: 13 }],
      layersPre: [{ src: '/content/5/15.PNG', offset: 52 }],
      layersPost: [{ src: '/content/5/16.PNG', offset: 54 }],
    },
    {
      description:
        'Führe die angegebenen Umformungsschritte durch. Welche Gleichung erhältst du?',
      correctChoice: 'log<sub>0,5</sub> x = -0,75',
      wrong1: 'log<sub>0,5</sub> x = -3',
      wrong2: 'x = -3',
      cursor: { x: 20, y: 58 },
      quickviews: [{ type: 'solution', start: 53.4, end: 58.4 }],
      layersPre: [{ src: '/content/5/17.PNG', offset: 54 }],
      layersPost: [{ src: '/content/5/18.PNG', offset: 56 }],
    },
    {
      description:
        'Diese Gleichung lässt sich mithilfe der Umkehrfunktion des Logarithmus zur Basis 0,5 nach x auflösen. Wie lautet die passende rechte Seite der Gleichung?',
      correctChoice: '0,5<sup>-0,75</sub>',
      wrong1: '(-0,75)<sup>0,5</sub>',
      wrong2: '0,5 &sdot; (-0,75)',
      cursor: { x: 22, y: 60 },
      quickviews: [{ type: 'solution', start: 57.4, end: 60 }],
      layersPre: [{ src: '/content/5/19.PNG', offset: 60 }],
      layersPost: [{ src: '/content/5/20.PNG', offset: 59 }],
    },
    {
      description:
        'Wie lautet nun die Nullstelle der Funktion f<sub>1</sub> ? Berechne mit dem Taschenrechner.',
      correctChoice: '1,68',
      wrong1: '1,71',
      wrong2: '1,63',
      cursor: { x: 23, y: 62 },
      quickviews: [{ type: 'solution', start: 51.4, end: 62 }],
      layersPre: [{ src: '/content/5/21.PNG', offset: 62 }],
      layersPost: [{ src: '/content/5/22.PNG', offset: 62 }],
    },
    {
      description:
        'Wo befindet sich die Strecke A<sub>1</sub>B<sub>1</sub> ? <img class="p-3 pt-8" src="/content/5/b13_1.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 20, y: 65 },
      quickviews: [{ type: 'task', start: 85, end: 123 }],
      layersPre: [
        { src: '/content/5/23.PNG', offset: 65 },
        { src: '/content/5/24.PNG', offset: 65 },
      ],
      layersPost: [{ src: '/content/5/25.PNG', offset: 38 }],
    },
    {
      description:
        'Wo liegt der Punkt C<sub>1</sub> ? <img class="p-3 pt-8" src="/content/5/b13_2.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 21, y: 65 },
      quickviews: [{ type: 'task', start: 85, end: 123 }],
      layersPre: [],
      layersPost: [{ src: '/content/5/26.PNG', offset: 39 }],
    },
    {
      description:
        'Wo liegt der Punkt C<sub>2</sub> ? <img class="p-3 pt-8" src="/content/5/b13_3.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 22, y: 65 },
      quickviews: [{ type: 'task', start: 85, end: 123 }],
      layersPre: [{ src: '/content/5/27.PNG', offset: 30 }],
      layersPost: [{ src: '/content/5/28.PNG', offset: 32 }],
    },
    {
      description:
        'Schaue dir die Skizze an. Laut Angabe ist das Dreieck A<sub>3</sub>B<sub>3</sub>C<sub>3</sub> gleichschenklig. Welche Eigenschaft des Dreiecks hilft bei der Berechnung der x-Koordinate von A<sub>3</sub> ?',
      correctChoice:
        '<span class="overline">A<sub>3</sub>B<sub>3</sub></span> = 3',
      wrong1:
        '<span class="overline">A<sub>3</sub>C<sub>3</sub></span> = <span class="overline">B<sub>3</sub>C<sub>3</sub></span>',
      wrong2: '&alpha;<sub>3</sub> = &beta;<sub>3</sub>',
      cursor: { x: 17, y: 80 },
      quickviews: [{ type: 'solution', start: 67, end: 80 }],
      autoShowViews: true,
      layersPre: [
        { src: '/content/5/29.PNG', offset: 68 },
        { src: '/content/5/30.PNG', offset: 68 },
      ],
      layersPost: [{ src: '/content/5/31.PNG', offset: 80 }],
    },
    {
      description:
        'Zusätzlich kannst du die Länge der Strecke A<sub>3</sub>B<sub>3</sub>C<sub>3</sub> in Abhängigkeit von x darstellen. Wie kommen dabei die Funktionen f<sub>1</sub> und f<sub>2</sub> zum Einsatz?',
      correctChoice:
        '<span class="overline">A<sub>n</sub>B<sub>n</sub></span>(x) = f<sub>1</sub>(x) - f<sub>2</sub>(x)',
      wrong1:
        '<span class="overline">A<sub>n</sub>B<sub>n</sub></span>(x) = f<sub>1</sub>(x) + f<sub>2</sub>(x)',
      wrong2:
        '<span class="overline">A<sub>n</sub>B<sub>n</sub></span>(x) = f<sub>2</sub>(x) - f<sub>1</sub>(x)',
      cursor: { x: 18, y: 84 },
      quickviews: [{ type: 'solution', start: 27, end: 50 }],
      layersPre: [{ src: '/content/5/32.PNG', offset: 82 }],
      layersPost: [{ src: '/content/5/33.PNG', offset: 84 }],
    },
    {
      description:
        'Setze die Funktionsterme ein und vereinfache. Wie lautet das Ergebnis?',
      correctChoice: '-3 &sdot; log<sub>0,5</sub> x - 0,75',
      wrong1: '-3 &sdot; log<sub>0,5</sub> x - 2,25',
      wrong2: 'log<sub>0,5</sub> x - 2,25',
      cursor: { x: 20, y: 88 },
      quickviews: [{ type: 'solution', start: 83.3, end: 88 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/5/34.PNG', offset: 86 }],
      layersPost: [{ src: '/content/5/35.PNG', offset: 86 }],
    },
    {
      description:
        'Mit welcher Gleichung lässt sich nun die gesuchte x-Koordinate bestimmen?',
      correctChoice: '-3 &sdot; log<sub>0,5</sub> x - 0,75 = 3',
      wrong1: '-3 &sdot; log<sub>0,5</sub> x - 0,75 = 0',
      wrong2: '-3 &sdot; log<sub>0,5</sub> x - 0,75 = y',
      cursor: { x: 18, y: 92 },
      quickviews: [
        { type: 'solution', start: 83.3, end: 88 },
        { type: 'solution', start: 79.4, end: 80 },
      ],
      layersPre: [{ src: '/content/5/36.PNG', offset: 90 }],
      layersPost: [{ src: '/content/5/37.PNG', offset: 92 }],
    },
    {
      description:
        'Forme die Gleichung mit den gegebenen Äquivalenzumformengen um. Wie lautet das Ergebnis?',
      correctChoice: 'log<sub>0,5</sub> x = -1,25',
      wrong1: 'log<sub>0,5</sub> x = 1,25',
      wrong2: 'log<sub>0,5</sub> x = -0,75',
      cursor: { x: 20, y: 96 },
      quickviews: [{ type: 'solution', start: 91.4, end: 96 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/5/38.PNG', offset: 92 }],
      layersPost: [{ src: '/content/5/39.PNG', offset: 94 }],
    },
    {
      description:
        'Löse nach x auf, indem du den Logarithmus umkehrst und berechne den Wert mit dem Taschenrechner. Wie lautet das Ergebnis?',
      correctChoice: '2,38',
      wrong1: '3,42',
      wrong2: '2,12',
      cursor: { x: 24, y: 102 },
      quickviews: [{ type: 'solution', start: 95.5, end: 100 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/5/40.PNG', offset: 98 }],
      layersPost: [{ src: '/content/5/41.PNG', offset: 98 }],
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
    },*/
  ],
}
