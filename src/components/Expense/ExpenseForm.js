import React, { useState } from 'react'

const ExpenseForm = ({ onSubmitExpense }) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [submit, setSubmit] = useState(false)
    let expenseData = {}
    const submitExpense = (e) => {
        e.preventDefault()
        var input = document.getElementById('date-input').value;
        var d = new Date(input);
        var fullYear = d.getFullYear()
        const month = d.toLocaleString('default', { month: 'long' });

        expenseData = {
            title: title,
            amount: +amount,
            date: d.toUTCString(),
            id: Math.random().toString(),
            year: fullYear,
            month:month,

        }
        onSubmitExpense(expenseData)
        setAmount('')
        setTitle('')
        setDate('')

    }
    return (
        <div>
            <form onSubmit={submitExpense}>
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
                    <input onChange={(e) => setDate(e.target.value)} value={date} id='date-input' placeholder='Enter title' type='date' />
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default ExpenseForm