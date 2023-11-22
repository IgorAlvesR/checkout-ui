import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import FormCheckout from './FormCheckout'
import userEvent from '@testing-library/user-event'
import { PaymentContext } from '@/context/payment'
import { RegisterPaymentMock } from '@/infra/RegisterPaymentMock'

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

describe('FormCheckout component', () => {
  const payment = new RegisterPaymentMock()
  render(
    <PaymentContext.Provider value={payment}>
      <FormCheckout />
    </PaymentContext.Provider>,
  )

  it('deve renderizar o componente FormCheckout', () => {
    const formCheckout = screen.getByText('Número do cartão')
    expect(formCheckout).toBeDefined()
  })

  it('deve exibir erro de validação', async () => {
    const inputCardNumber = screen.getByPlaceholderText(
      '9999 9999 9999 9999',
    ) as HTMLInputElement
    await userEvent.click(inputCardNumber)
    await userEvent.keyboard('123')
    const error = screen.getByTestId('error-card-number')
    expect(error).toBeDefined()
  })

  it('deve remover erro de validação', async () => {
    const inputCardNumber = screen.getByPlaceholderText(
      '9999 9999 9999 9999',
    ) as HTMLInputElement
    inputCardNumber.value = ''
    await userEvent.click(inputCardNumber)
    await userEvent.keyboard('5435 3761 4337 8337')
    const error = screen.queryByTestId('error-card-number')

    expect(error).toBeNull()
  })

  it(`deve verificar se o botão do formulário é desabilitado ao preencher os 
  campos e quando clicado se os campos voltam a ser vazios`, async () => {
    const button = screen.getByRole('button')

    expect(button).toHaveProperty('disabled', true)

    const inputCardNumber = screen.getByPlaceholderText(
      '9999 9999 9999 9999',
    ) as HTMLInputElement
    const inputCardExpirationDate = screen.getByPlaceholderText(
      '10/23',
    ) as HTMLInputElement

    await userEvent.click(inputCardNumber)
    await userEvent.keyboard('5435 3761 4337 8337')
    await userEvent.click(inputCardExpirationDate)
    await userEvent.keyboard('10/24')

    expect(button).toHaveProperty('disabled', false)
    await userEvent.click(button)

    await sleep(200)

    expect(inputCardNumber.value).toBe('')
    expect(inputCardExpirationDate.value).toBe('')
  })
})
