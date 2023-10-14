export default function normalizeWord (word: string, amount: number) {
  const cases = [2, 0, 1, 1, 1, 2]
  const titles = [`${word}`, `${word}а`, `${word}ов`]
  return titles[
    amount % 100 > 4 && amount % 100 < 20
      ? 2
      : cases[amount % 10 < 5 ? amount % 10 : 5]
  ]
}
