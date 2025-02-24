import {YPath} from "rhine-var";

export type UseTStep = <T = any>(path?: string) => {sid: string, state: T, set: (key: string | YPath, value: any) => void, check: (key: string | YPath) => void}
