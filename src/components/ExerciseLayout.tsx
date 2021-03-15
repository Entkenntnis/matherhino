import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'

export interface ExerciseLayoutProps {
  leftTop: JSX.Element
  leftBottom: JSX.Element
  right: JSX.Element
}

export function ExerciseLayout(props: ExerciseLayoutProps) {
  return (
    <div className="h-screen">
      <ReflexContainer orientation="vertical">
        <ReflexElement minSize={30}>
          <ReflexContainer orientation="horizontal">
            <ReflexElement minSize={30}>{props.leftTop}</ReflexElement>
            <ReflexSplitter />
            <ReflexElement minSize={30}>{props.leftBottom}</ReflexElement>
          </ReflexContainer>
        </ReflexElement>
        <ReflexSplitter style={{ height: 'auto' }} />
        <ReflexElement minSize={30}>{props.right}</ReflexElement>
      </ReflexContainer>
    </div>
  )
}
