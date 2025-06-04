export default interface RvAiDesign {
  cid: string
  dialogue: RvAiDesignDialogue[]
  time: string
}

export interface RvAiDesignDialogue {
  role: string
  content: string
}
