import { StoredRhineVar } from 'rhine-var'

import RvAudio from '@/api/service/sync/interface/step/configuration/audio-info/rv-audio.interface'
import RvStep from '@/api/service/sync/interface/step/rv-step.interface'

export default interface RsAudioServiceApi {

  processStepAudioMap(step: StoredRhineVar<RvStep>): void

  fadeOutAndPauseAllAudio(): void

  processAudioMap(audioMap: RvAudio | undefined, idKey: string): void

}