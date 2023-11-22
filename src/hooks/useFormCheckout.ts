import { TypeFormTestSchema, formTestSchema } from '@/schemas/formCheckout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { maskCardExpiration, maskCreditCardNumber } from '@/lib/masks'
import { IPayment } from '@/interfaces/IPayment'

export const useFormCheckout = (payment: IPayment) => {
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
    resetFields()
    payment.register(data)
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
