import { TypeFormTestSchema, formTestSchema } from '@/schemas/formCheckout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { maskCardValidate, maskCreditCard } from '@/lib/masks'
import { formatDate } from '@/lib/transform'

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

  function handleFormSubmit(data: TypeFormTestSchema) {
    const cardValidate = formatDate(data.cardValidate)
    console.log({
      ...data,
      cardValidate,
    })
  }

  return {
    handleFormSubmit,
    register,
    errors,
    isValid,
    handleSubmit,
    setMaskCardNumber: (value: string) =>
      setValue('cardNumber', maskCreditCard(value)),
    setMaskCardValidate: (value: string) =>
      setValue('cardValidate', maskCardValidate(value)),
  }
}
