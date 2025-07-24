import {MouseEvent, DragEvent, TouchEvent, WheelEvent} from 'react'

import MathUtils from './math-utils'

interface TouchEventTarget {
  type?: string
  touches: TouchList
  changedTouches: TouchList
  clientX?: number
  clientY?: number
  preventDefault(): void
  stopPropagation(): void
  stopImmediatePropagation(): void
}

type NativeEvent = MouseEvent | DragEvent | TouchEvent | WheelEvent

export function getEventPosition(
  e: MouseEvent | TouchEvent | TouchEventTarget,
): [x: number, y: number] {
  if (e.type?.includes('touch')) {
    const touchEvent = e as TouchEvent | TouchEventTarget
    if (touchEvent.touches.length) {
      const touch = touchEvent.touches[0]
      const x = touch.clientX,
        y = touch.clientY
      return [x, y]
    }
    const changedTouch = touchEvent.changedTouches[0]
    const x = changedTouch.clientX,
      y = changedTouch.clientY
    return [x, y]
  }
  const mouseEvent = e as MouseEvent
  return [mouseEvent.clientX, mouseEvent.clientY]
}

export function getDistanceBetweenEvents(
  e1: MouseEvent | TouchEvent,
  e2: MouseEvent | TouchEvent,
): number {
  const [x1, y1] = getEventPosition(e1),
    [x2, y2] = getEventPosition(e2)
  return MathUtils.getDistance(x1, y1, x2, y2)
}

export function preventDefaultListener(e: NativeEvent): void {
  e.preventDefault()
}

export function stopPropagationListener(e: NativeEvent): void {
  e.stopPropagation()
}

export function preventDefaultStopPropagationListener(e: NativeEvent): void {
  e.preventDefault()
  e.stopPropagation()
}

// Create a namespace object for backward compatibility
const NativeEventUtils = {
  getEventPosition,
  getDistanceBetweenEvents,
  preventDefaultListener,
  stopPropagationListener,
  preventDefaultStopPropagationListener,
}

export default NativeEventUtils
