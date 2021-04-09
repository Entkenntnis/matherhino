import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ExerciseData, LayerData } from '../data/types'
import { shuffleArray } from '../utils/shuffleArray'
import { GraphPaper } from './GraphPaper'
import { ChevronLeft } from './icons/ChevronLeftIcon'
import { TimesIcon } from './icons/TimesIcon'
import { Quiz } from './Quiz'
import { Task } from './Task'

export interface PreviewProps {
  exercise: ExerciseData
}

export function Preview({ exercise }: PreviewProps) {
  const [showQuiz, setShowQuiz] = useState(-1)
  const [shuffling, setShuffling] = useState([0, 1, 2])

  return (
    <>
      <Head>
        <title>MatheRhino</title>
      </Head>
      <div className="flex bg-gray-100 h-12 items-center justify-center relative">
        <Link href="/">
          <div className="absolute w-4 h-4 sm:w-6 sm:h-6 left-1 cursor-pointer text-gray-300">
            <ChevronLeft className="w-full h-full " />
          </div>
        </Link>
        <div>Vorschau</div>
      </div>
      <div className="max-w-2xl mx-auto">
        <Task
          audioPlayed={[]}
          audioDone={() => {}}
          exercise={exercise}
          step={-1}
          hiddenFrom={100}
        />
        <GraphPaper
          height={exercise.height}
          content={getLayers()}
          warnings={[]}
          cursor={{ x: 0, y: 0 }}
          showContinue={false}
          onContinue={() => {}}
          hideCursor={true}
          fadeImgs={[]}
          numbering={exercise.quiz.map((el, i) => {
            return { position: el.cursor, num: i + 1 }
          })}
          numberingClicked={(num) => {
            setShowQuiz(num)
            setShuffling(shuffleArray([0, 1, 2]))
          }}
        />
        {showQuiz >= 0 && (
          <div
            className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full z-50"
            style={{ background: 'rgba(80,80,80,0.8)' }}
            onClick={() => {
              setShowQuiz(-1)
            }}
          >
            <div
              className="bg-white rounded-lg max-w-1/2 mx-5 pt-8 pb-4 relative"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <div
                className="absolute right-4 top-3 h-6 w-6 bg-gray-100 text-gray-600 rounded-full cursor-pointer"
                onClick={() => setShowQuiz(-1)}
              >
                <TimesIcon className="h-full w-full" />
              </div>
              <Quiz
                quiz={exercise.quiz[showQuiz - 1]}
                selected={[]}
                shuffling={shuffling}
                smallHeight={true}
                interactive={false}
                onSelect={(index) => {}}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )

  function getLayers() {
    const layers: LayerData[] = []
    for (let i = 0; i < exercise.quiz.length; i++) {
      const quizData = exercise.quiz[i]
      if (quizData.layersPre) {
        for (const layer of quizData.layersPre) {
          layers.push(layer)
        }
      }
    }
    return layers
  }
}
