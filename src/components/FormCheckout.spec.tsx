import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import FormCheckout from './FormCheckout'
import userEvent from '@testing-library/user-event'

describe('FormCheckout component', () => {
  render(<FormCheckout />)

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
})
