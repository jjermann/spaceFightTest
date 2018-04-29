import React from 'react';

const MainGrid = () => {
    const gridStyle = {
      fill: '#30abef',
    };
    const gridWidth = 2000;
    const gridHeight = 2000;
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