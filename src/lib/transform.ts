export const formatCardNumberToApi = (value: string) => {
  return value.split(' ').join('').trim()
}

export const formatDate = (value: string) => {
  return new Date(value)
}
