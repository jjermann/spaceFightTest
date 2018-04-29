import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.message} ({this.props.grx}, {this.props.gry})</h1>
        <Canvas
          grx={this.props.grx}
          gry={this.props.gry}
          trackMouse={event => (this.trackMouse(event))}
        />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
  grx: PropTypes.number.isRequired,
  gry: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;
