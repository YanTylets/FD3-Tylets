import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
      let string = this.props.text;
      let arr = string.split(/<[br\/ ]+>/g);
      let newArr = [];
      arr.forEach((item, index) => {
        newArr.push(item);
        if (arr.length-1 > index) {
        newArr.push(<br/>); 
      }

      }
        )
        console.log(arr);
        console.log(newArr)

    return (
      <div>
          {newArr}                                    
      </div>
    );
  }
};

export default BR2JSX;