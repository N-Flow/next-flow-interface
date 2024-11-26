import {Map as YMap} from "yjs";

export type StepChangeListener = (sid: string, yStep: YMap<any>, lastSid: string, lastYStep?: YMap<any>) => void
