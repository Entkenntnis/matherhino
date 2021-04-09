import Link from 'next/link'
import { join } from 'path'
import { title } from 'process'
import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { PlayIcon } from './icons/PlayIcon'

export interface CardProps {
  id: number
  title: string
  topics: string
  count: number
}

export function Card({ id, title, topics, count }: CardProps) {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState<any>({ quizSelected: {} })

  useEffect(() => {
    try {
      const data = localStorage.getItem(`progress_v2_${id}`)
      if (data) {
        setData(JSON.parse(data ?? '{}'))
      }
    } catch (e) {}
    setLoaded(true)
  }, [])

  return (
    <div className="p-3 bg-gray-100 rounded my-12 max-w-lg">
      <div className="flex justify-between">
        <span className="text-3xl">{title}</span>
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
            <div
              className="absolute left-0 h-full bg-lime-300 "
              style={{ width: `${(getDones() / count) * 100}%` }}
            ></div>
            <div
              className="absolute h-full bg-red-400"
              style={{
                left: `${(getDones() / count) * 100}%`,
                width: `${(getWrongs() / count) * 100}%`,
              }}
            ></div>
          </div>
          <div className="text-sm my-3">
            {getDones() == 0 && getWrongs() == 0 ? (
              <>{count} Fragen</>
            ) : (
              <>
                {getDones()} richtig / {getWrongs()} falsch
                {!data.quizSelected[count] ? ' - in Bearbeitung' : ''}
              </>
            )}{' '}
          </div>
        </>
      ) : (
        <div className="relative my-3 rounded bg-gray-300 h-3 animate-pulse"></div>
      )}
      {loaded && (
        <div className="flex justify-between items-baseline">
          <Link href={`/${id}`} passHref>
            <a className="border-blue-500 border-2 px-3 py-1 rounded cursor-pointer text-xl">
              <PlayIcon className="w-4 h-4 inline pb-1" />{' '}
              {data.quizSelected[count] && getDones() < count
                ? 'Erneut versuchen'
                : !data.quizSelected[1] || getDones() == count
                ? 'Start'
                : 'Weiter'}
            </a>
          </Link>
          <span className="text-xl">
            {Math.round((getDones() / count) * 100)}%
            {getDones() == 0 && getWrongs() == 0
              ? ''
              : !data.quizSelected[count]
              ? ''
              : Math.round((getDones() / count) * 100) < 75
              ? ' - nicht bestanden'
              : getDones() == count
              ? ' - perfekt'
              : ' - bestanden'}
          </span>
        </div>
      )}
    </div>
  )

  function getDones() {
    let c = 0
    for (let i = 0; i < count; i++) {
      if (data.quizSelected[i]) {
        if (
          data.quizSelected[i]?.includes(0) &&
          data.quizSelected[i]?.length == 1
        ) {
          c++
        }
      }
    }
    return c
  }

  function getWrongs() {
    let c = 0
    for (let i = 0; i < count; i++) {
      if (data.quizSelected[i]) {
        if (
          data.quizSelected[i].includes(0) &&
          data.quizSelected[i].length > 1
        ) {
          c++
        }
      }
    }
    return c
  }
}
