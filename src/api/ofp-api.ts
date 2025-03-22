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
import {RsdCheckableButtonProps} from "./components/rsd/rsd-checkable-button-props";
import {AntSelectProps} from "./components/ant/ant-select-props";
import {FlexGrowProps} from "./components/dev/flex-grow-props";
import ThemeProviderProps from "./components/ant/theme-provider-props";
import ModulePreloaderApi from "./service/main/preloader/module-preloader-api";
import SyncServiceApi from "./service/sync/sync-service-api";
import RvGlobalServiceApi from "@/api/service/sync/global/rv-global-service-api";
import HistoryServiceApi from "./service/sync/history-service-api";
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
import DialogServiceApi from "@/api/service/main/dialog/dialog-service-api";
import NativeEventServiceApi from "@/api/service/main/native-event/native-event-service-api";
import RvModelServiceApi from "./service/sync/model/rv-model-service-api";
import FirstLoadModelServiceApi from "@/api/service/engine/render/model/first/first-load-model-service-api";
import { UseTAttribute } from "./hook/use-t-attribute.type";
import RsSelectionServiceApi from "@/api/service/engine/operate/selection/rs-selection-service-api";
import TAttributeServiceApi from "./service/target/attribute/t-attribute-service-api";
import RvLocationAttributeApi from "@/api/service/attributes/location/rv-location-attribute-api";
import RvAttributesServiceApi from "@/api/service/sync/step/attributes/rv-attributes-service-api";
import {UseBase} from "@/api/hook/use-base.type";
import RsNodeServiceApi from "./service/engine/render/model/rs-node-service-api";
import RsModelServiceApi from "@/api/service/engine/render/model/rs-model-service-api";
import RvLabelAttributeApi from "@/api/service/attributes/label/rv-label-attribute-api";

export interface OfpApi {

  services: {

    attributes: {
      rvLocationAttribute: RvLocationAttributeApi
      rvLabelAttribute: RvLabelAttributeApi
    }

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
      dialogService: DialogServiceApi
      nativeEventService: NativeEventServiceApi
      firstLoadModelService: FirstLoadModelServiceApi
    }

    engine: {

      operate: {
        rsSelectionService: RsSelectionServiceApi
      }

      render: {
        rsNodeService: RsNodeServiceApi
        rsModelService: RsModelServiceApi
      }

    }

    sync: {
      syncService: SyncServiceApi
      historyService: HistoryServiceApi
      rvGlobalService: RvGlobalServiceApi
      rvStepService: RvStepServiceApi
      rvFileService: RvFileServiceApi
      rvResourceService: RvResourceServiceApi
      rvModelService: RvModelServiceApi
      rvAttributesService: RvAttributesServiceApi
    }

    target: {
      tStepService: TStepServiceApi
      tAttributeService: TAttributeServiceApi
    }

  }

  hooks: {
    useBase: UseBase
    useTStep: UseTStep
    useTAttribute: UseTAttribute
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
      RsdCheckableButton: FunctionComponent<RsdCheckableButtonProps>
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
    checkableButtonStyles: any
  }

  utils: {
    materialSymbol: MaterialSymbolFunction
    sleep: SleepFunction
  }

  modules: {
  }
  
}
