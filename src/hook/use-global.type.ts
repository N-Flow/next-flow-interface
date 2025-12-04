export type UseGlobal = <T = unknown>(
  path?: string,
) => {
  state: T
}
