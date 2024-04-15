import React from 'react'
import './gridItem.css'

function GridItem({className}) {
  return (
    <div className={`item-${className}`}></div>
  )
}

export default GridItem
