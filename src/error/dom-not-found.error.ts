import NotFoundError from '@/error/not-found.error'

export default class DomNotFoundError extends NotFoundError {
  constructor(message: string) {
    super(message)
    this.name = 'DomNotFoundError'
  }
}
