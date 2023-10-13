export default function asyncDelay<T> (
  time: number,
  callback: Function,
  ...args: any
) {
  return new Promise<T>(res => {
    setTimeout(() => {
      res(callback(...args))
    }, time)
  })
}
