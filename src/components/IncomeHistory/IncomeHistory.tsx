import React from 'react'

import classes from './IncomeHistory.module.css'

interface IncomeProps {
  incomes: { id: number; source: string; amount: number; date: string }[]
}

const IncomeHistory: React.FC<IncomeProps> = ({ incomes }) => {
  return (
    <div className={classes.income__history}>
      {incomes.map((income) => {
        return (
          <p key={income.id}>
            {income.source.toUpperCase()}: {income.amount}€ on {income.date}
          </p>
        )
      })}
    </div>
  )
}

export default IncomeHistory
