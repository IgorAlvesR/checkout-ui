'use client'

import FormCheckout from '@/components/FormCheckout'
import { RegisterPayment } from '@/infra/RegisterPayment'

export default function Page() {
  return (
    <main className="max-w-xl mx-auto flex flex-col h-screen items-center justify-center">
      <FormCheckout payment={new RegisterPayment()} />
    </main>
  )
}
