import { mask, createDefaultMaskGenerator } from 'react-hook-mask'
import { formatCardNumberToApi } from './transform'

export const maskCreditCard = (value: string) => {
  const cardNumberFormatted = formatCardNumberToApi(value)
  const maskFormat = '9999 9999 9999 9999'
  return mask(cardNumberFormatted, createDefaultMaskGenerator(maskFormat))
}

export const maskCardValidate = (value: string) => {
  const maskFormat = '99/99'
  return mask(value, createDefaultMaskGenerator(maskFormat))
}
