export interface ExerciseData {
  id: number
  task: string
  backTo: string
  height: number
  checkpoints: {
    position: { x: number; y: number }
    title: string
    audioIndex: number
    span?: number
  }[]
  quiz: QuizData[]
  audio: AudioData[]
}

export type QuizData = {
  description: any
  correctChoice: any
  wrong1: any
  wrong2: any
  layersPre?: LayerData[]
  layersPost?: LayerData[]
  cursor: { x: number; y: number }
  quickviews?: { type: 'task' | 'solution'; start: number; end: number }[]
}

export type AudioData = {
  mp3: string
  ogg: string
  position: { left: number; top: number }
  size: number
  beforeQuiz: number
}

export type LayerData = { src: string; offset?: number }
