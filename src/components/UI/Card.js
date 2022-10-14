import React from 'react'
import './Card.css'

const Card = (props) => {
    const classes='card ' + props.classname
  return (
    <div>{props.children}</div>
  )
}

export default Card