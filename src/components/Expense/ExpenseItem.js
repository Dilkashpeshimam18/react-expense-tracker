import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
const ExpenseItem = ({ expenseName, expenseDate, expenseAmount }) => {
  const deleteExpense=()=>{
      let expense=document.querySelector('.expense-item')
      let expenseToBeDeleted=document.querySelector('.expense-item__description')
      expense.removeChild(expenseToBeDeleted)
  }
  return (
    <Card className='expense-item'>ExpenseItems
      <div className='expense-item__date'>
        <ExpenseDate date={expenseDate} />
      </div>
      <div className='expense-item__description '>
        <ExpenseDetails title={expenseName} amount={expenseAmount} />
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>


    </Card>
  )
}

export default ExpenseItem