import React from 'react';
import PropTypes from 'prop-types';

const HexagonalGrid = (props) => {
  const Honeycomb = require('honeycomb-grid')
  const Hex = Honeycomb.extendHex({
    size: 80,
    orientation: 'flat'
  })
  const Grid = Honeycomb.defineGrid(Hex)
  const grid = Grid.rectangle({ width: props.gridWidth, height: props.gridHeight })

  function HexagonSymbol() {
    const corners = Hex().corners()
    const hexagonPoints = corners.map(({ x, y }) => `${x},${y}`).join(" ")
    return (
      <symbol id="hexagon-symbol">
        <polygon points={hexagonPoints} fill="none" stroke="black" stroke-width="1" />
      </symbol>
    )
  }

  function GridBackground() {
    return grid.map((hex, i) => {
      const { x, y } = hex.toPoint();
      return (
        <use href="#hexagon-symbol" x={x} y={y} />
      )
    })
  }

  function HexagonalGridContent() {
    return (
      <g>
        {HexagonSymbol()}
        {GridBackground()}
      </g>
    )
  }
  return (
    HexagonalGridContent()
  )
};
  
  HexagonalGrid.propTypes = {
    gridWidth: PropTypes.number.isRequired,
    gridHeight: PropTypes.number.isRequired,
  };

  export default HexagonalGrid;