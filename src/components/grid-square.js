import React, { Component } from 'react'

import './grid-square.css'

// Represents a grid square with a color

class GridSquare extends Component {
  render () {
    const classes = `grid-square color-${this.props.color}`
    return <div className={classes} />
  }
}

export default GridSquare
