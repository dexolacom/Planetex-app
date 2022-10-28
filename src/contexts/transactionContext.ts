import {createContext, useContext} from 'react';

export type TransContext = {
  isTransSuccessModal: boolean
  setIsTransSuccessModal: (b: boolean) => void
}

export const TransactionContext = createContext<TransContext>({
  isTransSuccessModal: false,
  setIsTransSuccessModal: () => undefined
})

export const useTransactionContext = () => useContext(TransactionContext)