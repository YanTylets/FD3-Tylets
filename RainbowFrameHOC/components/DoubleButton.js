import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

    static PropTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired
    }

    Pressed = (EO) => {
        let num = null;
        if(EO.target.value == this.props.caption1) {
            num = 1;
        } else num = 2
        this.props.cbPressed(num)
    } 

    render ()  {

        return (
            <div className = "DoubleButton">
                <input type="button" value={this.props.caption1} onClick={this.Pressed}/>
                {this.props.children}
                <input type="button" value={this.props.caption2} onClick={this.Pressed}/>
            </div>

        );

    }
}

export default DoubleButton;