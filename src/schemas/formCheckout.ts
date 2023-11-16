import { formatCardNumberToApi } from '@/lib/transform'
import { validateCreditCardNumber } from '@/lib/validations'
import { z } from 'zod'

const formTestSchema = z
  .object({
    cardNumber: z
      .string()
      .min(1, 'Campo obrigatório')
      .refine(validateCreditCardNumber, {
        message: 'O número de seu cartão é inválido.',
      }),
  })
  .transform((field) => {
    return {
      cardNumber: formatCardNumberToApi(field.cardNumber),
    }
  })

type TypeFormTestSchema = z.infer<typeof formTestSchema>

export { formTestSchema, type TypeFormTestSchema }
