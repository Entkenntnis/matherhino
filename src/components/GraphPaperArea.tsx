import { getHOffset, getVOffset } from '../utils/pixelOffsets'
import { GraphPaperProps } from './GraphPaper'

export interface GraphPaperAreaProps {
  x: number
  y: number
  height?: number
  width?: number
  children: JSX.Element
}

export function GraphPaperArea(props: GraphPaperAreaProps) {
  const h = props.height ?? 1
  const w = props.width ?? 1
  return (
    <div
      className="absolute left-0 top-0 w-full"
      style={{
        marginTop: getHOffset(props.y + 0.5),
      }}
    >
      <div
        className="w-full relative"
        style={{
          paddingTop: getHOffset(h),
        }}
      >
        <div
          className="absolute inset-y-0"
          style={{
            left: getVOffset(props.x),
            width: getVOffset(w),
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}
