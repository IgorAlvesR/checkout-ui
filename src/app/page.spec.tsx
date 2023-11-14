import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Página principal', () => {
  it('deve renderizar a página principal', () => {
    render(<Page />)
    const page = screen.getByText(/App/i)
    expect(page).toBeDefined()
  })
})
