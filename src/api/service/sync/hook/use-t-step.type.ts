import {YPath} from "rhine-var";

export type UseTStep = <T = any>(path?: string) => [string, T, (key: string | YPath, value: any) => void, (key: string) => void]
