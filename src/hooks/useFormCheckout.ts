import { TypeFormTestSchema, formTestSchema } from '@/schemas/formCheckout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { maskCardExpiration, maskCreditCardNumber } from '@/lib/masks'
import { RegisterPayment } from '@/infra/RegisterPayment'
import { Payment } from '@/entities/Payment'

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

  function resetFields() {
    setValue('cardNumber', '')
    setValue('cardExpirationDate', '')
  }

  function registerPayment(data: TypeFormTestSchema) {
    const payment = new RegisterPayment()
    payment.register(new Payment(data.cardNumber, data.cardExpirationDate))
    resetFields()
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
