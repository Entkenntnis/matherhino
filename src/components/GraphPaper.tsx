export interface GraphPaperProps {
  content: {
    offset?: number
    src: string
  }[]
  height: number
}

export default function GraphPaper({ content, height }: GraphPaperProps) {
  return (
    <div style={{ minWidth: 700 }}>
      <div
        className="relative"
        style={{
          paddingTop: `${(height + 1) * (47 / 1654) * 100}%`,
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
            {content.map((c, i) => {
              const marginTop = `${(c.offset ?? 0) * (47 / 1654) * 100}%`
              return (
                <div
                  className="w-full h-full bg-no-repeat absolute top-0 left-0"
                  key={i}
                  style={{
                    backgroundImage: `url("${c.src}")`,
                    backgroundSize: '100% auto',
                    marginTop,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
