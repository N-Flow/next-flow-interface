import { LastSubscriber } from "./dto/last-subscriber.type";
import { SelectedSubscriber } from "./dto/selected-subscriber.type";
import RsSelectionState from "@/api/service/engine/operate/selection/dto/rs-selection-state.interface";

export default interface RsSelectionServiceApi {

  state: RsSelectionState


  changeBranchMode(value?: boolean, message?: boolean): void


  subscribe(subscriber: SelectedSubscriber): () => void

  unsubscribe(subscriber: SelectedSubscriber): void


  subscribeLast(subscriber: LastSubscriber): () => void

  unsubscribeLast(subscriber: LastSubscriber): void

}
