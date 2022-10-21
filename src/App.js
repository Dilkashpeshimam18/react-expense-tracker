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
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(false)
  const showForm = () => {
    setShow(true)
  }

  const hideForm = () => {
    setShow(false)
  }

  const onSubmitExpense = (data) => {
    console.log('working')
    expenseData = {
      ...data,
    }
    let expense = expenseData
    setAllExpense((prevExpense) => {
      return [expense, ...prevExpense]
    })
    console.log(expenseData)
  }
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {show == false ? (
        <button onClick={showForm}>ADD EXPENSE</button>

      ) : (
        <div>
          <ExpenseForm onSubmitExpense={onSubmitExpense} />
          <button onClick={hideForm}>Cancel</button>

          <Expenses setAllExpense={setAllExpense} allExpense={allExpense} />

        </div>

      )}

    </div>
  );
}

export default App;
