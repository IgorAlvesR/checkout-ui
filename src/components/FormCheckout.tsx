'use client'

import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { useFormCheckout } from '@/hooks/useFormTest'

const Error = ({ message }: { message: string }) => {
  return (
    <p data-testid="error-card-number" className="text-sm text-red-400">
      {message}
    </p>
  )
}

const FormTest = () => {
  const {
    handleFormSubmit,
    errors,
    handleSubmit,
    register,
    setMaskCardNumber,
  } = useFormCheckout()

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full flex flex-col justify-between gap-8"
    >
      <Label className="min-h-[6rem] flex flex-col gap-1 text-zinc-600 text-sm">
        Número do cartão
        <Input
          type="text"
          className="border-x-0 border-t-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 mx-0 p-0 text-lg text-zinc-500"
          placeholder="9999 9999 9999 9999"
          {...register('cardNumber', {
            onChange: ({ target }) => {
              setMaskCardNumber(target.value)
            },
          })}
          maxLength={20}
        />
        {errors.cardNumber?.message && (
          <Error message={errors.cardNumber.message} />
        )}
      </Label>

      <Button type="submit" className="font-bold rounded-full p-6">
        Finalizar pagamento
      </Button>
    </form>
  )
}

export default FormTest