import React from 'react';
import PropTypes from 'prop-types';

const ObjectList = (props) => {
    const Honeycomb = require('honeycomb-grid')
    const Hex = Honeycomb.extendHex({
      size: 80,
      orientation: 'flat'
    })
    const Grid = Honeycomb.defineGrid(Hex)
    const grid = Grid.rectangle({ width: props.gridWidth, height: props.gridHeight })
    const { x, y } = grid.get([props.xPosition,props.yPosition]).toPoint();
    const debugText = `Debug info: ${x}, ${y}, ${props.xPosition}, ${props.yPosition}`;

    return (
        <g>
        <symbol id="shipId1">
        <circle r="20" cx={0} cy={0}/>
        </symbol>
        <text x="30" y="30" fill="red">
         {debugText}
        </text>
        <use href="#shipId1" x={x} y={y} />
        </g>
  )
};
  
ObjectList.propTypes = {
    xPosition: PropTypes.number.isRequired,
    yPosition: PropTypes.number.isRequired,
    gridWidth: PropTypes.number.isRequired,
    gridHeight: PropTypes.number.isRequired,
    gridData: PropTypes.array.isRequired,
  };

  export default ObjectList;