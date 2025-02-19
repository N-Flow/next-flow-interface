import {FunctionComponent} from "react";
import DialogCreateOptions from "@/api/service/main/dialog/interface/dialog-create-options.interface";
import DialogController from "./interface/dialog-controller.interface";

export default interface DialogServiceApi {

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
    content?: string,
    icon?: FunctionComponent,
    confirmText?: string,
    cancelText?: string,
    className?: string,
    style?: object,
    onConfirm?: () => void,
    onCancel?: () => void,
    onOutsideClick?: () => void,
    closeOnConfirm?: boolean,
    closeOnCancel?: boolean,
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
    content?: string,
    icon?: FunctionComponent,
    className?: string,
    style?: object,
    defaultValue?: string,
    inputPlaceholder?: string,
    allowEmpty?: boolean,
    autoFocus?: boolean,
    confirmText?: string,
    cancelText?: string,
    onChange?: (value: string) => void,
    onConfirm?: (value: string) => void,
    onCancel?: () => void,
    onOutsideClick?: () => void,
    closeOnConfirm?: boolean,
    closeOnCancel?: boolean,
    closeOnOutsideClick?: boolean,
  }): Promise<string | undefined>

}
