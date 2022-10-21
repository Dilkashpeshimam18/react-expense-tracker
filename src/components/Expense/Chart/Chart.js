import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    let dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value)
    let totalMaximum = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataPoint.map((dataPoint) => {
                return (
                    <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />

                )
            })}
        </div>
    )
}

export default Chart