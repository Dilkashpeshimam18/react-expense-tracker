import React, {useState}from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenseName, expenseDate, expenseAmount }) => {
  const [filterYear,setFilterYear]=useState('2020')

  const handleFilter=(selectedYear)=>{
    setFilterYear(selectedYear)
    console.log(filterYear)
  }
  return (
    <div>
      <ExpenseFilter handleFilter={handleFilter} filterYear={filterYear} />
        <ExpenseItem  expenseName={expenseName} expenseDate={expenseDate} expenseAmount={expenseAmount}/>
    </div>
  )
}

export default Expenses