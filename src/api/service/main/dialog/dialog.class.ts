import { FunctionComponent } from 'react'

import DialogCreateOptions from '@/api/service/main/dialog/dto/dialog-create-options.interface'

import { ThemeColor } from '../theme/dto/theme-color.enum'

import DialogController from './dto/dialog-controller.interface'

export default class Dialog {
  constructor(
    public options: DialogCreateOptions,

    public id: string,
    public title = '',
    public titleIcon: FunctionComponent | undefined = undefined,
    public content = '',
    public contentView: FunctionComponent | undefined = undefined,
    public icon: FunctionComponent | undefined = undefined,
    public view: FunctionComponent | undefined = undefined,

    public theme: ThemeColor = ThemeColor.BLUE,
    public leftMode = false,
    public className = '',
    public style: object = {},

    public confirmText = '',
    public cancelText = '',

    public enableInput = false,
    public defaultValue = '',
    public inputPlaceholder = '',
    public autoFocus: boolean = enableInput,
    public allowEmpty = false,
    public onChange: (value: string) => void = () => {},
    public onCheck: (value: string) => boolean = () => true,

    public enableCloseButton = true,

    public onConfirm: (value: string) => void = () => {},
    public onCancel: () => void = () => {},
    public onClose: () => void = () => {},

    public onConfirmButtonClick: () => void = () => {},
    public onCancelButtonClick: () => void = () => {},
    public onOutsideClick: () => void = () => {},
    public onCloseButtonClick: () => void = () => {},

    public onRender: () => void = () => {},
    public onEffect: () => () => void = () => () => {},

    public closeOnConfirm = true,
    public closeOnCancel = true,
    public closeOnOutsideClick = false,
    public closeOnCloseButtonClick = true,
    public alignButton = true,

    public controller: DialogController | null = null,
    public inputValue: string = defaultValue,
    public createTime: Date = new Date(),
    public focusInput: () => void = () => {},
  ) {}

  static fromOptions(id: string, options: DialogCreateOptions): Dialog {
    return new Dialog(
      options,
      id,
      options.title,
      options.titleIcon,
      options.content,
      options.contentView,
      options.icon,
      options.view,
      options.theme,
      options.leftMode,
      options.className,
      options.style,
      options.confirmText,
      options.cancelText,
      options.enableInput,
      options.defaultValue,
      options.inputPlaceholder,
      options.autoFocus,
      options.allowEmpty,
      options.onChange,
      options.onCheck,
      options.enableCloseButton,
      options.onConfirm,
      options.onCancel,
      options.onClose,
      options.onConfirmButtonClick,
      options.onCancelButtonClick,
      options.onOutsideClick,
      options.onCloseButtonClick,
      options.onRender,
      options.onEffect,
      options.closeOnConfirm,
      options.closeOnCancel,
      options.closeOnOutsideClick,
      options.closeOnCloseButtonClick,
      options.alignButton,
    )
  }

  setHide: (value: boolean) => void = () => {}
}
