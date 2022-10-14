import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id:1,
      title: 'Car Insurance',
      amount:50000,
      LocationOfExpenditure:20000,
      date:new Date()
    },
    {
      id:2,
      title:'New phone',
      amount:20000,
      LocationOfExpenditure:10000,
      date:new Date()


    }
  ]
  console.log(expenses)
  return (
    <div className="App">
      {
        expenses.map((expense)=>{
          return(
            <ExpenseItem expenseName={expense.title} expenseDate={expense.date} expenseAmount={expense.amount} locationOfExpenditure={expense.LocationOfExpenditure} />

          )
        })
      }
    </div>
  );
}

export default App;
