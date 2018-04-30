import React from 'react';
import PropTypes from 'prop-types';
import MainGrid from './MainGrid';
import { gridSize } from '../utils/constants';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
  const gridData = [
    [-props.grx,-props.gry],
    [-props.grx,10]
  ];
  return (
    <svg
      id="spacefight-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <MainGrid gridWidth={gridSize} gridHeight={gridSize} gridData={gridData}/>
    </svg>
  );
};

Canvas.propTypes = {
  grx: PropTypes.number.isRequired,
  gry: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
