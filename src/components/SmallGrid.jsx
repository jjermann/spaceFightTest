import React from 'react';

const SmallGrid = () => {
    const gridStyle = {
      fill: '#ffffff',
    };
    const gridWidth = 1000;
    const gridHeight = 1000;
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
  
  export default SmallGrid;