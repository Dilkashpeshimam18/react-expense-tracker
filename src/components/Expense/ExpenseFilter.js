import React from 'react'

const ExpenseFilter = ({ handleFilter, filterYear }) => {
  const handleChange = (event) => {
    handleFilter(event.target.value)
  }
  return (
    <div>
      <select value={filterYear} onChange={handleChange}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>

      </select>
    </div>
  )
}

export default ExpenseFilter