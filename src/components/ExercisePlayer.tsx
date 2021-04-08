import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { ExerciseData, LayerData } from '../data/types'
import { shuffleArray } from '../utils/shuffleArray'
import { GraphPaper } from './GraphPaper'
import Link from 'next/link'
import { Loading } from './Loading'
import { SelectProgress } from './SelectProgress'
import { Tabber } from './Tabber'
import { Task } from './Task'
import { Quiz } from './Quiz'

export interface ExercisePlayerProps {
  exercise: ExerciseData
}

export function ExercisePlayer({ exercise }: ExercisePlayerProps) {
  // state

  const [loading, setLoading] = useState(true)
  const [selectProgress, setSelectProgress] = useState(false)
  const [smallHeight, setSmallHeight] = useState(false)
  const tabberRef = useRef<any>(null)

  const [shufflings] = useState(getShufflings())

  const [audioPlayed, setAudioPlayed] = useState<string[]>([])
  const [quizSelected, setQuizSelected] = useState<{
    [step: number]: number[]
  }>({})
  const [startTime, setStartTime] = useState(0)
  const [timeTaken, setTimeTaken] = useState<{ [step: number]: number }>({})

  // effects

  useEffect(() => {
    setLoading(false)
    // on mount, do whatever you want
    if (localStorage.getItem(key)) {
      setSelectProgress(true)
    } else {
      reset()
    }
    checkHeight()
    const checkHeightListener = () => {
      checkHeight()
      tabberRef.current?.triggerAutoScroll()
    }
    window.addEventListener('resize', checkHeightListener)

    return () => {
      window.removeEventListener('resize', checkHeightListener)
    }
  }, [])

  useEffect(() => {
    if (loading || selectProgress) return
    localStorage.setItem(
      key,
      JSON.stringify({ audioPlayed, quizSelected, timeTaken })
    )
  }, [audioPlayed, quizSelected, timeTaken])

  // work

  const key = generateLocalStorageKey()
  const step = getCurrentStep()
  const hasAudio = exercise.audio.some(
    (audio) => audio.beforeQuiz == step && !audioPlayed.includes(audio.ogg)
  )
  const endReached = exercise.quiz.length == step
  const currentSelected = quizSelected[step] ?? []
  const quizDone = isQuizDone(currentSelected)
  const notifyIndex = getNotifyIndex()
  const wrongs = getWrongSteps()

  if (loading) {
    return <Loading />
  } else {
    if (selectProgress) {
      return renderSelectProgress()
    } else {
      return (
        <>
          <Head>
            <title>{getTitle()}</title>
          </Head>
          {renderTabber()}
        </>
      )
    }
  }

  // helper

  function renderSelectProgress() {
    return (
      <SelectProgress
        onContinue={() => {
          loadFromLocalStorage()
          setSelectProgress(false)
        }}
        onReset={() => {
          localStorage.removeItem(key)
          reset()
          setSelectProgress(false)
        }}
      />
    )
  }

  function renderTabber() {
    return (
      <Tabber
        smallHeight={smallHeight}
        notifyIndex={notifyIndex}
        render={renderTabContent}
        autoScroll0={autoScrollTask}
        autoScroll1={(div) => (div.scrollTop = 0)}
        autoScroll2={autoScrollSolution}
        autoScroller={tabberRef}
      />
    )
  }

  function renderTabContent(index: number) {
    return index == 0
      ? renderTask()
      : index == 1
      ? renderQuiz()
      : renderSolution()
  }

  function renderTask() {
    return (
      <Task
        audioPlayed={audioPlayed}
        audioDone={(file) => {
          if (shouldAddAudio(file)) {
            setAudioPlayed([...audioPlayed, file])
            setStartTime(Date.now())
          }
        }}
        exercise={exercise}
        step={step}
        hiddenFrom={getTaskHiddenPercentage()}
      />
    )
  }

  function renderQuiz() {
    if (endReached) {
      return renderResult()
    }
    if (hasAudio) {
      return renderAudioNotice()
    }
    return (
      <Quiz
        quiz={exercise.quiz[step]}
        selected={currentSelected}
        shuffling={shufflings[step]}
        smallHeight={smallHeight}
        interactive={!quizDone}
        onSelect={(index) => {
          if (!currentSelected.includes(index)) {
            const newSelected = JSON.parse(JSON.stringify(quizSelected))
            if (!newSelected[step]) newSelected[step] = []
            newSelected[step].push(index)
            setQuizSelected(newSelected)
            if (index == 0) {
              const timeDelta = Math.round((Date.now() - startTime) / 1000)
              const newTimeTaken = JSON.parse(JSON.stringify(timeTaken))
              newTimeTaken[step] = timeDelta
              console.log(newTimeTaken)
              setTimeTaken(newTimeTaken)
            }
          }
        }}
      />
    )
  }

  function renderSolution() {
    return (
      <GraphPaper
        height={exercise.height}
        content={getLayers()}
        warnings={wrongs.map((i) => exercise.quiz[i].cursor)}
        cursor={exercise.quiz[step]?.cursor}
        showContinue={!endReached && quizDone}
        onContinue={() => {
          const newSelected = JSON.parse(JSON.stringify(quizSelected))
          newSelected[step + 1] = []
          setQuizSelected(newSelected)
          preloadImages(step + 2)
        }}
        hideCursor={wrongs.includes(step)}
        fadeImgs={
          quizDone
            ? exercise.quiz[step].layersPost?.map((l) => l.src) ?? []
            : []
        }
      />
    )
  }

  function renderResult() {
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
    } Fragen richtig`

    return (
      <div className="mx-auto px-1 max-w-xl md:mt-10">
        <img
          className="mx-auto"
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
        <p className="mt-4 text-center">
          <span
            className="underline text-blue-500 cursor-pointer select-none"
            onClick={() => {
              reset()
            }}
          >
            neu starten
          </span>
        </p>
      </div>
    )
  }

  function renderAudioNotice() {
    return (
      <div className="mt-10">
        <p className="text-center text-gray-700">
          Höre dir zuerst die Aufgabenstellung an.
        </p>
      </div>
    )
  }

  function getBodyHeight() {
    return window.document.body.offsetHeight
  }

  function checkHeight() {
    setSmallHeight(getBodyHeight() < 400)
  }

  function generateLocalStorageKey() {
    return `progress_v2_${exercise.id}`
  }

  function getCurrentStep() {
    for (let i = 0; i <= exercise.quiz.length; i++) {
      if (
        quizSelected[i] &&
        isQuizDone(quizSelected[i]) &&
        quizSelected[i + 1]
      ) {
        continue
      }
      return i
    }
    return 0
  }

  function isQuizDone(arr: number[]) {
    return arr.some((id) => id == 0)
  }

  function reset() {
    setQuizSelected({})
    setTimeTaken({})
    setAudioPlayed([])
    setStartTime(Date.now())
  }

  function getNotifyIndex() {
    if (hasAudio) {
      return 0
    } else {
      if (!quizDone) {
        return 1
      }
      return 2
    }
  }

  function shouldAddAudio(file: string) {
    if (audioPlayed.includes(file)) return false
    const entry = exercise.audio.filter((x) => x.ogg == file)
    if (entry.length < 1) return false
    if (entry[0].beforeQuiz > step) return false
    return true
  }

  function autoScrollTask(div: any) {
    // where to scroll?
    const audio = getAudioToScrollTo()
    if (audio) {
      div.scrollTop =
        div.scrollHeight * (audio.position.top / 100) - getBodyHeight() * 0.3
    }
  }

  function getAudioToScrollTo() {
    const currentAudio = exercise.audio.filter(
      (audio) => audio.beforeQuiz == step && !audioPlayed.includes(audio.ogg)
    )
    if (currentAudio.length > 0) {
      return currentAudio[0]
    } else {
      const allAudio = exercise.audio.filter(
        (audio) => audio.beforeQuiz <= step
      )
      return allAudio[allAudio.length - 1]
    }
  }

  function getTaskHiddenPercentage() {
    const audio = getAudioToScrollTo()
    for (let i = 0; i < exercise.audio.length; i++) {
      if (exercise.audio[i] == audio) {
        if (i + 1 == exercise.audio.length) {
          return 100
        } else {
          return exercise.audio[i + 1].position.top
        }
      }
    }
    return 100
  }

  function loadFromLocalStorage() {
    try {
      const data = localStorage.getItem(key)
      const obj = JSON.parse(data ?? '{}')
      reset()
      setAudioPlayed(obj.audioPlayed)
      setQuizSelected(obj.quizSelected)
      setTimeTaken(obj.timeTaken)
    } catch (e) {}
  }

  function getTitle() {
    if (endReached) return 'Auswertung - MatheNashorn'
    return `Frage ${step + 1} / ${exercise.quiz.length} - MatheNashorn`
  }

  function getShufflings() {
    return exercise.quiz.map((_) => shuffleArray([0, 1, 2]))
  }

  function getLayers() {
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
    return layers
  }

  function getWrongSteps() {
    return Object.keys(quizSelected)
      .map((i) => parseInt(i))
      .filter((i) => isQuizDone(quizSelected[i]) && quizSelected[i].length > 1)
  }

  function preloadImages(step: number) {
    if (step < exercise.quiz.length) {
      const nextStep = exercise.quiz[step]
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
  }

  function autoScrollSolution(div: any) {
    if (!endReached) {
      const offsetY = exercise.quiz[step].cursor.y
      const singleHeight = Math.min(div.scrollWidth, 1182) / 25
      const heightCount = (getBodyHeight() - 32) / singleHeight
      const value = Math.min(heightCount - 4, (heightCount - 4) / 2)
      const newScrollTop = singleHeight * (offsetY - value)
      div.scrollTop = newScrollTop
    }
  }
}
