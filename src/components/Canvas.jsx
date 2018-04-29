import React from 'react';
import MainGrid from './MainGrid';
import SmallGrid from './SmallGrid';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="spacefight-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <MainGrid />
      <SmallGrid />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas;
