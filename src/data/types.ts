export interface ExerciseData {
  id: number
  task: string
  height: number
  steps: {
    prompt: PromptData
    layersPre?: LayerData[]
    layersPost?: LayerData[]
    cursor: { x: number; y: number }
  }[]
}

export interface AudioPromptData {
  type: 'audio'
  title: string
  src: string
}

export interface QuizPromptData {
  type: 'quiz'
  description: any
  correctChoice: any
  wrong1: any
  wrong2: any
}

export type PromptData = AudioPromptData | QuizPromptData

export type LayerData = { src: string; offset?: number }
