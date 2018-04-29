import React from 'react';
import PropTypes from 'prop-types';
import MainGrid from './MainGrid';
import SmallGrid from './SmallGrid';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="spacefight-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <MainGrid />
      <SmallGrid />
      <circle cx={-props.grx} cy={-props.gry} r={50} />
    </svg>
  );
};

Canvas.propTypes = {
  grx: PropTypes.number.isRequired,
  gry: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
