import { mask, createDefaultMaskGenerator } from 'react-hook-mask'

export const maskCreditCardNumber = (value: string) => {
  const maskFormat = '9999 9999 9999 9999'
  return mask(value, createDefaultMaskGenerator(maskFormat))
}

export const maskCardExpiration = (value: string) => {
  const maskFormat = '99/99'
  return mask(value, createDefaultMaskGenerator(maskFormat))
}
