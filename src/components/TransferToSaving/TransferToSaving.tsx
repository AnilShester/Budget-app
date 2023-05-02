import React, { useState } from 'react'

import classes from './TransferToSavings.module.css'

interface SavingProps {
  onHandleSaving: (amount: number) => void
  totalBalance: number
}

const TransferToSaving: React.FC<SavingProps> = (props) => {
  const [saving, setSaving] = useState<number>(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (props.totalBalance - saving >= 0) {
      props.onHandleSaving(saving)
      setSaving(0)
    } else {
      alert('Not enough balance')
    }
  }

  const handleSavingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaving(Number(e.target.value))
  }

  return (
    <div className={classes.transfer__saving}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="add__saving">Transfer to savings</label>
        <input
          type="number"
          id="add__saving"
          value={saving}
          onChange={(e) => handleSavingChange(e)}
        />
        <input
          type="submit"
          value="Add to Saving"
          className={classes.transfer__saving__btn}
        />
      </form>
    </div>
  )
}

export default TransferToSaving
