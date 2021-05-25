import build from 'next/dist/build'
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
  height: 55,
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
      beforeQuiz: 999,
    },
    {
      mp3: '/content/11/b2_4.mp3',
      ogg: '/content/11/b2_4.ogg',
      size: 5,
      position: { left: 8, top: 84.3 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/11/b2_5.mp3',
      ogg: '/content/11/b2_5.ogg',
      size: 5,
      position: { left: 8, top: 92.4 },
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
      position: { x: 23, y: 37 },
      title: 'Teilaufgabe B 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 2.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 26 },
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
