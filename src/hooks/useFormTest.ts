import { TypeFormTestSchema, formTestSchema } from '@/schemas/formCheckout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { maskCreditCard } from '@/lib/masks'

export const useFormCheckout = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TypeFormTestSchema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formTestSchema),
    defaultValues: {
      cardNumber: '',
    },
  })

  function handleFormSubmit(data: TypeFormTestSchema) {
    console.log(data)
  }

  return {
    handleFormSubmit,
    register,
    errors,
    handleSubmit,
    setMaskCardNumber: (value: string) =>
      setValue('cardNumber', maskCreditCard(value)),
  }
}
