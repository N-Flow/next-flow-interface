import {MouseEvent} from "react";
import {DivProps} from "@/api/components/interface/base-types";
import FileLoadInfo from "@/api/service/main/file/interface/file-load-info";
import RvFile from "@/api/service/sync/interface/file/rv-file.interface";

export interface ResourceBlockProps extends DivProps {
  file: RvFile,
  onResourceMouseDown?: (e: MouseEvent, yFile: RvFile) => void,
  fileLoadInfo?: FileLoadInfo
  showProgress?: boolean
  enableImageFilter?: boolean
  ignoreMouseStyle?: boolean
}