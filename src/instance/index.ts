import { AntCheckboxProps } from '@/api/components/ant/ant-checkbox-props'
import { AntColorProps } from '@/api/components/ant/ant-color-props'
import { AntEmptyProps } from '@/api/components/ant/ant-empty-props'
import { AntNumberProps } from '@/api/components/ant/ant-number-props'
import { AntSelectProps } from '@/api/components/ant/ant-select-props'
import { AntSwitchProps } from '@/api/components/ant/ant-switch-props'
import ThemeProviderProps from '@/api/components/ant/theme-provider-props'
import { FlexGrowProps } from '@/api/components/dev/flex-grow-props'
import InternationalizationProviderProps from '@/api/components/dev/internationalization-provider-props'
import MainPortalProps from '@/api/components/dev/main-portal-props'
import { SpanProps } from '@/api/components/interface/base-types'
import { AnchorProps } from '@/api/components/normal/anchor-props'
import { FileProgressBarProps } from '@/api/components/normal/file-progress-bar-props'
import { MaterialSymbolProps } from '@/api/components/normal/material-symbol-props'
import { ProgressBarProps } from '@/api/components/normal/progress-bar-props'
import ResourcePreviewProps from '@/api/components/normal/resource-preview-props'
import { ScrollBarProps } from '@/api/components/normal/scroll-bar-props'
import { UploadButtonAndListProps } from '@/api/components/normal/upload-button-and-list-props'
import { RsdButtonProps } from '@/api/components/rsd/rsd-button-props'
import { RsdCheckableButtonProps } from '@/api/components/rsd/rsd-checkable-button-props'
import { RsdCheckboxProps } from '@/api/components/rsd/rsd-checkbox-props'
import { RsdColorProps } from '@/api/components/rsd/rsd-color-props'
import { RsdFileSelectProps } from '@/api/components/rsd/rsd-file-select-props'
import { RsdInputProps } from '@/api/components/rsd/rsd-input-props'
import { RsdMentionsProps } from '@/api/components/rsd/rsd-mentions-props'
import { RsdNoneProps } from '@/api/components/rsd/rsd-none-props'
import { RsdNumberListProps } from '@/api/components/rsd/rsd-number-list-props'
import { RsdNumberProps } from '@/api/components/rsd/rsd-number-props'
import { RsdSelectProps } from '@/api/components/rsd/rsd-select-props'
import { RsdSwitchProps } from '@/api/components/rsd/rsd-switch-props'
import { RsdTitleProps } from '@/api/components/rsd/rsd-title-props'
import { UseBase } from '@/api/hook/use-base.type'
import { UseStepOptions } from '@/api/hook/use-step-options.type'
import { UseTAttributes } from '@/api/hook/use-t-attributes.type'
import { UseTStep } from '@/api/hook/use-t-step.type'
import { UseTranslations } from '@/api/hook/use-translations.type'
import RvLoopAttributeApi from '@/api/service/attributes/animation/loop/rv-loop-attribute-api'
import RvNativeAttributeApi from '@/api/service/attributes/animation/native/rv-native-attribute-api'
import RvCodeAttributeApi from '@/api/service/attributes/code/rv-code-attribute-api'
import RvLabelAttributeApi from '@/api/service/attributes/label/rv-label-attribute-api'
import RvLocationAttributeApi from '@/api/service/attributes/location/rv-location-attribute-api'
import RvMaterialAttributeApi from '@/api/service/attributes/material/rv-material-attribute-api'
import CameraConfigurationAnimationApi from '@/api/service/engine/animation/entry/environment/camera-configuration-animation-api'
import CameraLocationAnimationApi from '@/api/service/engine/animation/entry/environment/camera-location-animation-api'
import FogAnimationApi from '@/api/service/engine/animation/entry/environment/fog-animation-api'
import GroundAnimationApi from '@/api/service/engine/animation/entry/environment/ground-animation-api'
import LightAnimationApi from '@/api/service/engine/animation/entry/environment/light-animation-api'
import ShadowAnimationApi from '@/api/service/engine/animation/entry/environment/shadow-animation-api'
import SkyboxAnimationApi from '@/api/service/engine/animation/entry/environment/skybox-animation-api'
import EasyPropertyAnimationApi from '@/api/service/engine/animation/factory/between/easy-property-animation-api'
import RsLoopAnimationManagerApi from '@/api/service/engine/animation/factory/loop/rs-loop-animation-manager-api'
import RsAudioServiceApi from '@/api/service/engine/audio/rs-audio-service-api'
import RsSelectionApi from '@/api/service/engine/operate/selection/rs-selection-api'
import RsSelectionServiceApi from '@/api/service/engine/operate/selection/rs-selection-service-api'
import RsClickApi from '@/api/service/engine/render/click/rs-click-api'
import RsEnvironmentApi from '@/api/service/engine/render/environment/rs-environment-api'
import RsEnvironmentServiceApi from '@/api/service/engine/render/environment/rs-environment-service-api'
import RsLabelServiceApi from '@/api/service/engine/render/label/rs-label-service-api'
import RsNodeMaterialManagerApi from '@/api/service/engine/render/material/node/rs-node-material-manager-api'
import RsMaterialServiceApi from '@/api/service/engine/render/material/rs-material-service-api'
import RsSeparateServiceApi from '@/api/service/engine/render/material/separate/rs-separate-service-api'
import RsTextureServiceApi from '@/api/service/engine/render/material/texture/rs-texture-service-api'
import FirstLoadModelServiceApi from '@/api/service/engine/render/model/first/first-load-model-service-api'
import RsModelServiceApi from '@/api/service/engine/render/model/rs-model-service-api'
import RsNodeServiceApi from '@/api/service/engine/render/model/rs-node-service-api'
import RsServiceApi from '@/api/service/engine/rs-service-api'
import ContextMenuServiceApi from '@/api/service/main/context-menu/context-menu-service-api'
import DialogServiceApi from '@/api/service/main/dialog/dialog-service-api'
import FirstLoadServiceApi from '@/api/service/main/file/first/first-load-service-api'
import LocalDataServiceApi from '@/api/service/main/file/local/local-data-service-api'
import OssUploadServiceApi from '@/api/service/main/file/oss/oss-upload-service-api'
import InternationalizationServiceApi from '@/api/service/main/internationalization/internationalization-service-api'
import MeetingServiceApi from '@/api/service/main/meeting/meeting-service-api'
import MessageServiceApi from '@/api/service/main/message/message-service-api'
import NativeEventServiceApi from '@/api/service/main/native-event/native-event-service-api'
import PluginContainerServiceApi from '@/api/service/main/plugin/plugin-container-service-api'
import PluginServiceApi from '@/api/service/main/plugin/plugin-service-api'
import ResourceServiceApi from '@/api/service/main/resource/resource-service-api'
import SceneServiceApi from '@/api/service/main/scene/scene-service-api'
import SpaceServiceApi from '@/api/service/main/space/space-service-api'
import StatusServiceApi from '@/api/service/main/status/status-service-api'
import ThemeServiceApi from '@/api/service/main/theme/theme-service-api'
import UserServiceApi from '@/api/service/main/user/user-service-api'
import AwarenessServiceApi from '@/api/service/sync/awareness/awareness-service-api'
import RvFileServiceApi from '@/api/service/sync/file/rv-file-service-api'
import RvGlobalServiceApi from '@/api/service/sync/global/rv-global-service-api'
import HistoryServiceApi from '@/api/service/sync/history/history-service-api'
import RvNodeMaterialAnalyzerApi from '@/api/service/sync/material/node/rv-node-material-analyzer-api'
import RvModelServiceApi from '@/api/service/sync/model/rv-model-service-api'
import RvResourceServiceApi from '@/api/service/sync/resource/rv-resource-service-api'
import RvAttributesServiceApi from '@/api/service/sync/step/attributes/rv-attributes-service-api'
import RvStepServiceApi from '@/api/service/sync/step/rv-step-service-api'
import SyncServiceApi from '@/api/service/sync/sync-service-api'
import TAttributesServiceApi from '@/api/service/target/attribute/t-attributes-service-api'
import TStepServiceApi from '@/api/service/target/step/t-step-service-api'
import { MaterialSymbolOptions } from '@/utils/material-symbol-utils'

