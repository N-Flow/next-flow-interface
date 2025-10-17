import {
  NativeAnyEventSubscriber,
  NativeDragEventSubscriber,
  NativeFocusEventSubscriber,
  NativeKeyboardEventSubscriber,
  NativeMouseEventSubscriber,
  NativePointerEventSubscriber,
  NativeUIEventSubscriber,
  NativeWheelEventSubscriber,
} from '@/service/main/native-event/dto/native-event-subscriber.type'

export interface NativeEventSubscribeOption {
  self?: boolean
  once?: boolean
  capture?: boolean
}

export default interface NativeEventServiceApi {
  // Mouse Events
  subscribeClick(
    subscriber: NativeMouseEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeClick(subscriber: NativeMouseEventSubscriber): void

  subscribeContextMenu(
    subscriber: NativeMouseEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeContextMenu(subscriber: NativeMouseEventSubscriber): void

  subscribeDoubleClick(
    subscriber: NativeMouseEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeDoubleClick(subscriber: NativeMouseEventSubscriber): void

  subscribeDrag(
    subscriber: NativeDragEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeDrag(subscriber: NativeDragEventSubscriber): void

  subscribeDrop(
    subscriber: NativeDragEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeDrop(subscriber: NativeDragEventSubscriber): void

  // Wheel Events
  subscribeWheel(
    subscriber: NativeWheelEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeWheel(subscriber: NativeWheelEventSubscriber): void

  // Pointer Events
  subscribePointerDown(
    subscriber: NativePointerEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribePointerDown(subscriber: NativePointerEventSubscriber): void

  subscribePointerMove(
    subscriber: NativePointerEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribePointerMove(subscriber: NativePointerEventSubscriber): void

  subscribePointerUp(
    subscriber: NativePointerEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribePointerUp(subscriber: NativePointerEventSubscriber): void

  subscribePointerCancel(
    subscriber: NativePointerEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribePointerCancel(subscriber: NativePointerEventSubscriber): void

  subscribePointerEnter(
    subscriber: NativePointerEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribePointerEnter(subscriber: NativePointerEventSubscriber): void

  subscribePointerLeave(
    subscriber: NativePointerEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribePointerLeave(subscriber: NativePointerEventSubscriber): void

  // Keyboard Events
  subscribeKeyDown(
    subscriber: NativeKeyboardEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeKeyDown(subscriber: NativeKeyboardEventSubscriber): void

  subscribeKeyUp(
    subscriber: NativeKeyboardEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeKeyUp(subscriber: NativeKeyboardEventSubscriber): void

  subscribeKeyDownExceptInput(
    subscriber: NativeKeyboardEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeKeyDownExceptInput(subscriber: NativeKeyboardEventSubscriber): void

  subscribeKeyUpExceptInput(
    subscriber: NativeKeyboardEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeKeyUpExceptInput(subscriber: NativeKeyboardEventSubscriber): void

  // Focus Events
  subscribeFocus(
    subscriber: NativeFocusEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeFocus(subscriber: NativeFocusEventSubscriber): void

  subscribeBlur(
    subscriber: NativeFocusEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeBlur(subscriber: NativeFocusEventSubscriber): void

  // UI Events
  subscribeScroll(
    subscriber: NativeUIEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeScroll(subscriber: NativeUIEventSubscriber): void

  // Special Events
  subscribeResize(
    subscriber: NativeAnyEventSubscriber,
    option?: NativeEventSubscribeOption,
  ): () => void
  unsubscribeResize(subscriber: NativeAnyEventSubscriber): void
}
