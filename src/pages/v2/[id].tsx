import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { GraphPaper } from '../../components/GraphPaper'
import { AudioIcon } from '../../components/icons/AudioIcon'
import { ChevronLeft } from '../../components/icons/ChevronLeftIcon'
import { RedoIcon } from '../../components/icons/RedoIcon'
import { Quiz } from '../../components/Quiz'
import { allExercises } from '../../data'
import { ExerciseData, LayerData } from '../../data/types'
import { shuffleArray } from '../../utils/shuffleArray'

export default function PracticePage({ exercise }: { exercise: ExerciseData }) {
  const [step, setStep] = useState(-1)
  const [quizSelected, setQuizSelected] = useState<number[]>([])
  const [shuffling, setShuffling] = useState<number[]>(() =>
    shuffleArray([0, 1, 2])
  )
  const [animationState, setAnimationState] = useState(1)
  const [wrongs, setWrongs] = useState<number[]>([])
  const audio = useRef<HTMLAudioElement>(null)
  const [audioState, setAudioState] = useState('none')

  useEffect(() => {
    if (step == -1) {
      nextStep()
      new Image().src = exercise.task
      for (const quiz of exercise.quiz) {
        if (quiz.layersPre) {
          for (const layer of quiz.layersPre) {
            new Image().src = layer.src
          }
        }
        if (quiz.layersPost) {
          for (const layer of quiz.layersPost) {
            new Image().src = layer.src
          }
        }
      }
    }
  }, [step])

  return (
    <div className="text-sm sm:text-base">
      <Head>
        <title>MatheRhino - A1</title>
      </Head>
      <audio
        className="hidden"
        ref={audio}
        onEnded={() => {
          setAudioState('none')
        }}
      />
      <div className="flex max-w-2xl justify-between mx-auto mt-4 sm:mt-6 lg:mt-0 px-2 items-center">
        <button
          className={clsx(
            '',
            'lg:fixed lg:left-4 lg:top-4 flex flex-row',
            'items-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl px-2 py-1',
            'select-none'
          )}
        >
          <ChevronLeft className="h-4 inline mr-2" />
          <span> zurück</span>
        </button>
        <div className={clsx('', 'lg:fixed lg:right-6 lg:top-16', '')}>
          <p>Frage 4 / 16</p>
        </div>
        <button
          className={clsx(
            '',
            'lg:fixed lg:right-4 lg:top-4 flex flex-row',
            'items-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl px-2 py-1',
            'select-none'
          )}
          onClick={() => {
            setStep(-1)
            setWrongs([])
            setQuizSelected([])
          }}
        >
          <RedoIcon className="h-3 inline mr-2" />
          <span> neu starten</span>
        </button>
      </div>
      <div className="flex flex-col items-center mx-auto w-full max-w-2xl">
        {step >= 0 && renderTask(-2, 38.5)}
        {step == 0 && renderPleaseRead(0)}
        {step >= 1 && renderTask(36.3, 56.6)}
        {step == 1 && renderPleaseRead(1)}
        {renderWholeStep(2, 0, 0, 2)}
        {renderWholeStep(4, 1, 0, 4)}
        {renderWholeStep(6, 2, 0, 6)}
        {renderWholeStep(8, 3, 0, 8)}
        {renderWholeStep(10, 4, 0, 12)}
        {renderWholeStep(12, 5, 0, 18)}
        {renderWholeStep(14, 6, 0, 19)}
        {renderWholeStep(16, 7, 0, 22)}
        {renderWholeStep(18, 8, 0, 26)}
        {step >= 20 && renderGraphPaper(0, 26, 8, true)}
        {step >= 20 && renderCheckpoint(step == 20, step >= 23, 20, 8)}
        {step >= 21 && renderTask(54.8, 83)}
        {step == 21 && renderPleaseRead(2)}
        {renderWholeStep(22, 9, 26.9, 30)}
        {renderWholeStep(24, 10, 26.9, 34)}
        {renderWholeStep(26, 11, 26.9, 34)}
        {renderWholeStep(28, 12, 26.9, 34)}
        {renderWholeStep(30, 13, 26.9, 36)}
        {renderWholeStep(32, 14, 26.9, 38)}
        {renderWholeStep(34, 15, 26.9, 42)}
        {renderWholeStep(36, 16, 26.9, 42)}
        {renderWholeStep(38, 17, 26.9, 42)}
        {renderWholeStep(40, 18, 26.9, 44)}
        {renderWholeStep(42, 19, 26.9, 46)}
        {renderWholeStep(44, 20, 26.9, 54)}
        {renderWholeStep(46, 21, 26.9, 58)}
        {step >= 48 && renderGraphPaper(26.9, 58, 21, true)}
        {step >= 48 &&
          renderDone('/content/2/realschule_zweig_i_2018_a1_loseung.pdf')}
        <div className="h-32 lg:h-80"></div>
      </div>
    </div>
  )

  function renderCheckpoint(
    showContinue: boolean,
    showReset: boolean,
    pos: number,
    quizPos: number
  ) {
    return (
      <div
        className={clsx(
          'mt-10 mb-8 px-4 py-2 w-full border-gray-300 md:border',
          'flex justify-between items-center'
        )}
      >
        <span>
          Kontrollpunkt gespeichert <span className="text-lime-500">✓</span>
        </span>
        <button
          className={clsx(
            'cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl px-2 py-1 select-none',
            showContinue || showReset ? 'visible' : 'invisible'
          )}
          onClick={() => {
            if (showContinue) {
              nextStep()
            }
            if (showReset) {
              setStep(pos)
              setWrongs(wrongs.filter((i) => i <= quizPos))
              setQuizSelected([])
              setTimeout(() => {
                nextStep(pos + 1)
              }, 0)
            }
          }}
        >
          {showContinue ? 'weiter' : 'von hier neu starten'}
        </button>
      </div>
    )
  }

  function renderWholeStep(
    stepStart: number,
    quizStep: number,
    offsetStart: number,
    offsetEnd: number
  ) {
    return (
      <>
        {step == stepStart &&
          renderGraphPaper(offsetStart, offsetEnd, quizStep, false, true)}
        {step == stepStart && renderQuiz(quizStep)}
        {step == stepStart + 1 &&
          renderGraphPaper(offsetStart, offsetEnd, quizStep, true, true)}
        {step == stepStart + 1 && renderQuiz(quizStep)}
      </>
    )
  }

  function renderTask(start: number, end: number) {
    return (
      <div
        className={clsx(
          'relative overflow-hidden w-full mb-2 mt-6',
          'transition-opacity duration-1000',
          animationState == 1 ? 'opacity-0' : 'opacity-100'
        )}
        style={{ paddingBottom: `${end - start}%` }}
      >
        <img
          className="absolute"
          style={{ marginTop: `${-start}%` }}
          src={exercise.task}
          draggable={false}
        ></img>
      </div>
    )
  }

  function renderPleaseRead(audioIndex: number) {
    return (
      <div
        className={clsx(
          'p-4 w-full md:border border-lime-300 md:mt-6',
          'text-center transition-opacity',
          animationState <= 2 || animationState == 4
            ? 'opacity-0'
            : 'opacity-100',
          animationState == 4 ? 'duration-300' : 'duration-1000'
        )}
      >
        <div className="text-center mb-3">
          <span>Lies die Aufgabenstellung.</span>
        </div>
        <div className="flex justify-between items-center">
          <button
            className={clsx(
              'select-none cursor-pointer rounded-2xl',
              'px-2 py-1',
              audioState == 'playing'
                ? 'bg-lime-200 animate-pulse'
                : 'bg-gray-100 hover:bg-gray-200'
            )}
            onClick={() => {
              if (audio.current) {
                if (!audio.current.paused) {
                  audio.current.pause()
                  setAudioState('none')
                  return
                }
                const src = audio.current.canPlayType('audio/mpeg')
                  ? exercise.audio[audioIndex].mp3
                  : exercise.audio[audioIndex].ogg
                audio.current.src = src
                audio.current.play()
                setAudioState('playing')
              }
            }}
          >
            <AudioIcon className="inline-block h-4 mb-1" />
            &nbsp;Vorlesen
          </button>
          <button
            className={clsx(
              'cursor-pointer px-2 py-1',
              'select-none bg-gray-100 hover:bg-gray-200 rounded-2xl'
            )}
            onClick={() => {
              setAnimationState(4)
              setTimeout(() => {
                nextStep()
              }, 300)
            }}
          >
            weiter
          </button>
        </div>
      </div>
    )
  }

  function renderGraphPaper(
    start: number,
    end: number,
    quizStep: number,
    quizDone: boolean,
    fade?: boolean
  ) {
    const layers: LayerData[] = []
    for (let i = 0; i <= quizStep; i++) {
      if (i >= exercise.quiz.length) continue
      const quizData = exercise.quiz[i]
      if (quizData.layersPre) {
        for (const layer of quizData.layersPre) {
          layers.push(layer)
        }
      }
      if ((i < quizStep || quizDone) && quizData.layersPost) {
        for (const layer of quizData.layersPost) {
          layers.push(layer)
        }
      }
    }
    /*for (let i = step + 1; i < exercise.quiz.length; i++) {
     
        const quizData = exercise.quiz[i]
        if (quizData.layersPre) {
          for (const layer of quizData.layersPre) {
            layers.push(layer)
          }
        }
        if (quizData.layersPost) {
          for (const layer of quizData.layersPost) {
            layers.push(layer)
          }
        }
    }*/
    return (
      <div
        className={clsx(
          'w-full',
          'transition-opacity',
          animationState <= 1 && (step == 2 || step == 30)
            ? 'opacity-0'
            : 'opacity-100',
          animationState == 4 ? 'duration-300' : 'duration-1000'
        )}
      >
        <div
          className={clsx(
            'relative overflow-hidden w-full mb-2',
            'transition-all'
          )}
          style={{
            paddingBottom: `${(end - start + 2) * (100 / 25)}%`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              marginTop: `${-start * (100 / 25)}%`,
            }}
          >
            <GraphPaper
              height={exercise.height}
              content={layers}
              warnings={wrongs.map((i) => exercise.quiz[i].cursor)}
              cursor={exercise.quiz[quizStep].cursor}
              showContinue={false}
              onContinue={() => {}}
              hideCursor={quizDone}
              fadeState={animationState == 1 ? 'invisible' : 'visible'}
              fadeImgs={
                fade
                  ? quizSelected.includes(0)
                    ? (exercise.quiz[quizStep].layersPost ?? []).map(
                        (l) => l.src
                      )
                    : (exercise.quiz[quizStep].layersPre ?? []).map(
                        (l) => l.src
                      )
                  : []
              }
              fadeSpeed={'1.5s'}
            />
          </div>
        </div>
      </div>
    )
  }
  function renderQuiz(s: number) {
    return (
      <div
        className={clsx(
          'mt-2 w-full transition-opacity md:border border-lime-300',
          animationState == 4 ? 'duration-100' : 'duration-1000',
          (animationState <= 2 && !quizSelected.includes(0)) ||
            animationState == 4
            ? 'opacity-0'
            : 'opacity-100'
        )}
      >
        <Quiz
          quiz={exercise.quiz[s]}
          selected={quizSelected}
          shuffling={shuffling}
          smallHeight
          noBorder
          interactive={!quizSelected.includes(0)}
          onSelect={(index) => {
            if (!quizSelected.includes(index)) {
              const newSelected = JSON.parse(JSON.stringify(quizSelected))
              newSelected.push(index)
              setQuizSelected(newSelected)
            }

            if (index == 0) {
              if (quizSelected.length >= 1 && !wrongs.includes(s)) {
                setWrongs([...wrongs, s])
              }
              nextStep()
            }
            /* }

          if (currentSelected.length == 0) {
            submit_event(step, 'click')
            submit_event(step, index == 0 ? 'correct' : 'wrong')
          }*/
          }}
        />

        <div
          className={clsx(
            'flex justify-end p-4',
            quizSelected.includes(0) && animationState >= 3
              ? 'visible'
              : 'invisible'
          )}
        >
          <button
            className={clsx(
              'cursor-pointer px-2 py-1',
              'select-none bg-gray-100 hover:bg-gray-200 rounded-2xl'
            )}
            onClick={() => {
              setAnimationState(4)
              setTimeout(() => {
                setQuizSelected([])
                setShuffling(shuffleArray([0, 1, 2]))
                nextStep()
              }, 100)
            }}
          >
            weiter
          </button>
        </div>
      </div>
    )
  }

  function renderDone(pdf?: string) {
    const correctPercentage =
      step == 0
        ? 0
        : Math.round((1 - wrongs.length / exercise.quiz.length) * 100)
    const feedback =
      correctPercentage < 75
        ? 'nicht bestanden'
        : correctPercentage < 99
        ? 'bestanden'
        : 'perfekt'
    const summary = `${exercise.quiz.length - wrongs.length} von ${
      exercise.quiz.length
    } Fragen richtig (${correctPercentage}%)${
      correctPercentage < 75 ? ' - Bestanden bei mind. 75%' : ''
    }`
    return (
      <div className="p-4 mt-4 w-full text-center md:border border-gray-300">
        <img
          className="mx-auto w-52"
          src={
            correctPercentage < 75
              ? '/finish_sad.png'
              : correctPercentage < 99
              ? '/finish.png'
              : '/finish_1.png'
          }
        />
        <p className="mt-4 text-center font-bold">{feedback}</p>
        <p className="mt-4 text-center text-gray-700">{summary}</p>
        {pdf && (
          <p className="mt-4">
            <a
              href={pdf}
              className="text-blue-500 underline cursor-pointer"
              target="_blank"
            >
              Lösung herunterladen
            </a>
          </p>
        )}
      </div>
    )
  }

  function nextStep(explicitStep?: number) {
    const s = explicitStep ?? step + 1
    setStep(s)
    console.log('set step', explicitStep ?? step + 1)
    setAnimationState(1)
    console.log('anim state', 1)
    setTimeout(() => {
      setAnimationState(2)
      console.log('anim state', 2)
      setTimeout(() => {
        setAnimationState(3)
        console.log('anim state', 3)
      }, 1000)
    }, 1)
  }
}

