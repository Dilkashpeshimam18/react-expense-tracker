import React from 'react'

const ExpenseDetails = ({title,amount}) => {
  return (
    <div>
         <div>
        <h2>{title}</h2>
        <div>
          {amount}
        </div>

      </div>
    </div>
  )
}

export default ExpenseDetails