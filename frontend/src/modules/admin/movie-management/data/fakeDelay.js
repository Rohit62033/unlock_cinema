export const fakeDelay = (
  delay = 800
) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}