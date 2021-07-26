import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {


    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        drugform: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        productClass: PropTypes.string.isRequired,
        productClassActive: PropTypes.string.isRequired,
        selectedProductCode: PropTypes.number,
        cbSelected: PropTypes.func.isRequired,
        isSelected: PropTypes.string.isRequired,
        cbdelete: PropTypes.func.isRequired,
    };

    productClicked = (e) => {
        this.props.cbSelected(this.props.code);
    }

    clickDelete = (el) => {
        el.stopPropagation();
        this.props.cbdelete(this.props.code, this.props.name)                          
    }

    render() {
       return (
       <tr key={this.props.code} className={this.props.isSelected} onClick={this.productClicked}>
           <td>{this.props.name}</td>
           <td>{this.props.price}</td>
           <td>{this.props.photo}</td>
           <td>{this.props.quantity}</td>
           <td>{this.props.drugform}</td>
           <td>
               <input type="button" value="delete" onClick={this.clickDelete}/>
           </td>
       </tr>
       )
    }
}

export default Product;