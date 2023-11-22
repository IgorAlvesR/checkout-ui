import validator from 'validator'

export const validateCreditCardNumber = (cardNumber: string) => {
  return validator.isCreditCard(cardNumber)
}

export const validateCardExpiration = (value: string) => {
  const currentYear = String(new Date().getFullYear()).substring(2, 4)
  const currentMonth = String(new Date().getMonth() + 1)
  const validMonths = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]

  const monthExpiration = value.split('/')[0]
  const yearExpiration = value.split('/')[1]

  const isValidDateExpiration =
    (monthExpiration >= currentMonth && yearExpiration >= currentYear) ||
    (yearExpiration > currentYear && validMonths.includes(monthExpiration))

  return isValidDateExpiration
}