// ------------ SERVER SIDE ------------

interface PlayerProps {
  id: number
  steps: Step[]
  pdf: string
}

interface StepBase {
  stepId: string
  from?: number
  to?: number
}

interface ProgressStep extends StepBase {
  type: 'progress'
  text: string
}

interface PreloadStep extends StepBase {
  type: 'preload'
  src: string
}

interface StoreStep extends StepBase {
  type: 'store'
}

interface AnimatableStep extends StepBase {
  fadeIn?: boolean
  fadeOut?: boolean
  delay?: boolean
}

interface TaskStep extends AnimatableStep {
  src: string
  legacyStart?: number
  legacyEnd?: number
}

interface ReadStep extends AnimatableStep {
  audioStr: string
}

interface GraphPaperStep extends AnimatableStep {}

interface GraphPaperLayerStep extends AnimatableStep {
  parent: string
  layers: LayerData[]
}

interface CheckpointStep extends AnimatableStep {
  position: number
}

type Step =
  | ProgressStep
  | PreloadStep
  | StoreStep
  | TaskStep
  | ReadStep
  | GraphPaperStep
  | GraphPaperLayerStep
  | CheckpointStep

export const getStaticProps: GetStaticProps = async (context) => {
  const id = parseInt(context.params?.id as string)
  const exercise = allExercises.filter((e) => e.id == id)[0] ?? null
  if (!exercise) {
    return {
      notFound: true,
    }
  }

  // convert exercise

  return {
    props: { exercise },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '2' } }],
    fallback: false,
  }
}
