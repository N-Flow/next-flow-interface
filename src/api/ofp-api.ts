import SpaceServiceApi from './service/main/space/space-service-api'
import PluginServiceApi from "./service/main/plugin/plugin-service-api";
import LocalFileServiceApi from "./service/main/file/local-file-service-api";
import InternationalizationServiceApi from "./service/main/internationalization/internationalization-service-api";
import MeetingServiceApi from "./service/main/meeting/meeting-service-api";
import StatusServiceApi from './service/main/status/status-service-api';
import UserServiceApi from './service/main/user/user-service-api';
import React, {FunctionComponent} from "react";
import {RsdButtonProps} from './components/rsd/rsd-button-props';
import {AnchorProps} from "./components/normal/anchor-props";
import {RsdInputProps} from "./components/rsd/rsd-input-props";
import * as BabylonCore from '@babylonjs/core'
import {RsdTitleProps} from "./components/rsd/rsd-title-props";
import {AntCheckboxProps} from "./components/ant/ant-checkbox-props";
import {AntNumberProps} from "./components/ant/ant-number-props";
import {AntColorProps} from "./components/ant/ant-color-props";
import {AntSwitchProps} from "@/api/components/ant/ant-switch-props";
import {SpanProps} from "@/api/components/interface/base-types";
import {FileProgressBarProps} from "@/api/components/normal/file-progress-bar-props";
import {ProgressBarProps} from "@/api/components/normal/progress-bar-props";
import {UploadButtonAndListProps} from "@/api/components/normal/upload-button-and-list-props";
import {ScrollBarProps} from "@/api/components/normal/scroll-bar-props"
import {RsdCheckboxProps} from "@/api/components/rsd/rsd-checkbox-props";
import {RsdColorProps} from "@/api/components/rsd/rsd-color-props";
import {RsdDropdownProps} from "@/api/components/rsd/rsd-dropdown-props";
import {RsdFileSelectProps} from "@/api/components/rsd/rsd-file-select-props";
import {RsdMentionsProps} from "@/api/components/rsd/rsd-mentions-props";
import {RsdNoneProps} from "@/api/components/rsd/rsd-none-props";
import {RsdNumberProps} from "@/api/components/rsd/rsd-number-props";
import {RsdNumberListProps} from "@/api/components/rsd/rsd-number-list-props";
import {RsdSwitchProps} from "@/api/components/rsd/rsd-switch-props";
import {RsdSelectableButtonProps} from "@/api/components/rsd/rsd-selectable-button-props";
import ToggleDialogApi from "@/api/service/view/toggle-dialog-api";
import {AntSelectProps} from "@/api/components/ant/ant-select-props";
import ThemeProviderProps from "@/api/components/ant/ThemeProviderProps";

export interface OfpApi {

  services: {

    main: {
      spaceService: SpaceServiceApi
      statusService: StatusServiceApi
      pluginService: PluginServiceApi
      InternationalizationService: typeof InternationalizationServiceApi
      UserService: typeof UserServiceApi
      LocalFileService: typeof LocalFileServiceApi
      MeetingService: typeof MeetingServiceApi
    }

    sync: {

    }

    view: {
      ToggleDialog: typeof ToggleDialogApi
    }

  }

  components: {

    ant: {
      ThemeProvider: FunctionComponent<ThemeProviderProps>
      AntCheckbox: FunctionComponent<AntCheckboxProps>
      AntColor: FunctionComponent<AntColorProps>
      AntNumber: FunctionComponent<AntNumberProps>
      AntSelect: FunctionComponent<AntSelectProps>
      AntSwitch: FunctionComponent<AntSwitchProps>
    }

    normal: {
      Anchor: FunctionComponent<AnchorProps>
      DrawerLoading: FunctionComponent<SpanProps>
      FileProgressBar: FunctionComponent<FileProgressBarProps>
      FlexGrow: FunctionComponent<{value?: number}>
      ProgressBar: FunctionComponent<ProgressBarProps>
      UploadButtonAndList: FunctionComponent<UploadButtonAndListProps>
      ScrollBar: FunctionComponent<ScrollBarProps>
    }

    rsd: {
      RsdButton: FunctionComponent<RsdButtonProps>
      RsdSelectableButton: FunctionComponent<RsdSelectableButtonProps>
      RsdCheckbox: FunctionComponent<RsdCheckboxProps>
      RsdColor: FunctionComponent<RsdColorProps>
      RsdDropdown: FunctionComponent<RsdDropdownProps>
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
  }

  styles: {
    rss: any
    rsbStyles: any
  }

  utils: {

  }

  modules: {
    react: typeof React
    babylon: typeof BabylonCore
  }
  
}
