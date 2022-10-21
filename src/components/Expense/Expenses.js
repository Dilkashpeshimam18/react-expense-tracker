import React, { useState, useEffect } from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate'
import ExpenseChart from './ExpenseChart'
const Expenses = ({ allExpense, setAllExpense }) => {
  const [filterYear, setFilterYear] = useState('2020')
  const [filter, setFilter] = useState(allExpense)

  const handleFilter = (selectedYear) => {
    setFilterYear(selectedYear)
    setFilter(true)

    let filterExpense = allExpense.filter((expense) => {
      return expense.year === Number(filterYear)
    })

    if (filterExpense.length != 0) {
      let newExpenses = filterExpense
      setAllExpense(newExpenses)
    }
    console.log(filterExpense)
  }



  return (
    <div>
      <ExpenseFilter handleFilter={handleFilter} filterYear={filterYear} />
      <ExpenseChart expenses={allExpense} />
      {allExpense.length == 0 && <h2>There is no expense added</h2>}
      {allExpense.length == 1 && allExpense.map((expense) => {
        return (
          <>
            <ExpenseItem key={expense.id} expenseName={expense.title} expenseAmount={expense.amount} expenseDate={expense.date} />
            <h3>There is only single expense</h3>
          </>


        )
      })}
      {
        allExpense.length > 1 &&
        allExpense.map((expense) => {
          return (
            <ExpenseItem key={expense.id} expenseName={expense.title} expenseAmount={expense.amount} expenseDate={expense.date} />



          )
        })}

    </div>
  )
}

export default Expenses