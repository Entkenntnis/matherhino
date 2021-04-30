import { useEffect, useRef, useState } from 'react'
import { ExerciseData } from '../data/types'
import { AudioIcon } from './icons/AudioIcon'
import { RedoIcon } from './icons/RedoIcon'

export interface TaskProps {
  exercise: ExerciseData
  audioPlayed: string[]
  audioDone: (file: string) => void
  step: number
  hiddenFrom: number
}

export function Task({
  exercise,
  audioPlayed,
  audioDone,
  step,
  hiddenFrom,
}: TaskProps) {
  const [audioId, setAudioId] = useState('')
  const audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    return () => {
      if (audio.current) {
        audio.current.pause()
      }
    }
  }, [])

  return (
    <div className="max-w-2xl mt-6 mb-20 mx-auto flex flex-initial justify-center">
      <audio
        className="hidden"
        ref={audio}
        onEnded={() => {
          if (audioId) {
            audioDone(audioId)
          }
          setAudioId('')
        }}
      />
      <div className="relative">
        <img className="" src={exercise.task} draggable={false}></img>
        {exercise.audio.map((data, index) => (
          <div
            className={`absolute ${
              data.beforeQuiz == step && !audioPlayed.includes(data.ogg)
                ? 'text-lime-400'
                : 'text-gray-600'
            } cursor-pointer ${data.ogg == audioId ? 'animate-pulse' : ''}`}
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
                  if (!audio.current.paused && audioId == data.ogg) {
                    audio.current.pause()
                    if (audioId) {
                      audioDone(audioId)
                    }
                    setAudioId('')
                    return
                  }
                  const src = audio.current.canPlayType('audio/mpeg')
                    ? data.mp3
                    : data.ogg
                  audio.current.src = src
                  audio.current.play()
                  setAudioId(data.ogg)
                }
              }}
            >
              <AudioIcon className="" />
            </div>
          </div>
        ))}
        <div
          className="absolute bg-white opacity-80"
          style={{
            top: `${hiddenFrom}%`,
            left: 0,
            height: `${100 - hiddenFrom}%`,
            width: '100%',
          }}
        ></div>
      </div>
    </div>
  )
}
