import type {FunctionComponent} from "react";
import SpaceServiceApi from './service/main/space/space-service-api'
import PluginServiceApi from "./service/main/plugin/plugin-service-api";
import LocalFileServiceApi from "./service/main/file/local/local-file-service-api";
import InternationalizationServiceApi from "./service/main/internationalization/internationalization-service-api";
import MeetingServiceApi from "./service/main/meeting/meeting-service-api";
import StatusServiceApi from './service/main/status/status-service-api';
import UserServiceApi from './service/main/user/user-service-api';
import {RsdButtonProps} from './components/rsd/rsd-button-props';
import {AnchorProps} from "./components/normal/anchor-props";
import {RsdInputProps} from "./components/rsd/rsd-input-props";
import {RsdTitleProps} from "./components/rsd/rsd-title-props";
import {AntCheckboxProps} from "./components/ant/ant-checkbox-props";
import {AntNumberProps} from "./components/ant/ant-number-props";
import {AntColorProps} from "./components/ant/ant-color-props";
import {AntSwitchProps} from "./components/ant/ant-switch-props";
import {SpanProps} from "./components/interface/base-types";
import {FileProgressBarProps} from "./components/normal/file-progress-bar-props";
import {ProgressBarProps} from "./components/normal/progress-bar-props";
import {UploadButtonAndListProps} from "./components/normal/upload-button-and-list-props";
import {ScrollBarProps} from "./components/normal/scroll-bar-props"
import {DialogProps} from "./components/normal/dialog-props"
import {RsdCheckboxProps} from "./components/rsd/rsd-checkbox-props";
import {RsdColorProps} from "./components/rsd/rsd-color-props";
import {RsdSelectProps} from "./components/rsd/rsd-select-props";
import {RsdFileSelectProps} from "./components/rsd/rsd-file-select-props";
import {RsdMentionsProps} from "./components/rsd/rsd-mentions-props";
import {RsdNoneProps} from "./components/rsd/rsd-none-props";
import {RsdNumberProps} from "./components/rsd/rsd-number-props";
import {RsdNumberListProps} from "./components/rsd/rsd-number-list-props";
import {RsdSwitchProps} from "./components/rsd/rsd-switch-props";
import {RsdSelectableButtonProps} from "./components/rsd/rsd-selectable-button-props";
import {AntSelectProps} from "./components/ant/ant-select-props";
import {FlexGrowProps} from "./components/dev/flex-grow-props";
import ThemeProviderProps from "./components/ant/theme-provider-props";
import ModulePreloaderApi from "./service/main/preloader/module-preloader-api";
import SyncServiceApi from "./service/sync/sync-service-api";
import RvGlobalServiceApi from "@/api/service/sync/global/rv-global-service-api";
import HistoryManagerApi from "./service/sync/history-manager-api";
import {UseTStep} from "@/api/hook/use-t-step.type";
import RvStepServiceApi from "@/api/service/sync/step/rv-step-service-api";
import TStepServiceApi from "@/api/service/target/step/t-step-service-api";
import {UseStepOptions} from "@/api/hook/use-step-options.type";
import {AntEmptyProps} from "@/api/components/ant/ant-empty-props";
import MessageServiceApi from "@/api/service/main/message/message-service-api";
import OssUploadServiceApi from "@/api/service/main/file/oss/oss-upload-service-api";
import RvFileServiceApi from "@/api/service/sync/file/rv-file-service-api";
import ResourceServiceApi from "@/api/service/main/resource/resource-service-api";
import MainPortalProps from "@/api/components/dev/main-portal-props";
import {MaterialSymbolProps} from "@/api/components/normal/material-symbol-props";
import FirstLoadServiceApi from "@/api/service/main/file/first/first-load-service-api";
import RvResourceServiceApi from "./service/sync/resource/rv-resource-service-api";
import {MaterialSymbolFunction} from "@/utils/material-symbol-utils";
import {SleepFunction} from "@/utils/sleep-utils";

export interface OfpApi {

  services: {

    main: {
      spaceService: SpaceServiceApi
      statusService: StatusServiceApi
      pluginService: PluginServiceApi
      internationalizationService: InternationalizationServiceApi
      userService: UserServiceApi
      meetingService: MeetingServiceApi
      modulePreloader: ModulePreloaderApi
      messageService: MessageServiceApi
      localFileService: LocalFileServiceApi
      ossUploadService: OssUploadServiceApi
      resourceService: ResourceServiceApi
      firstLoadService: FirstLoadServiceApi
    }

    sync: {
      syncService: SyncServiceApi
      historyManager: HistoryManagerApi
      rvGlobalService: RvGlobalServiceApi
      rvStepService: RvStepServiceApi
      rvFileService: RvFileServiceApi
      rvResourceService: RvResourceServiceApi
    }

    target: {
      tStepService: TStepServiceApi
    }

  }

  hooks: {
    useTStep: UseTStep
    useStepOptions: UseStepOptions
  }

  components: {

    ant: {
      ThemeProvider: FunctionComponent<ThemeProviderProps>
      AntCheckbox: FunctionComponent<AntCheckboxProps>
      AntColor: FunctionComponent<AntColorProps>
      AntNumber: FunctionComponent<AntNumberProps>
      AntSelect: FunctionComponent<AntSelectProps>
      AntSwitch: FunctionComponent<AntSwitchProps>
      AntEmpty: FunctionComponent<AntEmptyProps>
    }

    normal: {
      Anchor: FunctionComponent<AnchorProps>
      DrawerLoading: FunctionComponent<SpanProps>
      FileProgressBar: FunctionComponent<FileProgressBarProps>
      ProgressBar: FunctionComponent<ProgressBarProps>
      UploadButtonAndList: FunctionComponent<UploadButtonAndListProps>
      ScrollBar: FunctionComponent<ScrollBarProps>
      Dialog: FunctionComponent<DialogProps>
      MaterialSymbol: FunctionComponent<MaterialSymbolProps>
    }

    rsd: {
      RsdButton: FunctionComponent<RsdButtonProps>
      RsdSelectableButton: FunctionComponent<RsdSelectableButtonProps>
      RsdCheckbox: FunctionComponent<RsdCheckboxProps>
      RsdColor: FunctionComponent<RsdColorProps>
      RsdSelect: FunctionComponent<RsdSelectProps>
      RsdFileSelect: FunctionComponent<RsdFileSelectProps>
      RsdFileSelectButton: FunctionComponent<RsdFileSelectProps>
      RsdInput: FunctionComponent<RsdInputProps>
      RsdMentions: FunctionComponent<RsdMentionsProps>
      RsdNone: FunctionComponent<RsdNoneProps>
      RsdNumber: FunctionComponent<RsdNumberProps>
      RsdNumberList: FunctionComponent<RsdNumberListProps>
      RsdSwitch: FunctionComponent<RsdSwitchProps>
      RsdTextarea: FunctionComponent<RsdInputProps>
      RsdTitle: FunctionComponent<RsdTitleProps>
    }

    dev: {
      FlexGrow: FunctionComponent<FlexGrowProps>
      MainPortal: FunctionComponent<MainPortalProps>
    }
  }

  styles: {
    rss: any
    rsbStyles: any
  }

  utils: {
    materialSymbol: MaterialSymbolFunction
    sleep: SleepFunction
  }

  modules: {
  }
  
}
