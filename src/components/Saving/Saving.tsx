import React, { useState } from 'react'

import classes from './Savings.module.css'

interface SavingProps {
  savings: number[]
}

const Saving: React.FC<SavingProps> = (props) => {
  const [targetSaving, setTargetSaving] = useState<number>(0)

  const handleSavingTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetSaving(Number(e.target.value))
  }
  const handleClick = () => {
    setTargetSaving(0)
  }

  const totalSavings: number = props.savings.reduce(
    (total, current) => total + current,
    0
  )

  const remainingAmount: number = targetSaving - totalSavings

  return (
    <div className={classes.savings}>
      <label htmlFor="savng__target"> Add your saving target: </label>
      <input
        type="number"
        name="saving"
        id="saving__target"
        value={targetSaving}
        onChange={(e) => handleSavingTargetChange(e)}
      />
      <button onClick={handleClick}>Reset</button>

      <p>
        Your Target Saving is: <span>{targetSaving}</span>
      </p>
      <p>
        Your Current Saving is: <span> {totalSavings}</span>
      </p>
      <p>
        Remaining amount of Saving is: <span> {remainingAmount}</span>
      </p>
    </div>
  )
}

export default Saving
