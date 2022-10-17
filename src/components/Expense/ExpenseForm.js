import React from 'react'

const ExpenseForm = () => {
    const submitExpense=(e)=>{
        e.preventDefault();
       let amount=document.getElementById('amount')     
       let title=document.getElementById('title')        
       let date=document.getElementById('date')      
       if(amount.value !='' && title.value !='' && date.value !=null){
        console.log(amount.value)
        console.log(title.value)
        console.log(date.value)

       } else{
        alert('enter the value first')
       }
   

    }
  return (
    <div>
        <div>
            <h3>Add title</h3>
            <input id='title' placeholder='Enter title' />
        </div>
        <div>
            <h3>Add amount</h3>
            <input id='amount' type='number' placeholder='Enter amount' />
        </div>
        <div>
            <h3>Add date</h3>
            <input id='date' placeholder='Enter title' type='date' />
        </div>
        <button onClick={submitExpense}>Submit</button>
    </div>
  )
}

export default ExpenseForm