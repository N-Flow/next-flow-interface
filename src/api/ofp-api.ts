import SpaceServiceApi from './service/main/space/space-service-api'
import PluginServiceApi from "./service/main/plugin/plugin-service-api";
import LocalFileServiceApi from "./service/main/file/local-file-service-api";
import InternationalizationServiceApi from "./service/main/internationalization/internationalization-service-api";
import MeetingServiceApi from "./service/main/meeting/meeting-service-api";
import StatusServiceApi from './service/main/status/status-service-api';
import UserServiceApi from './service/main/user/user-service-api';
import {FunctionComponent} from "react";
import {RsdButtonProps} from './components/rsd/rsd-button-props';
import {AnchorProps} from "./components/normal/anchor-props";

export interface OfpApi {

  services: {

    main: {
      LocalFileService: typeof LocalFileServiceApi
      Internationalization: typeof InternationalizationServiceApi
      MeetingService: typeof MeetingServiceApi
      PluginService: typeof PluginServiceApi
      SpaceService: typeof SpaceServiceApi
      StatusService: typeof StatusServiceApi
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
    }
  }

  styles: {
    rss: any
    scrollbar: any
  }

  utils: {

  }

  modules: {
  }
  
}
