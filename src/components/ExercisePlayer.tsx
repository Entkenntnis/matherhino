import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ExerciseData, LayerData } from '../data/types'
import { percentToGrade } from '../utils/percentToGrade'
import { shuffleArray } from '../utils/shuffleArray'
import GraphPaper from './GraphPaper'
import Link from 'next/link'
import { AudioIcon } from './icons/AudioIcon'
import { useSwipeable } from 'react-swipeable'

export interface ExercisePlayerProps {
  exercise: ExerciseData
}

export function ExercisePlayer({ exercise }: ExercisePlayerProps) {
  const [tabIndex, setTabIndex] = useState(0)
  const [quizChoices, setQuizChoices] = useState<any[]>([])
  const [quizSelected, setQuizSelected] = useState<number[]>([])
  const [step, setStep] = useState(0)
  const [wrongs, setWrongs] = useState<number[]>([])
  const [tab2Fog, setTab2Fog] = useState(false)
  const [showStartup, setShowStartup] = useState(false)
  const [audioId, setAudioId] = useState(-1)
  const [playedAudio, setPlayedAudio] = useState<number[]>([])

  const scrollDivRef = useRef<HTMLDivElement | null>(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (tabIndex < 2) {
        setTabIndex(tabIndex + 1)
        onTabChange(tabIndex + 1)
      }
    },
    onSwipedRight: () => {
      if (tabIndex > 0) {
        setTabIndex(tabIndex - 1)
        onTabChange(tabIndex - 1)
      }
    },
    delta: 30,
    trackMouse: true,
  })

  const refPassthrough = (el: HTMLDivElement) => {
    // call useSwipeable ref prop with el
    handlers.ref(el)

    // set myRef el so you can access it yourself
    scrollDivRef.current = el
  }

  const storageKey = `progress_v1_${exercise.id}`

  const endReached = step == exercise.quiz.length
  const quizDone =
    !endReached &&
    quizChoices.some(
      (choice) => quizSelected.includes(choice.id) && choice.correct
    )

  const audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (tabIndex == 2 && !endReached) {
      scrollTab2ToCursor(step)
    }
    setTab2Fog(false)
  }, [tabIndex])

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) ?? '{}')
      if (data.step && Array.isArray(data.wrongs)) {
        // valid data
        setShowStartup(true)
      }
    } catch (e) {}
  }, [])

  useEffect(() => {
    if (step > 0) {
      localStorage.setItem(storageKey, JSON.stringify({ step, wrongs }))
    }
  }, [step, wrongs])

  useEffect(() => {
    if (!endReached) {
      setQuizChoices(
        shuffleArray([
          { correct: true, id: 0, value: exercise.quiz[step].correctChoice },
          { correct: false, id: 1, value: exercise.quiz[step].wrong1 },
          { correct: false, id: 2, value: exercise.quiz[step].wrong2 },
        ])
      )
    }
  }, [step])

  const notifyIndex = endReached
    ? 1
    : quizDone
    ? 2
    : exercise.audio?.some(
        (audio, i) => audio.beforeQuiz == step && !playedAudio.includes(i)
      )
    ? 0
    : 1

  const layers: LayerData[] = []
  for (let i = 0; i <= step; i++) {
    if (i >= exercise.quiz.length) continue
    const quizData = exercise.quiz[i]
    if (quizData.layersPre) {
      for (const layer of quizData.layersPre) {
        layers.push(layer)
      }
    }
    if ((i < step || quizDone) && quizData.layersPost) {
      for (const layer of quizData.layersPost) {
        layers.push(layer)
      }
    }
  }

  if (showStartup) {
    return (
      <>
        <Head>
          <title>Laden</title>
        </Head>
        <div className="h-full flex flex-col justify-center">
          <div className="mx-auto flex flex-col align-middle  ">
            <button
              className="p-3 bg-lime-500 select-none rounded"
              onClick={() => {
                setShowStartup(false)
                const data = JSON.parse(
                  localStorage.getItem(storageKey) ?? '{}'
                )
                setStep(data.step)
                setWrongs(data.wrongs)
                setTabIndex(1)
                setPlayedAudio([])
              }}
            >
              Übung mit vorhandenen Fortschritt fortsetzen
            </button>
            <br />
            <button
              className="mt-4 text-blue-500 cursor-pointer underline"
              onClick={() => {
                localStorage.removeItem(storageKey)
                setShowStartup(false)
              }}
            >
              Übung neu starten
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>
          {endReached
            ? 'Fertig'
            : `Frage ${step + 1} / ${exercise.quiz.length}`}
        </title>
      </Head>
      <audio
        ref={audio}
        onEnded={() => {
          setAudioId(-1)
        }}
      />
      <Tabs
        className="h-full"
        selectedIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index)
          onTabChange(index)
        }}
      >
        <TabList className="flex justify-around p-1 pb-0.5 bg-gray-100 border-b-2">
          {renderTab('Aufgabe', 0)}
          {renderTab('Quiz', 1)}
          {renderTab('Lösung', 2)}
        </TabList>

        <div
          style={{ height: `calc(100% - 32px)` }}
          className="overflow-auto"
          {...handlers}
          ref={refPassthrough}
        >
          <TabPanel>
            <div className="max-w-full my-6 flex flex-initial justify-center">
              <div className="relative">
                <img className="" src={exercise.task} draggable={false}></img>
                {exercise.audio &&
                  exercise.audio.map((data, index) => (
                    <div
                      className={`absolute ${
                        data.beforeQuiz == step && !playedAudio.includes(index)
                          ? 'text-lime-400'
                          : 'text-gray-600'
                      } cursor-pointer ${
                        index == audioId ? 'animate-pulse' : ''
                      }`}
                      key={index}
                      style={{
                        left: `${data.position.left}%`,
                        top: `${data.position.top}%`,
                        height: `${data.size}%`,
                        width: `${data.size}%`,
                      }}
                    >
                      <div
                        onClick={() => {
                          if (audio.current) {
                            if (!audio.current.paused && audioId == index) {
                              audio.current.pause()
                              setAudioId(-1)
                              return
                            }
                            const src = audio.current.canPlayType('audio/mpeg')
                              ? data.mp3
                              : data.ogg
                            audio.current.src = src
                            audio.current.play()
                            setAudioId(index)
                            if (!playedAudio.includes(index)) {
                              setPlayedAudio([...playedAudio, index])
                            }
                          }
                        }}
                      >
                        <AudioIcon className="" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {endReached ? (
              renderEnd()
            ) : (
              <div className="max-w-xl mx-auto">
                <p
                  className="mt-6 mx-2 md:mt-10 xl:mt-24"
                  dangerouslySetInnerHTML={{
                    __html: exercise.quiz[step].description,
                  }}
                ></p>
                <div className="flex flex-wrap mt-4 p-2">
                  {quizChoices.map((choice: any) => (
                    <div
                      key={choice.id}
                      onClick={() => {
                        if (!quizSelected.includes(choice.id) && !quizDone) {
                          const newSelected = [...quizSelected, choice.id]
                          setQuizSelected(newSelected)
                        }
                        if (
                          !quizDone &&
                          !choice.correct &&
                          !wrongs.includes(step)
                        ) {
                          setWrongs([...wrongs, step])
                        }
                      }}
                      className={`px-4 py-2 rounded bg-gray-100 mr-4 mb-4 select-none ${
                        quizSelected.includes(choice.id)
                          ? choice.correct
                            ? 'bg-lime-500'
                            : 'line-through text-gray-500 bg-yellow-500'
                          : quizDone
                          ? ''
                          : 'cursor-pointer'
                      }`}
                      dangerouslySetInnerHTML={{ __html: choice.value }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            <div className={tab2Fog ? 'opacity-0' : ''}>
              <GraphPaper
                height={exercise.height}
                content={layers}
                warnings={wrongs.map((w) => exercise.quiz[w].cursor)}
                cursor={exercise.quiz[step]?.cursor}
                showContinue={!endReached && quizDone}
                onContinue={() => {
                  setQuizSelected([])
                  setStep(step + 1)
                  scrollTab2ToCursor(step + 1)
                  // preload images
                  if (step + 2 < exercise.quiz.length) {
                    const nextStep = exercise.quiz[step + 2]
                    if (nextStep.layersPre) {
                      for (const layer of nextStep.layersPre) {
                        new Image().src = layer.src
                      }
                    }
                    if (nextStep.layersPost) {
                      for (const layer of nextStep.layersPost) {
                        new Image().src = layer.src
                      }
                    }
                  }
                }}
                hideCursor={wrongs.includes(step)}
              />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  )

  function renderTab(title: string, index: number) {
    return (
      <Tab className="relative">
        <span
          className={`cursor-pointer select-none ${
            tabIndex == index ? 'font-bold' : ''
          } relative z-50`}
        >
          {title}
        </span>
        {notifyIndex == index && (
          <span className="flex h-2 w-2 absolute top-0.5 -right-1 z-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
        )}
      </Tab>
    )
  }

  function scrollTab2ToCursor(step: number) {
    if (scrollDivRef.current && step < exercise.quiz.length) {
      const offsetY = exercise.quiz[step].cursor.y
      const singleHeight = Math.min(scrollDivRef.current.scrollWidth, 1182) / 25
      const heightCount =
        (window.document.body.offsetHeight - 32) / singleHeight
      const value = Math.min(heightCount - 4, 10)
      const newScrollTop = singleHeight * (offsetY - value)
      scrollDivRef.current.scrollTop = newScrollTop
    }
  }

  function onTabChange(newIndex: number) {
    if (newIndex == 2) {
      if (tabIndex != 2) {
        setTab2Fog(true)
      } else {
        scrollTab2ToCursor(step)
      }
    }
    if (tabIndex == 0 && newIndex != 0 && audioId >= 0) {
      if (audio.current && !audio.current.paused) {
        audio.current.pause()
        setAudioId(-1)
      }
    }
  }

  function renderEnd() {
    const correctPercentage =
      step == 0
        ? 0
        : Math.round((1 - wrongs.length / exercise.quiz.length) * 100)
    const grade = percentToGrade(correctPercentage)
    const text = `${exercise.quiz.length - wrongs.length} von ${
      exercise.quiz.length
    } Fragen richtig (${correctPercentage}% = Note ${grade})`

    return (
      <div className="mx-auto px-1 max-w-xl md:mt-10">
        <img
          className="mx-auto"
          src={
            grade >= 5
              ? '/finish_sad.png'
              : grade >= 2
              ? '/finish.png'
              : '/finish_1.png'
          }
        />
        <p className="mt-4 text-center">{text}</p>
        <p className="mt-4 text-center">
          <Link href="/" passHref>
            <a className="underline text-blue-500 cursor-pointer select-none">
              zurück zur Startseite
            </a>
          </Link>{' '}
          |{' '}
          <span
            className="underline text-blue-500 cursor-pointer select-none"
            onClick={() => {
              setStep(0)
              setWrongs([])
              setQuizSelected([])
              setQuizChoices([])
              setAudioId(-1)
              setPlayedAudio([])
              setTabIndex(0)
            }}
          >
            neu starten
          </span>
        </p>
      </div>
    )
  }
}
