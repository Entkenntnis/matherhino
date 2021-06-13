import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PlayIcon } from './icons/PlayIcon'

export interface CardProps {
  id: number
  title: string
  topics: string
  length: number
}

export function CardV2({ id, title, topics, length }: CardProps) {
  const [loaded, setLoaded] = useState(false)
  const [wrongs, setWrongs] = useState(0)
  const [dones, setDones] = useState(0)

  const [wrongsArr, setWrongsArr] = useState<number[]>([])

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(`matherhino_v2`) ?? '{}')
      if (data && data[id]) {
        setWrongs(data[id].wrongs.length)
        setWrongsArr(data[id].wrongs)
        setDones(data[id].quizNr + 1)
      }
    } catch (e) {}
    setLoaded(true)
  }, [])

  const stripes: { left: number; width: number; correct: boolean }[] = []
  for (let i = 0; i < dones; i++) {
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
            {stripes.map(({ left, width, correct }, i) => (
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
            {dones == 0 && wrongs == 0 ? (
              <>{length} Fragen</>
            ) : (
              <>
                {dones - wrongs} richtig / {wrongs} falsch
                {dones < length
                  ? ' - in Bearbeitung'
                  : Math.round(((dones - wrongs) / length) * 100) < 75
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
          <Link href={`/${id}`} passHref>
            <a className="border-blue-500 border-2 px-3 py-1 rounded cursor-pointer text-xl">
              <PlayIcon className="w-4 h-4 inline pb-1" />{' '}
              {dones == length ? 'Öffnen' : dones == 0 ? 'Start' : 'Weiter'}
            </a>
          </Link>
          <span className="text-xl">
            {length !== undefined && (
              <>{Math.round(((dones - wrongs) / length) * 100)}%</>
            )}
            {dones < length
              ? ''
              : Math.round(((dones - wrongs) / length) * 100) < 75
              ? ' - nicht bestanden'
              : wrongs == 0
              ? ' - perfekt'
              : ' - bestanden'}
          </span>
        </div>
      )}
    </div>
  )
}
