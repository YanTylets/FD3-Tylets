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
        deleteDisabled: PropTypes.bool,
        editDisabled: PropTypes.bool,
        newProductOn: PropTypes.bool,
        editedProductChange: PropTypes.bool
    };

    productClicked = (e) => {
        if (this.props.newProductOn == true || this.props.editedProductChange == true) return
        this.props.cbSelected(this.props.code);
    };

    clickDelete = (el) => {
        el.stopPropagation();
        this.props.cbdelete(this.props.code, this.props.name)                          
    }

    clickEdit = (e) => {
        e.stopPropagation();
        this.props.cbedit(this.props.code);
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
               <input type="button" value="delete" onClick={this.clickDelete} disabled={this.props.deleteDisabled}/>
               <input type="button" value="edit" onClick={this.clickEdit} disabled={this.props.editDisabled}/>
           </td>
       </tr>
       )
    }
}

export default Product;