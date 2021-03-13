import { GetStaticProps } from 'next'
import { ExercisePlayer } from '../components/ExercisePlayer'
import { allExercises, Exercise, getExercise } from '../data'

export default function PracticePage({ exercise }: { exercise: Exercise }) {
  return <ExercisePlayer exercise={exercise} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = parseInt(context.params?.id as string)
  const exercise = getExercise(id)
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
