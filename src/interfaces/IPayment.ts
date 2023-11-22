import { Payment } from '@/entities/Payment'

export interface IPayment {
  register(payment: Payment): void
}
