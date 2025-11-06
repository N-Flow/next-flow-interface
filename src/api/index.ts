import { AntCheckboxProps } from '@/components/ant/ant-checkbox-props'
import { AntColorProps } from '@/components/ant/ant-color-props'
import { AntEmptyProps } from '@/components/ant/ant-empty-props'
import { AntNumberProps } from '@/components/ant/ant-number-props'
import { AntSelectProps } from '@/components/ant/ant-select-props'
import { AntSwitchProps } from '@/components/ant/ant-switch-props'
import ThemeProviderProps from '@/components/ant/theme-provider-props'
import { FlexGrowProps } from '@/components/dev/flex-grow-props'
import InternationalizationProviderProps from '@/components/dev/internationalization-provider-props'
import MainPortalProps from '@/components/dev/main-portal-props'
import { SpanProps } from '@/components/interface/base-types'
import { AnchorProps } from '@/components/normal/anchor-props'
import { FileProgressBarProps } from '@/components/normal/file-progress-bar-props'
import { MaterialSymbolProps } from '@/components/normal/material-symbol-props'
import { ProgressBarProps } from '@/components/normal/progress-bar-props'
import ResourcePreviewProps from '@/components/normal/resource-preview-props'
import { ScrollBarProps } from '@/components/normal/scroll-bar-props'
import { UploadButtonAndListProps } from '@/components/normal/upload-button-and-list-props'
import { RsdButtonProps } from '@/components/rsd/rsd-button-props'
import { RsdCheckableButtonProps } from '@/components/rsd/rsd-checkable-button-props'
import { RsdCheckboxProps } from '@/components/rsd/rsd-checkbox-props'
import { RsdColorProps } from '@/components/rsd/rsd-color-props'
import { RsdFileSelectProps } from '@/components/rsd/rsd-file-select-props'
import { RsdInputProps } from '@/components/rsd/rsd-input-props'
import { RsdMentionsProps } from '@/components/rsd/rsd-mentions-props'
import { RsdNoneProps } from '@/components/rsd/rsd-none-props'
import { RsdNumberListProps } from '@/components/rsd/rsd-number-list-props'
import { RsdNumberProps } from '@/components/rsd/rsd-number-props'
import { RsdSelectProps } from '@/components/rsd/rsd-select-props'
import { RsdSwitchProps } from '@/components/rsd/rsd-switch-props'
import { RsdTitleProps } from '@/components/rsd/rsd-title-props'
import { UseBase } from '@/hook/use-base.type'
import { UseStepOptions } from '@/hook/use-step-options.type'
import { UseTAttributes } from '@/hook/use-t-attributes.type'
import { UseTStep } from '@/hook/use-t-step.type'
import RvLoopAttributeApi from '@/service/attributes/animation/loop/rv-loop-attribute-api'
import RvNativeAttributeApi from '@/service/attributes/animation/native/rv-native-attribute-api'
import RvBasicAttributeApi from '@/service/attributes/basic/rv-basic-attribute-api'
import RvCodeAttributeApi from '@/service/attributes/code/rv-code-attribute-api'
import RvLabelAttributeApi from '@/service/attributes/label/rv-label-attribute-api'
import RvLocationAttributeApi from '@/service/attributes/location/rv-location-attribute-api'
import RvMaterialAttributeApi from '@/service/attributes/material/rv-material-attribute-api'
import CameraConfigurationAnimationApi from '@/service/engine/animation/entry/environment/camera-configuration-animation-api'
import CameraLocationAnimationApi from '@/service/engine/animation/entry/environment/camera-location-animation-api'
import FogAnimationApi from '@/service/engine/animation/entry/environment/fog-animation-api'
import GroundAnimationApi from '@/service/engine/animation/entry/environment/ground-animation-api'
import LightAnimationApi from '@/service/engine/animation/entry/environment/light-animation-api'
import ShadowAnimationApi from '@/service/engine/animation/entry/environment/shadow-animation-api'
import SkyboxAnimationApi from '@/service/engine/animation/entry/environment/skybox-animation-api'
import EasyPropertyAnimationApi from '@/service/engine/animation/factory/between/easy-property-animation-api'
import RsLoopAnimationManagerApi from '@/service/engine/animation/factory/loop/rs-loop-animation-manager-api'
import RsAudioServiceApi from '@/service/engine/audio/rs-audio-service-api'
import RsSelectionApi from '@/service/engine/operate/selection/rs-selection-api'
import RsSelectionServiceApi from '@/service/engine/operate/selection/rs-selection-service-api'
import RsClickApi from '@/service/engine/render/click/rs-click-api'
import RsEnvironmentApi from '@/service/engine/render/environment/rs-environment-api'
import RsEnvironmentServiceApi from '@/service/engine/render/environment/rs-environment-service-api'
import RsLabelServiceApi from '@/service/engine/render/label/rs-label-service-api'
import RsNodeMaterialManagerApi from '@/service/engine/render/material/node/rs-node-material-manager-api'
import RsMaterialServiceApi from '@/service/engine/render/material/rs-material-service-api'
import RsSeparateServiceApi from '@/service/engine/render/material/separate/rs-separate-service-api'
import RsTextureServiceApi from '@/service/engine/render/material/texture/rs-texture-service-api'
import FirstLoadModelServiceApi from '@/service/engine/render/model/first/first-load-model-service-api'
import RsModelServiceApi from '@/service/engine/render/model/rs-model-service-api'
import RsNodeServiceApi from '@/service/engine/render/model/rs-node-service-api'
import RsServiceApi from '@/service/engine/rs-service-api'
import ContextMenuServiceApi from '@/service/main/context-menu/context-menu-service-api'
import DialogServiceApi from '@/service/main/dialog/dialog-service-api'
import FirstLoadServiceApi from '@/service/main/file/first/first-load-service-api'
import LocalDataServiceApi from '@/service/main/file/local/local-data-service-api'
import OssUploadServiceApi from '@/service/main/file/oss/oss-upload-service-api'
import InternationalizationServiceApi from '@/service/main/internationalization/internationalization-service-api'
import MeetingServiceApi from '@/service/main/meeting/meeting-service-api'
import MessageServiceApi from '@/service/main/message/message-service-api'
import NativeEventServiceApi from '@/service/main/native-event/native-event-service-api'
import PluginContainerServiceApi from '@/service/main/plugin/plugin-container-service-api'
import PluginServiceApi from '@/service/main/plugin/plugin-service-api'
import ResourceServiceApi from '@/service/main/resource/resource-service-api'
import SceneServiceApi from '@/service/main/scene/scene-service-api'
import SpaceServiceApi from '@/service/main/space/space-service-api'
import StatusServiceApi from '@/service/main/status/status-service-api'
import ThemeServiceApi from '@/service/main/theme/theme-service-api'
import UserServiceApi from '@/service/main/user/user-service-api'
import AwarenessServiceApi from '@/service/sync/awareness/awareness-service-api'
import RvFileServiceApi from '@/service/sync/file/rv-file-service-api'
import RvGlobalServiceApi from '@/service/sync/global/rv-global-service-api'
import HistoryServiceApi from '@/service/sync/history/history-service-api'
import RvNodeMaterialAnalyzerApi from '@/service/sync/material/node/rv-node-material-analyzer-api'
import RvModelServiceApi from '@/service/sync/model/rv-model-service-api'
import RvResourceServiceApi from '@/service/sync/resource/rv-resource-service-api'
import RvAttributesServiceApi from '@/service/sync/step/attributes/rv-attributes-service-api'
import RvStepServiceApi from '@/service/sync/step/rv-step-service-api'
import SyncServiceApi from '@/service/sync/sync-service-api'
import TAttributesServiceApi from '@/service/target/attribute/t-attributes-service-api'
import TStepServiceApi from '@/service/target/step/t-step-service-api'
import { MaterialSymbolOptions } from '@/utils/material-symbol-utils'

import type { FunctionComponent } from 'react'

export let rvLocationAttribute: RvLocationAttributeApi
export let rvLabelAttribute: RvLabelAttributeApi
export let rvLoopAttribute: RvLoopAttributeApi
export let rvNativeAttribute: RvNativeAttributeApi
export let rvCodeAttribute: RvCodeAttributeApi
export let rvMaterialAttribute: RvMaterialAttributeApi
export let rvBasicAttribute: RvBasicAttributeApi

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
