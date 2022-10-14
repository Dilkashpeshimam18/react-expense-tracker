import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
const ExpenseItem = ({ expenseName, expenseDate, expenseAmount}) => {
 
  return (
    <Card className='expense-item'>ExpenseItems
      <div>
        <ExpenseDate date={expenseDate} />
      </div>
     <div className='expense-item__description '>
      <ExpenseDetails title={expenseName} amount={expenseAmount} />
     </div>

    </Card>
  )
}

export default ExpenseItem