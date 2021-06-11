import clsx from 'clsx'
import Head from 'next/head'
import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import { GraphPaperArea } from './GraphPaperArea'
import { AudioIcon } from './icons/AudioIcon'
import { ChevronLeft } from './icons/ChevronLeftIcon'
import { PencilIcon } from './icons/PencilIcon'
import { RedoIcon } from './icons/RedoIcon'
import { WarningIcon } from './icons/WarningIcon'
import { Quiz } from './Quiz'
import {
  CheckpointStep,
  DoneStep,
  GraphPaperCursor,
  GraphPaperLayerStep,
  PlayerProps,
  PreloadStep,
  ProgressStep,
  QuizData,
  QuizStep,
  ReadStep,
  TaskStep,
} from '../data/types'
import { getHOffset } from '../utils/pixelOffsets'
import { shuffleArray } from '../utils/shuffleArray'
import { useRouter } from 'next/router'

export function PlayerV2({ id, steps, pdf, backTo }: PlayerProps) {
  const router = useRouter()
  const [step, setStep] = useState(-1)

  const [quizSelected, setQuizSelected] = useState<number[]>([])
  const [shuffling, setShuffling] = useState<number[]>(() =>
    shuffleArray([0, 1, 2])
  )
  const [wrongs, setWrongs] = useState<number[]>([])
  const [quizNr, setQuizNr] = useState(-1)

  const [animationState, setAnimationState] = useState(1)

  const audio = useRef<HTMLAudioElement>(null)
  const [audioState, setAudioState] = useState('none')

  const scrollY = useRef<number>(0)

  const currentSteps = steps.filter(
    (s) =>
      ((s.from !== undefined && s.from <= step) || s.from === undefined) &&
      ((s.to !== undefined && s.to >= step) || s.to === undefined)
  )

  useEffect(() => {
    triggerAnimation()
  }, [])

  useEffect(() => {
    const preloads = steps.filter(
      (x) => x.type == 'preload' && x.from == step
    ) as PreloadStep[]
    preloads.forEach((s) => {
      new Image().src = s.src
    })

    if (step == -1) {
      // start up
      try {
        const store = localStorage.getItem('matherhino_v2')
        const data = JSON.parse(store ?? '{}')
        if (data[id]) {
          if (data[id].step && data[id].wrongs && data[id].quizNr) {
            setStep(data[id].step)
            setWrongs(data[id].wrongs)
            setQuizNr(data[id].quizNr)
            setTimeout(() => {
              scrollToButtom()
            }, 100)
            return
          }
        }
      } catch (e) {}
      setStep(0)
    }
  }, [step])

  return (
    <div className="text-sm sm:text-base max-w-2xl mx-auto">
      <Head>
        <title>MatheRhino</title>
      </Head>
      {renderAudioTag()}
      {renderNavigation()}
      {renderBlocks()}
      <div className="h-16 md:h-32 lg:h-64"></div>
    </div>
  )

  function renderAudioTag() {
    return (
      <audio
        className="hidden"
        ref={audio}
        onEnded={() => {
          setAudioState('none')
        }}
      />
    )
  }

  function renderNavigation() {
    const progress: ProgressStep = (currentSteps.filter(
      (s) => s.type == 'progress'
    )[0] as ProgressStep) ?? { type: 'progress', text: '' }
    return (
      <div
        className={clsx(
          'flex justify-between items-center',
          'mt-4 sm:mt-6 lg:mt-0 px-2 '
        )}
      >
        <div className="lg:fixed lg:left-4 lg:top-4">
          {renderButton(
            'zurück',
            () => {
              const result = confirm('Aufgabe verlassen?')
              if (result) {
                router.push(backTo)
              }
            },
            <ChevronLeft className="h-4 inline mr-2" />
          )}
        </div>
        <div className="lg:fixed lg:right-6 lg:top-16">
          <p>{progress.text}</p>
        </div>
        <div className="lg:fixed lg:right-4 lg:top-4">
          {renderButton(
            'neu starten',
            () => {
              const result = confirm(
                'Fortschritt zurücksetzen und Aufgabe neu starten?'
              )
              if (result) {
                try {
                  const store = localStorage.getItem('matherhino_v2')
                  const data = JSON.parse(store ?? '{}')
                  delete data[id]
                  localStorage.setItem('matherhino_v2', JSON.stringify(data))
                } catch (e) {}
                setStep(-1)
                setWrongs([])
                setQuizSelected([])
                setTimeout(() => {
                  setStep(0)
                  triggerAnimation()
                }, 10)
              }
            },
            <RedoIcon className="h-3 inline mr-2" />
          )}
        </div>
      </div>
    )
  }

  function renderButton(text: string, onClick: () => void, icon?: ReactNode) {
    return (
      <button
        className={clsx(
          'bg-gray-100 hover:bg-gray-200 rounded-2xl px-2 py-1',
          'flex flex-row items-center'
        )}
        onClick={onClick}
      >
        {icon ? <>{icon} </> : null}
        {text}
      </button>
    )
  }

  function renderBlocks() {
    return currentSteps.map((s, i) => {
      if (s.type == 'task') {
        return <Fragment key={i}>{renderTask(s)}</Fragment>
      }
      if (s.type == 'read') {
        return <Fragment key={i}>{renderRead(s)}</Fragment>
      }
      if (s.type == 'graphpaper') {
        return (
          <Fragment key={i}>
            {renderGraphPaper(
              currentSteps.filter(
                (x) => x.type == 'graphpaperlayer' && x.parent == s.stepId
              ) as GraphPaperLayerStep[],
              step == s.from,
              currentSteps.filter(
                (x) => x.type == 'graphpapercursor' && x.parent == s.stepId
              ) as GraphPaperCursor[],
              s.legacyOffset ?? 0
            )}
          </Fragment>
        )
      }
      if (s.type == 'quiz') {
        return <Fragment key={i}>{renderQuiz(s)}</Fragment>
      }
      if (s.type == 'checkpoint') {
        return <Fragment key={i}>{renderCheckpoint(s)}</Fragment>
      }
      if (s.type == 'done') {
        return <Fragment key={i}>{renderDone(s)}</Fragment>
      }

      return null
    })
  }

  function renderTask(task: TaskStep) {
    return renderWithAnimation(
      <div
        className={clsx('relative overflow-hidden w-full mb-2 mt-6')}
        style={{ paddingBottom: `${task.legacyEnd! - task.legacyStart!}%` }}
      >
        <img
          className="absolute select-none"
          style={{ marginTop: `${-task.legacyStart!}%` }}
          src={task.src}
          draggable={false}
        />
      </div>,
      step == task.from,
      false,
      false
    )
  }

  function renderRead(read: ReadStep) {
    return renderWithAnimation(
      <div
        className={clsx(
          'p-4 w-full md:border border-lime-300 md:mt-6',
          'text-center'
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
                  ? `${read.audioStr}.mp3`
                  : `${read.audioStr}.ogg`
                audio.current.src = src
                audio.current.play()
                setAudioState('playing')
              }
            }}
          >
            <AudioIcon className="inline-block h-4 mb-1" />
            &nbsp;Vorlesen
          </button>
          {renderButton('weiter', nextStepDelayed)}
        </div>
      </div>,
      true,
      true,
      true
    )
  }

  function renderGraphPaper(
    el: GraphPaperLayerStep[],
    fadeIn: boolean,
    cursors: GraphPaperCursor[],
    legacyOffset: number
  ) {
    const height = el.reduce((acc, val) => {
      return Math.max(acc, val.offset + val.height - legacyOffset)
    }, 0)

    return renderWithAnimation(
      <div
        className="relative"
        style={{
          paddingBottom: getHOffset(height + 1),
        }}
        key={step}
      >
        <div className="absolute top-0 inset-0 overflow-hidden">
          <div
            className="h-full bg-repeat-y relative"
            style={{
              backgroundImage: 'url("/background.png")',
              backgroundSize: '100% auto',
            }}
          >
            {el.map((l, i) => (
              <div
                className="absolute top-0 left-0 no-dr"
                style={{
                  marginTop: getHOffset((l.offset ?? 0) - legacyOffset),
                }}
                key={i}
              >
                {renderWithAnimation(
                  <img src={l.src} draggable={false} className="select-none" />,
                  l.from == step,
                  false,
                  false
                )}
              </div>
            ))}
            {cursors.map(
              (c, i) =>
                c.from == step && (
                  <GraphPaperArea x={c.x} y={c.y - legacyOffset} key={i}>
                    <PencilIcon className="absolute inset-0 text-lime-500 animate-wiggle " />
                  </GraphPaperArea>
                )
            )}
            {cursors.map(
              (c, i) =>
                c.from != step &&
                wrongs.includes(c.quizNr) && (
                  <GraphPaperArea x={c.x} y={c.y - legacyOffset} key={i}>
                    <WarningIcon className="text-yellow-500" />
                  </GraphPaperArea>
                )
            )}
          </div>
        </div>
      </div>,
      fadeIn,
      false,
      false
    )
  }

  function renderQuiz(s: QuizStep) {
    return renderWithAnimation(
      <div className="mt-2 w-full md:border border-lime-300">
        <Quiz
          quiz={(s as unknown) as QuizData}
          selected={quizSelected}
          shuffling={shuffling}
          smallHeight
          noBorder
          interactive={!quizSelected.includes(0)}
          onSelect={(index) => {
            if (!quizSelected.includes(index)) {
              setQuizSelected([...quizSelected, index])
            }

            if (index == 0) {
              if (quizSelected.length >= 1 && !wrongs.includes(s.quizNr)) {
                setWrongs([...wrongs, s.quizNr])
              }
              setQuizNr(s.quizNr)
              setStep(step + 1)
              triggerAnimation(true)
            }
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
          {renderButton('weiter', () => {
            setAnimationState(4)
            scrollY.current = window.scrollY
            setTimeout(() => {
              setQuizSelected([])
              setShuffling(shuffleArray([0, 1, 2]))
              nextStep()
              window.scrollTo(0, scrollY.current ?? 0)
            }, 200)
          })}
        </div>
      </div>,
      step == s.from,
      true,
      step == s.from
    )
  }

  function renderWithAnimation(
    children: ReactNode,
    fadeIn: boolean,
    fadeOut: boolean,
    delay: boolean
  ) {
    if (delay && !fadeIn) throw 'Animation combination not supported'

    const visible =
      (animationState == 1 && !fadeIn) ||
      (animationState == 2 && !delay) ||
      animationState == 3 ||
      (animationState == 4 && !fadeOut)

    return (
      <div
        className={clsx(
          animationState == 4 ? 'duration-200' : 'duration-1000',
          visible ? 'opacity-100' : 'opacity-0'
        )}
        key={step}
      >
        {children}
      </div>
    )
  }

  function renderCheckpoint(s: CheckpointStep) {
    if (s.from == step) {
      storeToStorage(step, wrongs, s.quizNr)
    }

    const showContinue = s.from == step
    const showReset = step - 2 >= s.from!
    return (
      <div
        className={clsx(
          'mt-10 mb-8 px-4 py-2 w-full',
          'flex justify-between items-center border-gray-300 md:border'
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
              const newStep = s.from!
              const newWrongs = wrongs.filter((i) => i <= s.quizNr)

              storeToStorage(newStep, newWrongs, s.quizNr)
              setStep(newStep)
              setWrongs(newWrongs)
              setQuizSelected([])
              setTimeout(() => {
                setStep(s.from! + 1)
                triggerAnimation()
              }, 0)
            }
          }}
        >
          {showContinue ? 'weiter' : 'von hier neu starten'}
        </button>
      </div>
    )
  }

  function renderDone(s: DoneStep) {
    if (s.from == step) {
      storeToStorage(step, wrongs, quizNr)
    }

    const correctPercentage =
      step == 0 ? 0 : Math.round((1 - wrongs.length / s.length) * 100)
    const feedback =
      correctPercentage < 75
        ? 'nicht bestanden'
        : correctPercentage < 99
        ? 'bestanden'
        : 'perfekt'
    const summary = `${s.length - wrongs.length} von ${
      s.length
    } Fragen richtig (${correctPercentage}%)${
      correctPercentage < 75 ? ' - bestehe mit mind. 75%' : ''
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

  function nextStepDelayed() {
    setAnimationState(4)
    setTimeout(() => {
      setStep(step + 1)
      triggerAnimation()
    }, 200)
  }
  function nextStep() {
    setStep(step + 1)
    triggerAnimation()
  }

  function triggerAnimation(noScroll?: boolean) {
    if (noScroll !== true) {
      setTimeout(() => {
        scrollToButtom()
      }, 10)
    }
    setAnimationState(1)
    setTimeout(() => {
      setAnimationState(2)
      setTimeout(() => {
        setAnimationState(3)
      }, 1000)
    }, 1)
  }

  function scrollToButtom() {
    window.scrollTo({
      top: 1000000,
      left: 0,
      behavior: 'smooth',
    })
  }

  function storeToStorage(step: number, wrongs: number[], quizNr: number) {
    try {
      const store = localStorage.getItem('matherhino_v2')
      const data = JSON.parse(store ?? '{}')
      data[id] = { step, wrongs, quizNr }
      localStorage.setItem('matherhino_v2', JSON.stringify(data))
    } catch (e) {}
  }
}
