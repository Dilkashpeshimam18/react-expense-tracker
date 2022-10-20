import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
const ExpenseItem = ({ id, expenseName, expenseDate, expenseAmount }) => {

  return (
    <Card  className='expense-item'>
      <div className='expense-item__date'>
        <ExpenseDate date={expenseDate} />
      </div>
      <div className='expense-item__description '>
        <ExpenseDetails title={expenseName} amount={expenseAmount} />
      </div>
      <button >Delete Expense</button>


    </Card>
  )
}

export default ExpenseItem