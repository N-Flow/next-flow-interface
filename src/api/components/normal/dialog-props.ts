import {DivProps} from "@/api/components/interface/base-types";
import Dialog from "@/api/service/main/dialog/dialog.class";

export interface DialogProps extends DivProps {
  dialog: Dialog,
}