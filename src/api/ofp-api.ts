import SpaceServiceApi from './service/main/space/space-service-api'

export interface OfpApi {

  service: {

    main: {
      SpaceService: typeof SpaceServiceApi
      PluginService: any
    }

    sync: {

    }
  }

  utils: {

    normal: {

    }

    sync: {

    }
  }

  components: {

    normal: {

    }

    rsd: {

    }

    hooks: {

    }
  }
  
}
