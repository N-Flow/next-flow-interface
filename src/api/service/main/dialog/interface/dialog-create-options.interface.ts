import {FunctionComponent} from "react";

export default interface DialogCreateOptions {
  id?: string,  // 对话框的唯一id
  title?: string,  // 标题
  content?: string,  // 内容
  contentView?: FunctionComponent,  // 中间视图
  icon?: FunctionComponent,  // 图标
  view?: FunctionComponent,  // 视图 全屏于整个对话框
  className?: string,  // 对话框框体 类名
  style?: object,  // 对话框框体 样式
  confirmText?: string,  // 确认按钮文字 为空字符串时不显示
  cancelText?: string,  // 取消按钮文字 为空字符串时不显示
  enableCloseButton?: boolean,  // 显示右上角关闭按钮
  enableInput?: boolean,  // 显示输入框
  defaultValue?: string,  // 输入框 默认值
  inputPlaceholder?: string,  // 输入框 提示词
  autoFocus?: boolean,  // 输入框 自动聚焦
  allowEmpty?: boolean,  // 允许输入框为空时 点击确认
  onChange?: (value: string) => void,  // 输入框变化回调
  onCheck?: (value: string) => boolean,  // 点击确认前的检查回调
  onConfirm?: (value: string) => void,  // 点击确认回调
  onCancel?: () => void,  // 点击取消回调
  onClose?: () => void,  // 任何情况的关闭回调
  onConfirmButtonClick?: () => void,  // 点击确认按钮回调
  onCancelButtonClick?: () => void,  // 点击取消按钮回调
  onOutsideClick?: () => void,  // 点击外部回调
  onCloseButtonClick?: () => void,  // 点击右上角关闭按钮回调
  closeOnConfirm?: boolean,  // 点击确认后关闭 默认为 true
  closeOnCancel?: boolean,  // 点击取消后关闭 默认为 true
  closeOnOutside?: boolean,  // 点击外部后关闭 默认为 false
  closeOnCloseButtonClick?: boolean,  // 点击右上角关闭按钮后关闭 默认为 true
}
