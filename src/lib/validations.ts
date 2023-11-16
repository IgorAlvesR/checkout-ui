import validator from 'validator'
import { formatCardNumberToApi } from './transform'

export const validateCreditCardNumber = (cardNumber: string) => {
  const cardNumberFormatted = formatCardNumberToApi(cardNumber)
  return validator.isCreditCard(cardNumberFormatted)
}
