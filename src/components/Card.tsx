import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PlayIcon } from './icons/PlayIcon'

export interface CardProps {
  id: number
  title: string
  topics: string
  legacy?: boolean
  length: number
}

export function Card({ id, title, topics, legacy, length }: CardProps) {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState<any>({ quizSelected: {} })
  const [stripes, setStripes] = useState<
    { left: number; width: number; correct: boolean }[] | undefined
  >(undefined)

  useEffect(() => {
    try {
      const data = localStorage.getItem(`progress_v3_${id}`)
      if (data) {
        setData(JSON.parse(data ?? '{}'))
      }
    } catch (e) {}
    setLoaded(true)
  }, [])

  if (data && loaded && !stripes) {
    const wrongsArr = []
    for (let i = 0; i < length; i++) {
      if (data.quizSelected[i]) {
        if (
          data.quizSelected[i].includes(0) &&
          data.quizSelected[i].length > 2
        ) {
          wrongsArr.push(i)
        }
      }
    }
    const stripes: { left: number; width: number; correct: boolean }[] = []
    for (let i = 0; i < getWrongs() + getDones(); i++) {
      if (0 == i) {
        stripes.push({
          left: 0,
          width: 1,
          correct: !wrongsArr.includes(i),
        })
        continue
      }
      const last = stripes[stripes.length - 1]
      const isCorrect = !wrongsArr.includes(i)
      if (last.correct == isCorrect) {
        last.width++
      } else {
        stripes.push({ left: i, width: 1, correct: isCorrect })
      }
    }
    setStripes(stripes)
  }

  return (
    <div className="p-3 bg-gray-100 rounded my-12">
      <div className="flex justify-between">
        <span className="text-3xl font-bold">{title}</span>
        <Link href={`/preview/${id}`} passHref>
          <a className="underline cursor-pointer">Vorschau</a>
        </Link>
      </div>
      <div className="my-4">
        Themen: <span className="text-gray-700">{topics}</span>
      </div>
      {loaded ? (
        <>
          <div className="relative my-3 rounded bg-gray-300 h-3 overflow-hidden">
            {stripes &&
              stripes.map(({ left, width, correct }, i) => (
                <div
                  key={i}
                  className={clsx(
                    'absolute h-full',
                    correct ? 'bg-lime-300' : 'bg-red-400'
                  )}
                  style={{
                    left: `${(left / length) * 100}%`,
                    width: `${(width / length) * 100}%`,
                  }}
                ></div>
              ))}
          </div>
          <div className="text-sm my-3">
            {getDones() == 0 && getWrongs() == 0 ? (
              <>{length} Fragen</>
            ) : (
              <>
                {getDones()} richtig / {getWrongs()} falsch
                {!isDone()
                  ? ' - in Bearbeitung'
                  : Math.round((getDones() / length) * 100) < 75
                  ? ' - erreiche 75% zum Bestehen'
                  : ''}
              </>
            )}{' '}
          </div>
        </>
      ) : (
        <div className="relative my-3 rounded bg-gray-300 h-3 animate-pulse"></div>
      )}
      {loaded && (
        <div className="flex justify-between items-baseline">
          <Link href={`/${legacy ? 'legacy/' : ''}${id}`} passHref>
            <a className="border-blue-500 border-2 px-3 py-1 rounded cursor-pointer text-xl">
              <PlayIcon className="w-4 h-4 inline pb-1" />{' '}
              {isDone() && getDones() < length
                ? 'Erneut versuchen'
                : !data.quizSelected[1] || getDones() == length
                ? 'Start'
                : 'Weiter'}
            </a>
          </Link>
          <span className="text-xl">
            {length !== undefined && (
              <>{Math.round((getDones() / length) * 100)}%</>
            )}
            {getDones() == 0 && getWrongs() == 0
              ? ''
              : !isDone()
              ? ''
              : Math.round((getDones() / length) * 100) < 75
              ? ' - nicht bestanden'
              : getDones() == length
              ? ' - perfekt'
              : ' - bestanden'}
          </span>
        </div>
      )}
    </div>
  )

  function getDones() {
    let c = 0
    for (let i = 0; i < length; i++) {
      if (data.quizSelected[i]) {
        if (
          data.quizSelected[i]?.includes(0) &&
          data.quizSelected[i]?.length == 2
        ) {
          c++
        }
      }
    }
    return c
  }

  function getWrongs() {
    let c = 0
    for (let i = 0; i < length; i++) {
      if (data.quizSelected[i]) {
        if (
          data.quizSelected[i].includes(0) &&
          data.quizSelected[i].length > 2
        ) {
          c++
        }
      }
    }
    return c
  }

  function isDone() {
    let isDone = true
    for (let i = 0; i < length; i++) {
      if (!data.quizSelected[i] || !data.quizSelected[i].includes(9)) {
        isDone = false
      }
    }
    return isDone
  }
}
