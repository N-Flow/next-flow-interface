import {FunctionComponent} from "react"
import DialogCreateOptions from "@/api/service/main/dialog/dto/dialog-create-options.interface"
import DialogController from "@/api/service/main/dialog/dto/dialog-controller.interface"
import Dialog from "@/api/service/main/dialog/dialog.class"
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum"
import {ThemeBackground} from "@/api/service/main/theme/dto/theme-background.enum"

export default interface DialogServiceApi {

  /**
   * 当前所有对话框
   */
  dialogs: Dialog[]

  /**
   * 创建对话框 最全面的对话框创建方法
   *
   * @param options 创建对话框的选项对象 具体选项见 DialogCreateOptions
   *
   * @returns 返回所创建的对话框的控制器
   */
  create(options: DialogCreateOptions): DialogController

  /**
   * 弹出提示信息或询问是或否的对话框
   *
   * @param options 创建对话框的选项对象 具体选项如下
   *
   * @returns 关闭后返回用户是否点击了确认按钮
   */
  confirm(options: {
    title: string,
    titleIcon: FunctionComponent,
    content?: string,
    contentView?: FunctionComponent,
    icon?: FunctionComponent,
    confirmText?: string,
    cancelText?: string,
    theme?: ThemeColor,
    background?: ThemeBackground,
    leftMode?: boolean,
    className?: string,
    style?: object,
    onConfirm?: () => void,
    onCancel?: () => void,
    onClose?: () => void,
    closeOnOutsideClick?: boolean,
  }): Promise<boolean>

  /**
   * 弹出获取用户文本输入的对话框
   *
   * @param options 创建对话框的选项对象 具体选项如下
   *
   * @returns 关闭后返回用户输入的文本 如果用户不是点击确认按钮关闭的对话框 则返回 undefined
   */
  input(options: {
    title: string,
    titleIcon: FunctionComponent,
    content?: string,
    contentView?: FunctionComponent,
    icon?: FunctionComponent,
    theme?: ThemeColor,
    leftMode?: boolean,
    className?: string,
    style?: object,
    confirmText?: string,
    cancelText?: string,
    defaultValue?: string,
    inputPlaceholder?: string,
    autoFocus?: boolean,
    allowEmpty?: boolean,
    onChange?: (value: string) => void,
    onCheck?: (value: string) => boolean,
    onConfirm?: (value: string) => void,
    onCancel?: () => void,
    onClose?: () => void,
    closeOnOutsideClick?: boolean,
  }): Promise<string | undefined>

  /**
   * 获取对话框
   *
   * @param id 对话框的 id
   *
   * @returns 返回对应 id 的对话框 如果没有则返回 undefined
   */
  get(id: string): Dialog | undefined

  /**
   * 关闭对话框
   *
   * @param dialog 对话框控制器
   */
  close(dialog: string | Dialog): Promise<boolean>

  /**
   * 关闭所有对话框
   */
  closeAll(): Promise<number>

}
