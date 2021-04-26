import { useEffect, useRef, useState } from 'react'
import { ChevronLeft } from './icons/ChevronLeftIcon'

export interface TabberProps {
  render: (index: number) => JSX.Element
  smallHeight: boolean
  notifyIndex: number
  autoScroll0: (x: any) => void
  autoScroll1: (x: any) => void
  autoScroll2: (x: any) => void
  autoScroller: { current: any }
  onBack: () => void
  isDone?: boolean
}

export function Tabber({
  render,
  smallHeight,
  notifyIndex,
  autoScroll0,
  autoScroll1,
  autoScroll2,
  autoScroller,
  isDone,
  onBack,
}: TabberProps) {
  const [tabIndex, setTabIndex] = useState(notifyIndex)
  const [autoScrollPending, setAutoScrollPending] = useState(notifyIndex)
  const scrollDivRef = useRef<HTMLDivElement | null>(null)

  autoScroller.current = {
    setAutoScroll: (index: number) => {
      setAutoScrollPending(index)
    },
    triggerAutoScroll: () => {
      autoScroll()
    },
  }

  useEffect(() => {
    autoScroll()
    setAutoScrollPending(-1)
  }, [autoScrollPending])

  return (
    <>
      <ul
        className={`flex justify-evenly p-1 pb-0.5 bg-gray-100 border-b-2 relative ${
          smallHeight ? '' : 'h-12 items-center'
        }`}
      >
        <div
          className="absolute w-4 h-4 sm:w-6 sm:h-6 left-1 cursor-pointer text-gray-300"
          onClick={onBack}
        >
          <ChevronLeft className="w-full h-full " />
        </div>
        {renderTab('Aufgabe', 0)}
        {renderTab(isDone ? 'Auswertung' : 'Quiz', 1)}
        {renderTab('Lösung', 2)}
      </ul>
      <div
        style={{
          height: `calc(100% - ${smallHeight ? '32px' : '48px'})`,
        }}
        className={`overflow-auto ${autoScrollPending >= 0 ? 'invisible' : ''}`}
        ref={scrollDivRef}
      >
        {render(tabIndex)}
      </div>
    </>
  )

  function renderTab(title: string, index: number) {
    return (
      <li
        className={`relative ${smallHeight ? '' : 'p-3'} cursor-pointer `}
        onClick={() => {
          changeTag(index)
        }}
      >
        <span
          className={`select-none ${
            tabIndex == index ? 'font-bold' : ''
          } relative z-50 `}
        >
          {title}
        </span>
        {notifyIndex == index && (
          <span
            className={`flex h-2 w-2 absolute ${
              smallHeight ? 'top-0.5 -right-1' : 'top-3.5 right-2'
            } z-0`}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
        )}
      </li>
    )
  }

  function changeTag(index: number) {
    if (tabIndex != 0 && index == 0) {
      setAutoScrollPending(0)
    }
    if (tabIndex != 1 && index == 1) {
      setAutoScrollPending(1)
    }
    if (tabIndex != 2 && index == 2) {
      setAutoScrollPending(2)
    }
    setTabIndex(index)
  }

  function autoScroll() {
    if (scrollDivRef.current) {
      if (tabIndex == 0) {
        autoScroll0(scrollDivRef.current)
      }
      if (tabIndex == 1) {
        autoScroll1(scrollDivRef.current)
      }
      if (tabIndex == 2) {
        autoScroll2(scrollDivRef.current)
      }
    }
  }
}
