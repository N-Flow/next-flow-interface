import {DivProps} from "@/api/components/interface/base-types";
import Dialog from "@/api/service/main/dialog/interface/dialog.interface";

export interface DialogProps extends DivProps {
  dialog: Dialog,
}