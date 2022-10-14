import React from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
const ExpenseItem = ({ expenseName, expenseDate, expenseAmount}) => {
 
  return (
    <div>ExpenseItems
      <div>
        <ExpenseDate date={expenseDate} />
      </div>
     <div>
      <ExpenseDetails title={expenseName} amount={expenseAmount} />
     </div>

    </div>
  )
}

export default ExpenseItem