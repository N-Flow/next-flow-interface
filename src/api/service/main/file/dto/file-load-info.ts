import {LocalFileStatus} from "./local-file-status.enum";

export default class FileLoadInfo {

  constructor(
    public status: LocalFileStatus = LocalFileStatus.Loading,
    public loaded: number = 0,
    public total: number = 0,
  ) {
  }

}
