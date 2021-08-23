import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
      let arr = this.props.text;
      {this.props.colors.forEach((item) =>
        frame = <div style={{border:"solid 10px "+ item, padding:"10px"}}>
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