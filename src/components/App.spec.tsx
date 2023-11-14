import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../components/App'

describe('App component', () => {
  it('deve renderizar o componente App', () => {
    render(<App />)
    const app = screen.getByText('App')
    expect(app).toBeDefined()
  })
})
