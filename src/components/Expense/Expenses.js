import React, {useState}from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenses }) => {
  const [filterYear,setFilterYear]=useState('2020')

  const handleFilter=(selectedYear)=>{
    setFilterYear(selectedYear)
    console.log(filterYear)
  }
  return (
    <div>
      <ExpenseFilter handleFilter={handleFilter} filterYear={filterYear} />
      {expenses.map((expense)=>{
        return (
          <ExpenseItem key={expense.id} expenseName={expense.title} expenseDate={expense.date} expenseAmount={expense}/>

        )
      })}
    </div>
  )
}

export default Expenses