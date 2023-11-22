'use client'

import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { useFormCheckout } from '@/hooks/useFormCheckout'
import { IPayment } from '@/interfaces/IPayment'

const Error = ({ message }: { message: string }) => {
  return (
    <p
      data-testid="error-card-number"
      className="text-xs sm:text-sm text-red-400"
    >
      {message}
    </p>
  )
}

type FormCheckoutProps = {
  payment: IPayment
}

const FormCheckout = ({ payment }: FormCheckoutProps) => {
  const {
    registerPayment,
    errors,
    isValid,
    handleSubmit,
    registerField,
    setMaskCardNumber,
    setMaskCardExpiration,
  } = useFormCheckout(payment)

  return (
    <section className="px-8 py-6 w-full flex flex-col justify-between gap-6 sm:gap-8 sm:border sm:border-gray-100">
      <h1 className="text-lg sm:text-2xl text-zinc-500 font-semibold self-start">
        Realizar pagamento
      </h1>
      <form
        onSubmit={handleSubmit(registerPayment)}
        className="w-full flex flex-col justify-between gap-6 sm:gap-8"
      >
        <Label className="min-h-[6rem] flex flex-col gap-1 text-zinc-600 text-xs sm:text-sm">
          Número do cartão
          <Input
            type="text"
            className="border-x-0 border-t-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 mx-0 p-0 text-lg text-zinc-500"
            placeholder="9999 9999 9999 9999"
            {...registerField('cardNumber', {
              onChange: ({ target }) => {
                setMaskCardNumber(target.value)
              },
            })}
          />
          {errors.cardNumber?.message && (
            <Error message={errors.cardNumber.message} />
          )}
        </Label>

        <Label className="min-h-[6rem] flex flex-col gap-1 text-zinc-600 text-xs sm:text-sm">
          Data de expiração
          <Input
            type="text"
            className="border-x-0 border-t-0 focus-visible:ring-0 shadow-none rounded-none border-b-2 mx-0 p-0 text-lg text-zinc-500"
            placeholder="10/23"
            {...registerField('cardExpirationDate', {
              onChange: ({ target }) => {
                setMaskCardExpiration(target.value)
              },
            })}
          />
          {errors.cardExpirationDate?.message && (
            <Error message={errors.cardExpirationDate.message} />
          )}
        </Label>

        <Button
          disabled={!isValid}
          type="submit"
          className="font-bold rounded-full p-6 uppercase"
        >
          Finalizar pagamento
        </Button>
      </form>
    </section>
  )
}

export default FormCheckout
