export const formatCardNumberToApi = (value: string) => {
  return value.split(' ').join('').trim()
}
