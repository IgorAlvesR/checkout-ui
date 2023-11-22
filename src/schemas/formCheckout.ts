import {
  validateCardExpiration,
  validateCreditCardNumber,
} from '@/lib/validations'
import { z } from 'zod'

const formTestSchema = z.object({
  cardNumber: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine(validateCreditCardNumber, {
      message: 'O número de seu cartão é inválido.',
    }),
  cardExpirationDate: z
    .string()
    .min(1, 'Preencha a validade do cartão.')
    .refine(validateCardExpiration, {
      message: 'Data de validade expirada.',
    }),
})

type TypeFormTestSchema = z.infer<typeof formTestSchema>

export { formTestSchema, type TypeFormTestSchema }
