import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/Expense/ExpenseForm";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Expenses from "./components/Expense/Expenses";
let expenseData = {}
const expenses = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 50000,
    date: new Date()
  },
  {
    id: 2,
    title: 'New phone',
    amount: 20000,
    date: new Date()


  }
]

function App() {

  const [allExpense, setAllExpense] = useState([])
  // useEffect(() => {
  //   console.log(allExpense)
  // }, [allExpense])

  const onSubmitExpense = (data) => {
    console.log('working')
    expenseData = {
      ...data,
    }
    let expense = expenseData
    setAllExpense((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmitExpense={onSubmitExpense} />
      <div>
        {allExpense.length == 0 ? <h2>There is no expense added</h2> : <Expenses setAllExpense={setAllExpense} allExpense={allExpense} />
        }


      </div>
    </div>
  );
}

export default App;
