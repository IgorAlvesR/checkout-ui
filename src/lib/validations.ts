import validator from 'validator'

export const validateCreditCardNumber = (cardNumber: string) => {
  const cardNumberFormated = cardNumber.split(' ').join('').trim()
  return validator.isCreditCard(cardNumberFormated)
}
