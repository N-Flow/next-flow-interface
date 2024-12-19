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
import RsdInputProps from "./components/rsd/rsd-input-props";
import * as BabylonCore from '@babylonjs/core'

export interface OfpApi {

  services: {

    main: {
      SpaceService: typeof SpaceServiceApi
      StatusService: typeof StatusServiceApi
      LocalFileService: typeof LocalFileServiceApi
      Internationalization: typeof InternationalizationServiceApi
      MeetingService: typeof MeetingServiceApi
      PluginService: typeof PluginServiceApi
      UserService: typeof UserServiceApi
    }

    sync: {

    }
  }

  components: {

    normal: {
      Anchor: FunctionComponent<AnchorProps>
    }

    rsd: {
      RsdButton: FunctionComponent<RsdButtonProps>
      RsdInput: FunctionComponent<RsdInputProps>
    }
  }

  styles: {
    rss: any
  }

  utils: {

  }

  modules: {
    react: typeof React
    babylon: typeof BabylonCore
  }
  
}
