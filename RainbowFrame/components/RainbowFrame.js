import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.string.isRequired,
  };
  
  render() {
    return (
      <div style={{border:"solid 1px "+this.props.colors, padding:"10px"}}>
          {this.props.children}
      </div>
    );
  }

}

export default RainbowFrame;