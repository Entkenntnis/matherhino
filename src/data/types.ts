export interface ExerciseData {
  id: number
  task: string
  height: number
  quiz: QuizData[]
  audio: {
    mp3: string
    ogg: string
    position: { left: number; top: number }
    size: number
    beforeQuiz: number
  }[]
}

export type QuizData = {
  description: any
  correctChoice: any
  wrong1: any
  wrong2: any
  layersPre?: LayerData[]
  layersPost?: LayerData[]
  cursor: { x: number; y: number }
}

export type LayerData = { src: string; offset?: number }
