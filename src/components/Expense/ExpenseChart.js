import React from 'react'
import Chart from './Chart/Chart'

const ExpenseChart = (props) => {
    const chartDataPoint=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'March',value:0},
        {label:'April',value:0},
        {label:'May',value:0},
        {label:'June',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},

    ]
    for(const expense of props.expenses){
        console.log(expense.date)
        const expenseMonth=expense.month
        for(let data of chartDataPoint){
          data.value =Number(data.value) +Number(expense.amount)
          console.log(data.value)
        }
    }
  return (
    <Chart dataPoint={chartDataPoint}/>
  )
}

export default ExpenseChart