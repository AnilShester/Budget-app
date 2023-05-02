import React from 'react'

import classes from './ExpenseHistory.module.css'

interface ExpensesProps {
  expenses: { id: number; source: string; amount: number; date: string }[]
}

const ExpenseHistory: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <div className={classes.expense__history}>
      {expenses.map((expense) => {
        return (
          <p key={expense.id}>
            {expense.source.toUpperCase()}: {expense.amount}€ on {expense.date}
          </p>
        )
      })}
    </div>
  )
}

export default ExpenseHistory
