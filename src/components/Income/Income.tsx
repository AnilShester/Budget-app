import React, { useState } from 'react'

import classes from './Income.module.css'

interface IncomeProps {
  onHandleIncome: (source: string, amount: number, date: string) => void
}

const Income: React.FC<IncomeProps> = ({ onHandleIncome }) => {
  const [source, setSource] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [date, setDate] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (source && amount && date) {
      onHandleIncome(source, amount, date)
      setSource('')
      setAmount(0)
      setDate('')
    } else {
      alert('Input all income')
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
    <div>
      <form onSubmit={handleSubmit} className={classes.income__form}>
        <label htmlFor="new__income__source">Source of Income:</label>
        <input
          type="text"
          name="income"
          id="new__income__source"
          value={source}
          onChange={(e) => sourceChangeHandler(e)}
        />
        <label htmlFor="new__income__amount">Amount:</label>
        <input
          type="number"
          name="amount"
          id="new__income__amount"
          value={amount}
          onChange={(e) => amountChangeHandler(e)}
        />
        <label htmlFor="new__income__date">Date of income:</label>
        <input
          type="date"
          name="date"
          id="new__income__date"
          value={date}
          onChange={(e) => dateChangeHandler(e)}
        />
        <input
          type="submit"
          value="Add income"
          className={classes.add__income__btn}
        />
      </form>
    </div>
  )
}

export default Income
