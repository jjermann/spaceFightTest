import React from 'react';
import PropTypes from 'prop-types';
import HexagonalGrid from './HexagonalGrid';
import { gridSize } from '../utils/constants';

const Canvas = (props) => {
  const viewBox = [0, 0, window.innerWidth, window.innerHeight];
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
      <HexagonalGrid gridWidth={10} gridHeight={6} gridData={gridData}/>
    </svg>
  );
};

Canvas.propTypes = {
  grx: PropTypes.number.isRequired,
  gry: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
