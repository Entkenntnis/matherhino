export interface ExerciseData {
  id: number
  task: string
  width?: number
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
  autoShowViews?: boolean
}

export type AudioData = {
  mp3: string
  ogg: string
  position: { left: number; top: number }
  size: number
  beforeQuiz: number
}

export type LayerData = { src: string; offset?: number }

export interface PlayerProps {
  id: number
  steps: Step[]
  pdf: string
  backTo: string
}

export interface StepBase {
  stepId?: string
  from?: number
  to?: number
}

export interface ProgressStep extends StepBase {
  type: 'progress'
  text: string
}

export interface PreloadStep extends StepBase {
  type: 'preload'
  src: string
}

export interface StoreStep extends StepBase {
  type: 'store'
}

export interface TaskStep extends StepBase {
  type: 'task'
  src: string
  legacyStart?: number
  legacyEnd?: number
}

export interface ReadStep extends StepBase {
  type: 'read'
  audioStr: string
  customText?: string
}

export interface GraphPaperStep extends StepBase {
  type: 'graphpaper'
  legacyOffset?: number
}

export interface GraphPaperLayerStep extends StepBase {
  type: 'graphpaperlayer'
  parent: string
  offset: number
  height: number
  src: string
}

export interface GraphPaperCursor extends StepBase {
  type: 'graphpapercursor'
  parent: string
  x: number
  y: number
  quizNr: number
}

export interface QuizStep extends StepBase {
  type: 'quiz'
  description: any
  correctChoice: any
  wrong1: any
  wrong2: any
  quizNr: number
}

export interface CheckpointStep extends StepBase {
  type: 'checkpoint'
  quizNr: number
}

export interface DoneStep extends StepBase {
  type: 'done'
  length: number
}

export type Step =
  | ProgressStep
  | PreloadStep
  | StoreStep
  | TaskStep
  | ReadStep
  | GraphPaperStep
  | GraphPaperLayerStep
  | GraphPaperCursor
  | CheckpointStep
  | QuizStep
  | DoneStep
