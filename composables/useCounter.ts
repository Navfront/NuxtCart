export const useCounter = (
  initialCount: number,
  onIncrementCB: (ref: globalThis.Ref) => void,
  onDecrementCB: (ref: globalThis.Ref) => void,
  min: number = 1,
  max: number = 99
) => {
  const currentCount = ref(initialCount)

  function increment () {
    if (currentCount.value < max) currentCount.value++
    onIncrementCB(currentCount)
  }

  function decrement () {
    if (currentCount.value > min) currentCount.value--
    onDecrementCB(currentCount)
  }

  watch(currentCount, (prev, next) => {
    if (currentCount.value < 1) currentCount.value = min
    if (currentCount.value > max) currentCount.value = max
  })

  return {
    currentCount,
    increment,
    decrement
  }
}
