export interface GraphPaperProps {
  content: {
    offset?: number
    src: string
  }[]
  height: number
  focus?: { x: number; y: number }
  warnings: { x: number; y: number }[]
}

export default function GraphPaper({
  content,
  height,
  focus,
  warnings,
}: GraphPaperProps) {
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
            {warnings.map((warning, index) => (
              <OneSquare {...warning} key={index}>
                <div className="absolute inset-0 flex items-center align-middle">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="text-yellow-500"
                  >
                    <path
                      fill="currentColor"
                      d="M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z"
                    ></path>
                  </svg>
                </div>
              </OneSquare>
            ))}
            {focus && (
              <OneSquare {...focus}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute inset-0 text-lime-500 animate-wiggle "
                >
                  <path
                    fill="currentColor"
                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                  ></path>
                </svg>
              </OneSquare>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function OneSquare(props: { x: number; y: number; children: any }) {
  return (
    <div
      className="absolute left-0 top-0 w-full"
      style={{
        marginTop: `${(props.y + 0.5) * (47 / 1654) * 100}%`,
      }}
    >
      <div
        className="w-full relative"
        style={{
          paddingTop: `${1 * (47 / 1654) * 100}%`,
        }}
      >
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: `${props.x * (47.3 / 1654) * 100}%`,
            width: `${(47 / 1654) * 100}%`,
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}
