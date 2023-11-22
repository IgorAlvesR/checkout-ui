import { Payment } from '@/entities/Payment'

export class RegisterPayment {
  register(payment: Payment) {
    const paymentTransformed = new Payment(
      this.formatCardNumber(payment.cardNumber),
      payment.cardExpirationDate,
    )
    console.log('registra pagamento', paymentTransformed)
  }

  private formatCardNumber(value: string) {
    return value.split(' ').join('').trim()
  }
}