import type { FunctionComponent } from 'react'

export let rvLocationAttribute: RvLocationAttributeApi
export let rvLabelAttribute: RvLabelAttributeApi
export let rvLoopAttribute: RvLoopAttributeApi
export let rvNativeAttribute: RvNativeAttributeApi
export let rvCodeAttribute: RvCodeAttributeApi
export let rvMaterialAttribute: RvMaterialAttributeApi

export let spaceService: SpaceServiceApi
export let statusService: StatusServiceApi
export let pluginService: PluginServiceApi
export let themeService: ThemeServiceApi

export let internationalizationService: InternationalizationServiceApi
export let userService: UserServiceApi
export let meetingService: MeetingServiceApi
export let messageService: MessageServiceApi
export let localDataService: LocalDataServiceApi
export let ossUploadService: OssUploadServiceApi
export let resourceService: ResourceServiceApi
export let firstLoadService: FirstLoadServiceApi
export let dialogService: DialogServiceApi
export let nativeEventService: NativeEventServiceApi
export let firstLoadModelService: FirstLoadModelServiceApi
export let pluginContainerService: PluginContainerServiceApi
export let sceneService: SceneServiceApi
export let contextMenuService: ContextMenuServiceApi

export let cameraConfigurationAnimation: CameraConfigurationAnimationApi
export let cameraLocationAnimation: CameraLocationAnimationApi
export let fogAnimation: FogAnimationApi
export let groundAnimation: GroundAnimationApi
export let lightAnimation: LightAnimationApi
export let shadowAnimation: ShadowAnimationApi
export let skyboxAnimation: SkyboxAnimationApi

