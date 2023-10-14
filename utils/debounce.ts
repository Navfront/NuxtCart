export default function debounce (
  cb: (...args: any) => void,
  delay = 300,
  ...args: any
) {
  let timeout: any = null
  return () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
