'use client'

import { PaymentContext } from '@/context/payment'
import FormCheckout from './FormCheckout'
import { RegisterPayment } from '@/infra/RegisterPayment'

export const FormCheckoutProvider = () => {
  const payment = new RegisterPayment()

  return (
    <PaymentContext.Provider value={payment}>
      <FormCheckout />
    </PaymentContext.Provider>
  )
}
