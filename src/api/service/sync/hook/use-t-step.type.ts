import {YPath} from "rhine-var";

export type UseTStep = <T = any>(path: string) => [T, (key: string | YPath, value: any) => void, string]
