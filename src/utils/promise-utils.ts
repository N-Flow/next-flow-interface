export default class PromiseUtils {
  static async sleep(time: number) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    })
  }
}
