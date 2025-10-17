export default class StaticClassInstantiationError extends Error {
  constructor(className: string) {
    super(`${className} is a static class and cannot be instantiated.`)
    this.name = 'StaticClassInstantiationError'
  }
}
