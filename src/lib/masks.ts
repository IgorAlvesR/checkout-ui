import { mask, createDefaultMaskGenerator } from 'react-hook-mask'

export const maskCreditCard = (value: string) => {
  const cardNumberFormated = value.split(' ').join('').trim()
  const maskFormat = '9999 9999 9999 9999'
  return mask(cardNumberFormated, createDefaultMaskGenerator(maskFormat))
}
