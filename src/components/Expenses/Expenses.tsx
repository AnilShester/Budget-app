import React, { useState } from 'react'

import classes from './Expenses.module.css'

interface ExpenseProps {
  onHandleExpenses: (source: string, amount: number, date: string) => void
  totalBalance: number
}

const Expenses: React.FC<ExpenseProps> = ({
  onHandleExpenses,
  totalBalance,
}) => {
  const [source, setSource] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [date, setDate] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (source && amount && date) {
      if (totalBalance - amount >= 0) {
        onHandleExpenses(source, amount, date)
        setSource('')
        setAmount(0)
        setDate('')
      } else {
        alert('Insufficient balance.')
      }
    } else {
      alert('Input all the expense data')
    }
  }

  const sourceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSource(event.target.value)
  }
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value))
  }
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  return (
    <div className={classes.expenses}>
      <form onSubmit={handleSubmit} className={classes.expenses__form}>
        <label htmlFor="new__expense__source">Source of Expense:</label>
        <input
          type="text"
          name="expense"
          id="new__expense__source"
          value={source}
          onChange={(e) => sourceChangeHandler(e)}
        />
        <label htmlFor="new__expense__amount">Amount:</label>
        <input
          type="number"
          name="amount"
          id="new__expense__amount"
          value={amount}
          onChange={(e) => amountChangeHandler(e)}
        />
        <label htmlFor="new__expense__date">Date of income:</label>
        <input
          type="date"
          name="date"
          id="new__expense__date"
          value={date}
          onChange={(e) => dateChangeHandler(e)}
        />
        <input
          type="submit"
          value="Add expense"
          className={classes.add__expense__btn}
        />
      </form>
    </div>
  )
}

export default Expenses
