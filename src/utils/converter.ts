import { ExerciseData, LayerData, PlayerProps } from '../data/types'

export function convert(exercise: ExerciseData): PlayerProps {
  if (exercise.id == 2) return convert2()
  if (exercise.id == 3) return convert3()

  function convert2() {
    // convert exercise
    return {
      backTo: exercise.backTo,
      id: 2,
      pdf: '/content/2/realschule_zweig_i_2018_a1_loseung.pdf',
      steps: [
        {
          type: 'preload',
          src: exercise.task,
          from: -1,
        },
        {
          type: 'preload',
          src: '/background.png',
          from: 0,
        },
        {
          type: 'task',
          from: 0,
          src: exercise.task,
          legacyStart: -2,
          legacyEnd: 38.5,
        },
        {
          type: 'read',
          from: 0,
          to: 0,
          audioStr: exercise.audio[0].mp3.replace('.mp3', ''),
        },
        {
          type: 'task',
          from: 1,
          src: exercise.task,
          legacyStart: 36.3,
          legacyEnd: 56.6,
        },
        {
          type: 'read',
          from: 1,
          to: 1,
          audioStr: exercise.audio[1].mp3.replace('.mp3', ''),
        },
        { type: 'graphpaper', from: 2, stepId: 'a1.1' },
        ...convertQuiz(0, 2, 'a1.1', {}),
        ...convertQuiz(1, 4, 'a1.1', {}),
        ...convertQuiz(2, 6, 'a1.1', {}),
        ...convertQuiz(3, 8, 'a1.1', {}),
        ...convertQuiz(4, 10, 'a1.1', { hPre: 3.8 }),
        ...convertQuiz(5, 12, 'a1.1', { hPre: 5.8 }),
        ...convertQuiz(6, 14, 'a1.1', {}),
        ...convertQuiz(7, 16, 'a1.1', { hPre: 3.8 }),
        ...convertQuiz(8, 18, 'a1.1', { hPre: 3.8 }),
        { type: 'checkpoint', quizNr: 8, from: 20 },
        {
          type: 'task',
          from: 21,
          src: exercise.task,
          legacyStart: 54.8,
          legacyEnd: 83,
        },
        {
          type: 'read',
          from: 21,
          to: 21,
          audioStr: exercise.audio[2].mp3.replace('.mp3', ''),
        },
        { type: 'graphpaper', from: 22, stepId: 'a1.2', legacyOffset: 26.9 },
        ...convertQuiz(9, 22, 'a1.2', { hPre: 3.8 }),
        ...convertQuiz(10, 24, 'a1.2', { hPre: 3.8 }),
        ...convertQuiz(11, 26, 'a1.2', {}),
        ...convertQuiz(12, 28, 'a1.2', {}),
        ...convertQuiz(13, 30, 'a1.2', {}),
        ...convertQuiz(14, 32, 'a1.2', {}),
        ...convertQuiz(15, 34, 'a1.2', { hPre: 3.8 }),
        ...convertQuiz(16, 36, 'a1.2', {}),
        ...convertQuiz(17, 38, 'a1.2', {}),
        ...convertQuiz(18, 40, 'a1.2', {}),
        ...convertQuiz(19, 42, 'a1.2', {}),
        ...convertQuiz(20, 44, 'a1.2', { hPre: 7.8 }),
        ...convertQuiz(21, 46, 'a1.2', { hPre: 3.8 }),
        ...buildDone(exercise.quiz.length, 48),
      ],
    }
  }

  function convert3(): PlayerProps {
    return {
      backTo: exercise.backTo,
      id: 3,
      pdf: '', // TODO
      steps: [
        {
          type: 'preload',
          src: exercise.task,
          from: -1,
        },
        {
          type: 'preload',
          src: '/background.png',
          from: 0,
        },
        {
          type: 'task',
          from: 0,
          src: exercise.task,
          legacyStart: -2,
          legacyEnd: 43,
        },
        {
          type: 'read',
          from: 0,
          to: 0,
          audioStr: exercise.audio[0].mp3.replace('.mp3', ''),
        },
        {
          type: 'task',
          from: 1,
          src: exercise.task,
          legacyStart: 43,
          legacyEnd: 120,
        },
        {
          type: 'read',
          from: 1,
          to: 1,
          audioStr: '',
          customText: ' ',
        },
        {
          type: 'task',
          from: 2,
          src: exercise.task,
          legacyStart: 120,
          legacyEnd: 133.5,
        },
        {
          type: 'read',
          from: 2,
          to: 2,
          audioStr: exercise.audio[1].mp3.replace('.mp3', ''),
        },
        { type: 'preload', from: 2, src: '/content/3/x1.png' },
        { type: 'graphpaper', from: 3, stepId: 'a2.1' },
        ...convertQuiz(0, 3, 'a2.1', { hPre: 7.8 }),
        ...convertQuiz(1, 5, 'a2.1', { hPre: 2.8 }),
        ...convertQuiz(2, 7, 'a2.1', {}),
        { type: 'checkpoint', quizNr: 2, from: 9 },
        {
          type: 'task',
          from: 10,
          src: exercise.task,
          legacyStart: 133.5,
          legacyEnd: 155,
        },
        {
          type: 'read',
          from: 10,
          to: 10,
          audioStr: exercise.audio[2].mp3.replace('.mp3', ''),
        },
        { type: 'preload', from: 9, src: '/content/3/x2.png' },
        { type: 'preload', from: 9, src: '/content/3/x3.png' },
        { type: 'preload', from: 9, src: '/content/3/x4.png' },
        ...convertQuiz(3, 11, '...', {}),
        {
          type: 'task',
          from: 13,
          src: exercise.task,
          legacyStart: 155,
          legacyEnd: 187,
        },
        {
          type: 'read',
          from: 13,
          to: 13,
          audioStr: exercise.audio[3].mp3.replace('.mp3', ''),
        },
        { type: 'preload', from: 12, src: '/content/3/x5.png' },
        { type: 'preload', from: 12, src: '/content/3/x6.png' },
        { type: 'preload', from: 12, src: '/content/3/x7.png' },
        ...convertQuiz(4, 14, '...', {}),
        { type: 'preload', from: 14, src: '/content/3/x8.png' },
        { type: 'preload', from: 14, src: '/content/3/x9.png' },
        { type: 'preload', from: 14, src: '/content/3/x10.png' },
        { type: 'preload', from: 16, src: '/content/3/x11.png' },
        { type: 'preload', from: 16, src: '/content/3/x12.png' },
        { type: 'preload', from: 16, src: '/content/3/x13.png' },
        { type: 'graphpaper', from: 17, stepId: 'a2.2+3', legacyOffset: 11 },
        ...buildLayers(exercise.quiz[3].layersPre!, 1.8, 17, 'a2.2+3'),
        ...buildLayers(exercise.quiz[3].layersPost!, 1.8, 17, 'a2.2+3'),
        ...buildLayers(exercise.quiz[4].layersPost!, 13.8, 17, 'a2.2+3'),
        ...buildLayers(exercise.quiz[5].layersPost!, 14.8, 17, 'a2.2+3'),
        ...buildLayers(exercise.quiz[6].layersPost!, 14.8, 19, 'a2.2+3'),
        ...convertQuiz(5, 16, '...', {}),
        ...convertQuiz(6, 18, '...', {}),
        { type: 'checkpoint', quizNr: 5, from: 20 },
        {
          type: 'task',
          from: 21,
          src: exercise.task,
          legacyStart: 187,
          legacyEnd: 200,
        },
        {
          type: 'read',
          from: 21,
          to: 21,
          audioStr: exercise.audio[4].mp3.replace('.mp3', ''),
        },
      ],
    }
  }

  function convertQuiz(
    nr: number,
    s: number,
    area: string,
    opts: { hPre?: number; hPost?: number }
  ): any {
    return [
      {
        type: 'progress',
        from: s,
        to: s + 1,
        text: `Frage ${nr + 1} / ${exercise.quiz.length}`,
      },
      ...buildLayers(
        exercise.quiz[nr].layersPre ?? [],
        opts.hPre ?? 1.8,
        s,
        area
      ),
      {
        type: 'graphpapercursor',
        from: s,
        parent: area,
        x: exercise.quiz[nr].cursor.x,
        y: exercise.quiz[nr].cursor.y,
        quizNr: nr,
      },
      {
        type: 'quiz',
        description: exercise.quiz[nr].description,
        correctChoice: exercise.quiz[nr].correctChoice,
        wrong1: exercise.quiz[nr].wrong1,
        wrong2: exercise.quiz[nr].wrong2,
        quizNr: nr,
        from: s,
        to: s + 1,
      },
      ...buildLayers(
        exercise.quiz[nr].layersPost ?? [],
        opts.hPost ?? 1.8,
        s + 1,
        area
      ),
    ]
  }

  function buildLayers(
    layers: LayerData[],
    height: number,
    from: number,
    area: string
  ) {
    return layers.flatMap((layer) => {
      return [
        {
          type: 'graphpaperlayer',
          from,
          parent: area,
          offset: layer.offset ?? 0,
          height,
          src: layer.src,
        },
        {
          type: 'preload',
          from: from - 2,
          src: layer.src,
        },
      ]
    })
  }

  throw 'not found'
}

function buildDone(length: number, from: number) {
  return [
    { type: 'done', length, from },
    {
      type: 'preload',
      src: '/finish_sad.png',
      from: from - 2,
    },
    {
      type: 'preload',
      src: '/finish.png',
      from: from - 2,
    },
    {
      type: 'preload',
      src: '/finish_1.png',
      from: from - 2,
    },
  ]
}