export let easyPropertyAnimation: EasyPropertyAnimationApi
export let rsLoopAnimationManager: RsLoopAnimationManagerApi

export let rsAudioService: RsAudioServiceApi

export let rsSelectionService: RsSelectionServiceApi
export let rsSelection: RsSelectionApi

export let rsNodeService: RsNodeServiceApi
export let rsModelService: RsModelServiceApi
export let rsEnvironment: RsEnvironmentApi
export let rsEnvironmentService: RsEnvironmentServiceApi
export let rsTextureService: RsTextureServiceApi
export let rsClick: RsClickApi
export let rsLabelService: RsLabelServiceApi
export let rsNodeMaterialManager: RsNodeMaterialManagerApi
export let rsMaterialService: RsMaterialServiceApi
export let rsSeparateService: RsSeparateServiceApi

export let rsService: RsServiceApi

export let syncService: SyncServiceApi
export let historyService: HistoryServiceApi
export let awarenessService: AwarenessServiceApi

export let rvGlobalService: RvGlobalServiceApi
export let rvStepService: RvStepServiceApi
export let rvFileService: RvFileServiceApi
export let rvResourceService: RvResourceServiceApi
export let rvModelService: RvModelServiceApi
export let rvAttributesService: RvAttributesServiceApi
export let rvNodeMaterialAnalyzer: RvNodeMaterialAnalyzerApi

export let tStepService: TStepServiceApi
export let tAttributesService: TAttributesServiceApi

export let useBase: UseBase
export let useTStep: UseTStep
export let useTAttributes: UseTAttributes
export let useStepOptions: UseStepOptions
export let useTranslations: UseTranslations

export let ThemeProvider: FunctionComponent<ThemeProviderProps>
export let AntCheckbox: FunctionComponent<AntCheckboxProps>
export let AntColor: FunctionComponent<AntColorProps>
export let AntNumber: FunctionComponent<AntNumberProps>
export let AntSelect: FunctionComponent<AntSelectProps<unknown>>
export let AntSwitch: FunctionComponent<AntSwitchProps>
export let AntEmpty: FunctionComponent<AntEmptyProps>

export let Anchor: FunctionComponent<AnchorProps>
export let DrawerLoading: FunctionComponent<SpanProps>
export let FileProgressBar: FunctionComponent<FileProgressBarProps>
export let ProgressBar: FunctionComponent<ProgressBarProps>
export let UploadButtonAndList: FunctionComponent<UploadButtonAndListProps>
export let ScrollBar: FunctionComponent<ScrollBarProps>
export let MaterialSymbol: FunctionComponent<MaterialSymbolProps>
export let ResourcePreview: FunctionComponent<ResourcePreviewProps>

export let RsdButton: FunctionComponent<RsdButtonProps>
export let RsdCheckableButton: FunctionComponent<RsdCheckableButtonProps>
export let RsdCheckbox: FunctionComponent<RsdCheckboxProps>
export let RsdColor: FunctionComponent<RsdColorProps>
export let RsdSelect: FunctionComponent<RsdSelectProps>
export let RsdFileSelect: FunctionComponent<RsdFileSelectProps>
export let RsdFileSelectButton: FunctionComponent<RsdFileSelectProps>
export let RsdInput: FunctionComponent<RsdInputProps>
export let RsdMentions: FunctionComponent<RsdMentionsProps>
export let RsdNone: FunctionComponent<RsdNoneProps>
export let RsdNumber: FunctionComponent<RsdNumberProps>
export let RsdNumberList: FunctionComponent<RsdNumberListProps>
export let RsdSwitch: FunctionComponent<RsdSwitchProps>
export let RsdTextarea: FunctionComponent<RsdInputProps>
export let RsdTitle: FunctionComponent<RsdTitleProps>

export let FlexGrow: FunctionComponent<FlexGrowProps>
export let MainPortal: FunctionComponent<MainPortalProps>
export let InternationalizationProvider: FunctionComponent<InternationalizationProviderProps>

export let rss: Record<string, string>

export let materialSymbol: (icon: string, options?: MaterialSymbolOptions) => FunctionComponent
export let sleep: (time: number) => Promise<void>
