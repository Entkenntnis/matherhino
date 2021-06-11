import { GetStaticProps } from 'next'
import { allExercises } from '../data'
import { PlayerProps } from '../data/types'
import { PlayerV2 } from '../components/PlayerV2'
import { convert } from '../utils/converter'

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

  const props = convert(exercise)

  return {
    props: { props },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '2' } } /* { params: { id: '3' } }*/],
    fallback: false,
  }
}
