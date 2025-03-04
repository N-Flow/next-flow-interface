import {
  NativeMouseEventSubscriber,
  NativeWheelEventSubscriber,
  NativePointerEventSubscriber,
  NativeKeyboardEventSubscriber,
  NativeFocusEventSubscriber,
  NativeDragEventSubscriber,
  NativeUIEventSubscriber, NativeAnyEventSubscriber,
} from "@/api/service/main/native-event/dto/native-event-subscriber.type"

export default interface NativeEventServiceApi {

  // Mouse Events
  subscribeClick(subscriber: NativeMouseEventSubscriber): () => void
  unsubscribeClick(subscriber: NativeMouseEventSubscriber): void

  subscriberContextMenu(subscriber: NativeMouseEventSubscriber): () => void
  unsubscribeContextMenu(subscriber: NativeMouseEventSubscriber): void

  subscribeDoubleClick(subscriber: NativeMouseEventSubscriber): () => void
  unsubscribeDoubleClick(subscriber: NativeMouseEventSubscriber): void


  subscribeDrag(subscriber: NativeDragEventSubscriber): () => void
  unsubscribeDrag(subscriber: NativeDragEventSubscriber): void

  subscribeDrop(subscriber: NativeDragEventSubscriber): () => void
  unsubscribeDrop(subscriber: NativeDragEventSubscriber): void


  // Wheel Events
  subscribeWheel(subscriber: NativeWheelEventSubscriber): () => void
  unsubscribeWheel(subscriber: NativeWheelEventSubscriber): void


  // Pointer Events
  subscribePointerDown(subscriber: NativePointerEventSubscriber): () => void
  unsubscribePointerDown(subscriber: NativePointerEventSubscriber): void

  subscribePointerMove(subscriber: NativePointerEventSubscriber): () => void
  unsubscribePointerMove(subscriber: NativePointerEventSubscriber): void

  subscribePointerUp(subscriber: NativePointerEventSubscriber): () => void
  unsubscribePointerUp(subscriber: NativePointerEventSubscriber): void

  subscribePointerCancel(subscriber: NativePointerEventSubscriber): () => void
  unsubscribePointerCancel(subscriber: NativePointerEventSubscriber): void

  subscribePointerEnter(subscriber: NativePointerEventSubscriber): () => void
  unsubscribePointerEnter(subscriber: NativePointerEventSubscriber): void

  subscribePointerLeave(subscriber: NativePointerEventSubscriber): () => void
  unsubscribePointerLeave(subscriber: NativePointerEventSubscriber): void


  // Keyboard Events
  subscribeKeyDown(subscriber: NativeKeyboardEventSubscriber): () => void
  unsubscribeKeyDown(subscriber: NativeKeyboardEventSubscriber): void

  subscribeKeyUp(subscriber: NativeKeyboardEventSubscriber): () => void
  unsubscribeKeyUp(subscriber: NativeKeyboardEventSubscriber): void

  subscribeKeyDownExceptInput(subscriber: NativeKeyboardEventSubscriber): () => void
  unsubscribeKeyDownExceptInput(subscriber: NativeKeyboardEventSubscriber): void

  subscribeKeyUpExceptInput(subscriber: NativeKeyboardEventSubscriber): () => void
  unsubscribeKeyUp(subscriber: NativeKeyboardEventSubscriber): void


  // Focus Events
  subscribeFocus(subscriber: NativeFocusEventSubscriber): () => void
  unsubscribeFocus(subscriber: NativeFocusEventSubscriber): void

  subscribeBlur(subscriber: NativeFocusEventSubscriber): () => void
  unsubscribeBlur(subscriber: NativeFocusEventSubscriber): void


  // UI Events
  subscribeScroll(subscriber: NativeUIEventSubscriber): () => void
  unsubscribeScroll(subscriber: NativeUIEventSubscriber): void


  // Special Events
  subscribeResize(subscriber: NativeAnyEventSubscriber): () => void
  unsubscribeResize(subscriber: NativeAnyEventSubscriber): void

}
