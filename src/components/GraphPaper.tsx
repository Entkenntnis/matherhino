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
  cursor: { x: number; y: number }
  warnings: { x: number; y: number }[]
  showContinue: boolean
  onContinue: () => void
  hideCursor?: boolean
}

export default function GraphPaper({
  content,
  height,
  cursor,
  warnings,
  showContinue,
  onContinue,
  hideCursor,
}: GraphPaperProps) {
  return (
    <div
      className="mx-auto"
      style={{
        maxWidth: 1182,
      }}
    >
      <div
        className="relative"
        style={{
          paddingTop: getHOffset(height + 1),
        }}
      >
        <div className="absolute top-0 inset-0 overflow-hidden">
          <div
            className="h-full bg-repeat-y relative"
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
            {cursor && !hideCursor && (
              <GraphPaperArea {...cursor}>
                <PencilIcon className="absolute inset-0 text-lime-500 animate-wiggle " />
              </GraphPaperArea>
            )}
            {showContinue && (
              <GraphPaperArea x={0} width={25} y={cursor.y + 1} height={2}>
                <div className="flex justify-center mt-5 md:mt-10 md:text-3xl xl:mt-16 xl:text-4xl">
                  <span
                    className="bg-lime-400 rounded px-2 cursor-pointer select-none"
                    onClick={onContinue}
                  >
                    Weiter
                  </span>
                </div>
              </GraphPaperArea>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
