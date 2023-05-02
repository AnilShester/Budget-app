import React, { useState } from 'react'

import './App.css'
import Income from './components/Income/Income'
import Expenses from './components/Expenses/Expenses'
import ExpenseHistory from './components/ExpenseHistory/ExpenseHistory'
import IncomeHistory from './components/IncomeHistory/IncomeHistory'
import Balance from './components/TotalBalance/Balance'
import Saving from './components/Saving/Saving'
import TransferToSaving from './components/TransferToSaving/TransferToSaving'

interface Transactions {
  id: number
  source: string
  amount: number
  date: string
}

type TotalBalance = number

const App = () => {
  const [incomes, setIncomes] = useState<Transactions[]>([])
  const [expenses, setExpenses] = useState<Transactions[]>([])
  const [savings, setSaving] = useState<number[]>([])
  const [totalBalance, setTotalBalance] = useState<TotalBalance>(0)

  const handleExpenses = (source: string, amount: number, date: string) => {
    setExpenses((prevExpense) => [
      ...prevExpense,
      {
        id: Math.random(),
        source: source,
        amount: amount,
        date: date,
      },
    ])
  }

  const handleIncome = (source: string, amount: number, date: string) => {
    setIncomes((prevIncome) => [
      ...prevIncome,
      {
        id: Math.random(),
        source: source,
        amount: amount,
        date: date,
      },
    ])
  }

  const handleSaving = (amount: number) => {
    setSaving((prevSaving) => [...prevSaving, amount])
  }

  const handleGetTotalBalance = (total: number) => {
    setTotalBalance(total)
  }

  console.log(incomes)
  console.log(expenses)
  console.log(totalBalance)

  return (
    <main className="main__container">
      <section className="budget__group">
        <div className="budget__income">
          <Income onHandleIncome={handleIncome} />
          <IncomeHistory incomes={incomes} />
        </div>
        <div className="budget__expense">
          <Expenses
            onHandleExpenses={handleExpenses}
            totalBalance={totalBalance}
          />
          <ExpenseHistory expenses={expenses} />
        </div>

        <Saving savings={savings} />
      </section>
      <section className="balance__section">
        <Balance
          incomes={incomes}
          expenses={expenses}
          savings={savings}
          handleGetTotalBalance={handleGetTotalBalance}
        />

        <TransferToSaving
          onHandleSaving={handleSaving}
          totalBalance={totalBalance}
        />
      </section>
    </main>
  )
}

export default App
