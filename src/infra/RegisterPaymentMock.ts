import { Payment } from '@/entities/Payment'
import { IPayment } from '@/interfaces/IPayment'

export class RegisterPaymentMock implements IPayment {
  register(payment: Payment): void {
    const paymentTransformed = new Payment(
      this.formatCardNumber(payment.cardNumber),
      payment.cardExpirationDate,
    )
    console.log('registra pagamento mock', paymentTransformed)
  }

  private formatCardNumber(value: string) {
    return value.split(' ').join('').trim()
  }
}
