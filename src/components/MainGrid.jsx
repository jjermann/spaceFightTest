import React from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell'

const MainGrid = (props) => {
  function GridBackground() {
    return (
      <rect
        x={props.gridWidth / -2}
        y={props.gridHeight / -2}
        width={props.gridWidth}
        height={props.gridHeight}
        fill="#eeeeee"
      />
    )
  }
  function GridCells() {
    return props.gridData.map((data, i) => {
      return (
        <GridCell xCord={data[0]} yCord={data[1]} />
      )
    })
  }
  function MainGridContent() {
    return (
      <g>
        {GridBackground()}
        {GridCells()}
      </g>
    )
  }
  return (
    MainGridContent()
  )
};
  
  MainGrid.propTypes = {
    gridWidth: PropTypes.number.isRequired,
    gridHeight: PropTypes.number.isRequired,
    gridData: PropTypes.array.isRequired,
  };

  export default MainGrid;