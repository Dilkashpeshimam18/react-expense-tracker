import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenseName, expenseDate, expenseAmount }) => {
  return (
    <div>
        <ExpenseItem expenseName={expenseName} expenseDate={expenseDate} expenseAmount={expenseAmount}/>
    </div>
  )
}

export default Expenses