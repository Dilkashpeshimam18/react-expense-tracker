import React, { useState } from 'react'

const ExpenseForm = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(undefined)
    const submitExpense = (e) => {
        console.log(title)
        console.log(amount)
        console.log(date)

    }
    return (
        <div>
            <div>
                <h3>Add title</h3>
                <input onChange={(e) => setTitle(e.target.value)} value={title} id='title' placeholder='Enter title' />
            </div>
            <div>
                <h3>Add amount</h3>
                <input onChange={(e) => setAmount(e.target.value)} value={amount} id='amount' type='number' placeholder='Enter amount' />
            </div>
            <div>
                <h3>Add date</h3>
                <input onChange={(e) => setDate(e.target.value)} value={date} id='date' placeholder='Enter title' type='date' />
            </div>
            <button onClick={submitExpense}>Submit</button>
        </div>
    )
}

export default ExpenseForm