import { GetStaticProps } from 'next'
import { ExercisePlayer } from '../components/ExercisePlayer'
import { allExercises } from '../data'
import { ExerciseData } from '../data/types'

export default function PracticePage({ exercise }: { exercise: ExerciseData }) {
  return <ExercisePlayer exercise={exercise} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = parseInt(context.params?.id as string)
  const exercise = allExercises.filter((e) => e.id == id)[0] ?? null
  if (!exercise) {
    return {
      notFound: true,
    }
  }
  return {
    props: { exercise },
  }
}

export async function getStaticPaths() {
  return {
    paths: allExercises.map((exercise) => {
      return { params: { id: exercise.id.toString() } }
    }),
    fallback: false,
  }
}
