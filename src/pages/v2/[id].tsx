import { GetStaticProps } from 'next'
import { allExercises } from '../../data'
import { PlayerProps } from '../../data/types'
import { PlayerV2 } from '../../PlayerV2'

export default function PracticePage({ props }: { props: PlayerProps }) {
  return <PlayerV2 {...props} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = parseInt(context.params?.id as string)
  const exercise = allExercises.filter((e) => e.id == id)[0] ?? null
  if (!exercise) {
    return {
      notFound: true,
    }
  }

  // convert exercise
  const props: PlayerProps = {
    id: 2,
    pdf: '/content/2/realschule_zweig_i_2018_a1_loseung.pdf',
    steps: [
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
      { type: 'done', length: 22, from: 48 },
      {
        type: 'preload',
        src: '/finish_sad.png',
        from: 46,
      },
      {
        type: 'preload',
        src: '/finish.png',
        from: 46,
      },
      {
        type: 'preload',
        src: '/finish_1.png',
        from: 46,
      },
    ],
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
      {
        type: 'graphpaperlayer',
        from: s,
        parent: area,
        offset: exercise.quiz[nr].layersPre![0].offset ?? 0,
        height: opts.hPre ?? 1.8,
        src: exercise.quiz[nr].layersPre![0].src,
      },
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
      {
        type: 'graphpaperlayer',
        from: s + 1,
        parent: area,
        offset: exercise.quiz[nr].layersPost![0].offset ?? 0,
        height: opts.hPost ?? 1.8,
        src: exercise.quiz[nr].layersPost![0].src,
      },
      {
        type: 'preload',
        src: exercise.quiz[nr].layersPre![0].src,
        from: s - 2,
      },
      {
        type: 'preload',
        src: exercise.quiz[nr].layersPost![0].src,
        from: s - 2,
      },
    ]
  }

  return {
    props: { props },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '2' } }],
    fallback: false,
  }
}
