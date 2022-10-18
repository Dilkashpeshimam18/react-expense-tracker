import React,{useState} from "react";
import ExpenseForm from "./components/Expense/ExpenseForm";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Expenses from "./components/Expense/Expenses";
let expenseData={}
function App() {
 
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 50000,
      LocationOfExpenditure: 20000,
      date: new Date()
    },
    {
      id: 2,
      title: 'New phone',
      amount: 20000,
      LocationOfExpenditure: 10000,
      date: new Date()


    }
  ]
  const onSubmitExpense=(data)=>{
    expenseData={
      ...data,
      id:Math.random().toString()
    }
    console.log(expenseData)

    {
      Object.entries(expenseData).map(([key, val]) => 
          console.log(val)
      )
  }
  }
  console.log(expenses)
  return (
    <div className="App">
      {
        expenses.map((expense) => {
          return (
            <Expenses expenseData={expenseData} expenseName={expense.title} expenseDate={expense.date} expenseAmount={expense.amount} locationOfExpenditure={expense.LocationOfExpenditure} />

          )
        })
      }
      <ExpenseForm onSubmitExpense={onSubmitExpense}/>
      <div>
      {
      Object.entries(expenseData).map(([key, val]) => 
          <h3>{val}</h3>
      )
  }

      </div>
    </div>
  );
}

export default App;
