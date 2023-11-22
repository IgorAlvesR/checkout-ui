export class Payment {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    readonly cardNumber: string,
    readonly cardExpirationDate: string,
  ) {}
}
