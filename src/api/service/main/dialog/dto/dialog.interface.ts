import DialogCreateOptions from "@/api/service/main/dialog/dto/dialog-create-options.interface";
import DialogController from "./dialog-controller.interface";
import {FunctionComponent} from "react";

export default class Dialog {

  constructor(
    public options: DialogCreateOptions,

    public id: string,
    public title: string = '',
    public content: string = '',
    public contentView: FunctionComponent | undefined = undefined,
    public icon: FunctionComponent | undefined = undefined,
    public view: FunctionComponent | undefined = undefined,

    public className: string = '',
    public style: object = {},

    public confirmText: string = '',
    public cancelText: string = '',

    public enableInput: boolean = false,
    public defaultValue: string = '',
    public inputPlaceholder: string = '',
    public autoFocus: boolean = enableInput,
    public allowEmpty: boolean = false,
    public onChange: ((value: string) => void) = () => {},
    public onCheck: ((value: string) => boolean) = () => true,

    public enableCloseButton: boolean = true,

    public onConfirm: ((value: string) => void) = () => {},
    public onCancel: (() => void) = () => {},
    public onClose: (() => void) = () => {},

    public onConfirmButtonClick: (() => void) = () => {},
    public onCancelButtonClick: (() => void) = () => {},
    public onOutsideClick: (() => void) = () => {},
    public onCloseButtonClick: (() => void) = () => {},

    public onRender: (() => void) = () => {},
    public onEffect: (() => (()=>void)) = () => (() => {}),

    public closeOnConfirm: boolean = true,
    public closeOnCancel: boolean = true,
    public closeOnOutsideClick: boolean = false,
    public closeOnCloseButtonClick: boolean = true,

    public controller: DialogController | null = null,
    public inputValue: string = defaultValue,
    public createTime: Date = new Date(),
    public focusInput: () => void = () => {},
  ) {
  }

  static fromOptions(id: string, options: DialogCreateOptions): Dialog {
    return new Dialog(
      options,
      id,
      options.title,
      options.content,
      options.contentView,
      options.icon,
      options.view,
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
    )
  }


}
