import React from 'react';
import { gridSize } from '../utils/constants';

const MainGrid = () => {
    const gridStyle = {
      fill: '#30abef',
    };
    const gridWidth = gridSize;
    const gridHeight = gridSize;
    return (
      <rect
        style={gridStyle}
        x={gridWidth / -2}
        y={gridHeight / -2}
        width={gridWidth}
        height={gridHeight}
      />
    );
  };
  
  export default MainGrid;