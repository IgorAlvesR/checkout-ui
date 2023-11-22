'use client'

import { IPayment } from '@/interfaces/IPayment'
import { createContext } from 'react'

export const PaymentContext = createContext<IPayment | null>(null)
