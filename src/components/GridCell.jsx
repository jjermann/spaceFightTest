import React from 'react';
import PropTypes from 'prop-types';

const GridCell = (props) => {
  function Hexagon(parentGrid,x,y) {
    const Honeycomb = require('honeycomb-grid')

    // 1.  (optionally) create a Hex factory by extending the default:
    const Hex = Honeycomb.extendHex({
      size: 30,           // default: 1
      orientation: 'flat' // default: 'pointy'
    })

    // 2.  create a Grid factory that uses the Hex factory:
    const Grid = Honeycomb.defineGrid(Hex)
    // 3a. create a grid with a "shape" method:
    const grid1 = Grid.rectangle({ width: 10, height: 10 })
    // 3b. or create a grid from individual hexes:
    const grid2 = Grid(Hex(1, 2), Hex(3, 4))
    const corners = Hex().corners()
    const hexagonPoints = corners.map(({ x, y }) => `${x},${y}`).join(" ")

    return (
      <g>
        <polygon points={hexagonPoints} fill="none" stroke="purple" stroke-width="1" />
        <circle cx={x} cy={y} r={10} />
      </g>
    )
  }

  return (
    Hexagon(props.xCord, props.yCord)
  )
};
  
GridCell.propTypes = {
  xCord: PropTypes.number.isRequired,
  yCord: PropTypes.number.isRequired,
};

export default GridCell;