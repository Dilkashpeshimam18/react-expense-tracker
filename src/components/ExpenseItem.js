import React from 'react'
import './ExpenseItem.css'
const ExpenseItem = ({expenseName,expenseDate,expenseAmount,locationOfExpenditure}) => {
    return (
        <div>ExpenseItems
          <div>
           {expenseDate}
          </div>
          <div>
         <h2>{expenseName}</h2>
          <div>
          {expenseAmount}
          </div>
          <div>
           {locationOfExpenditure}
          </div>
          </div>

        </div>
    )
}

export default ExpenseItem