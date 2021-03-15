import { getHOffset } from '../utils/pixelOffsets'
import { GraphPaperArea } from './GraphPaperArea'
import { PencilIcon } from './icons/PencilIcon'
import { WarningIcon } from './icons/WarningIcon'

export interface GraphPaperProps {
  content: {
    offset?: number
    src: string
  }[]
  height: number
  cursor?: { x: number; y: number }
  warnings: { x: number; y: number }[]
}

export default function GraphPaper({
  content,
  height,
  cursor,
  warnings,
}: GraphPaperProps) {
  return (
    <div className="min-w-500 xl:min-w-700">
      <div
        className="relative"
        style={{
          paddingTop: getHOffset(height + 1),
        }}
      >
        <div className="absolute top-0 inset-0 overflow-hidden">
          <div
            className="w-full h-full bg-repeat-y relative"
            style={{
              backgroundImage: 'url("/background.png")',
              backgroundSize: '100% auto',
            }}
          >
            {content.map((c, i) => (
              <div
                className="w-full h-full bg-no-repeat absolute top-0 left-0"
                key={i}
                style={{
                  backgroundImage: `url("${c.src}")`,
                  backgroundSize: '100% auto',
                  marginTop: getHOffset(c.offset ?? 0),
                }}
              />
            ))}
            {warnings.map((warning, index) => (
              <GraphPaperArea {...warning} key={index}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <WarningIcon className="text-yellow-500" />
                </div>
              </GraphPaperArea>
            ))}
            {cursor && (
              <GraphPaperArea {...cursor}>
                <PencilIcon className="absolute inset-0 text-lime-500 animate-wiggle " />
              </GraphPaperArea>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
