import { formatCardNumberToApi, formatDate } from '@/lib/transform'
import {
  validateCardExpiration,
  validateCreditCardNumber,
} from '@/lib/validations'
import { z } from 'zod'

const formTestSchema = z
  .object({
    cardNumber: z
      .string()
      .min(1, 'Campo obrigatório')
      .refine(validateCreditCardNumber, {
        message: 'O número de seu cartão é inválido.',
      }),
    cardValidate: z
      .string()
      .min(1, 'Preencha a validade do cartão.')
      .refine(validateCardExpiration, {
        message: 'Data de validade expirada.',
      }),
  })
  .transform((field) => {
    return {
      cardNumber: formatCardNumberToApi(field.cardNumber),
      cardValidate: field.cardValidate,
    }
  })

type TypeFormTestSchema = z.infer<typeof formTestSchema>

export { formTestSchema, type TypeFormTestSchema }
