import React from 'react';
<<<<<<< HEAD
import PropTypes, { oneOfType } from 'prop-types';
=======
import PropTypes from 'prop-types';
>>>>>>> 4bd5b47e9a9938e2f8e24d9f8078f8279fdd5df2

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
<<<<<<< HEAD
        deleteDisabled: PropTypes.bool,
        editDisabled: PropTypes.bool,
        newProductOn: PropTypes.bool,
        editedProductChange: PropTypes.bool
    };

    productClicked = (e) => {
        if (this.props.newProductOn == true || this.props.editedProductChange == true) return
=======
    };

    productClicked = (e) => {
>>>>>>> 4bd5b47e9a9938e2f8e24d9f8078f8279fdd5df2
        this.props.cbSelected(this.props.code);
    }

    clickDelete = (el) => {
        el.stopPropagation();
        this.props.cbdelete(this.props.code, this.props.name)                          
    }
<<<<<<< HEAD
    clickEdit = (e) => {
        e.stopPropagation();
        this.props.cbedit(this.props.code, this.props.name, this.props.price, this.props.photo, this.props.quantity, this.props.drugform);
    }
=======
>>>>>>> 4bd5b47e9a9938e2f8e24d9f8078f8279fdd5df2

    render() {
       return (
       <tr key={this.props.code} className={this.props.isSelected} onClick={this.productClicked}>
           <td>{this.props.name}</td>
           <td>{this.props.price}</td>
           <td>{this.props.photo}</td>
           <td>{this.props.quantity}</td>
           <td>{this.props.drugform}</td>
           <td>
<<<<<<< HEAD
               <input type="button" value="delete" onClick={this.clickDelete} disabled={this.props.deleteDisabled}/>
               <input type="button" value="edit" onClick={this.clickEdit} disabled={this.props.editDisabled}/>
=======
               <input type="button" value="delete" onClick={this.clickDelete}/>
>>>>>>> 4bd5b47e9a9938e2f8e24d9f8078f8279fdd5df2
           </td>
       </tr>
       )
    }
}

export default Product;