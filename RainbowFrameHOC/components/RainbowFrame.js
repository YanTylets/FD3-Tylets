import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.string.isRequired,
  };
  
  render() {
      let frame = this.props.children;
      {this.props.colors.forEach((item) =>
        frame = <div style={{border:"solid 10px "+ item, padding:"10px", size:"fit-content"}}>
             {frame}
         </div>)
         }
    



    return (
      <div>
          {frame}
      </div>

    );
}
};

export default RainbowFrame;