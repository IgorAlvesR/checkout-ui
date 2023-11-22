import { TypeFormTestSchema, formTestSchema } from '@/schemas/formCheckout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { maskCardExpiration, maskCreditCardNumber } from '@/lib/masks'
import { RegisterPayment } from '@/infra/RegisterPayment'
import { Payment } from '@/entities/Payment'
import { isValid } from 'zod'

export const useFormCheckout = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<TypeFormTestSchema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formTestSchema),
    defaultValues: {
      cardNumber: '',
    },
  })

  function registerPayment(data: TypeFormTestSchema) {
    const payment = new RegisterPayment()
    payment.register(new Payment(data.cardNumber, data.cardExpirationDate))
  }

  return {
    handleSubmit,
    registerField: register,
    registerPayment,
    errors,
    isValid,
    setMaskCardNumber: (value: string) =>
      setValue('cardNumber', maskCreditCardNumber(value)),
    setMaskCardExpiration: (value: string) =>
      setValue('cardExpirationDate', maskCardExpiration(value)),
  }
}