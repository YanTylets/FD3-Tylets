import React from 'react';
import PropTypes from 'prop-types';

import './MainShop.css';

import Product from './Product';
import ProductCard from './ProductCard';


class MainShop extends React.Component {

  static propTypes = {
        shopName: PropTypes.string,
        drugs: PropTypes.array,
    };

    state = {
       drugs: this.props.drugs,
       productClass: 'product',
       productClassActive: 'product-active',
       selectedProductCode: null,
       newProductOn: false,
       maxID: 6,
       deleteDisabled: false,
       editDisabled: false,
       newProdBtnClass: 'new-product-btn',
       editOn: false,
       editedProductCode: null,
       editedProductName: false,
       editedProductPrice: false,
       editedProductPhoto: false,
       editedProductQuantity: false,
       editedProductDrugform: false, 
       editedProductChange: false,
       editedMarker: false
    }

    productSelected = (code) => {
      this.setState( {productClass: 'product'} );
      console.log('selected ' +code);
      this.setState( {selectedProductCode: code, editOn: false, newProdBtnClass: 'new-product-btn', deleteDisabled:false, 
      editedProductName: false,
      editedProductPrice: false,
      editedProductPhoto: false,
      editedProductQuantity: false,
      editedProductDrugform: false, } );
      console.log(this.state.drugs);
      this.setState( {selectedProductCode: code} );

  }

    delete = (code, name) => {
    if(confirm(`Delete '${name}'?`))  
    this.setState( {drugs: this.state.drugs.filter(i => i.code != code)} )                   
}

    newProduct = (e) => {
      this.setState( {newProductOn:true, 
        selectedProductCode:null, deleteDisabled:true, editDisabled:true,
        newProdBtnClass: this.state.newProdBtnClass+'-on' } ) 
    }

    cancelNewProd = () => {
      this.setState( {newProductOn:false, newProdBtnClass: 'new-product-btn', 
      deleteDisabled:false, editDisabled:false, editOn:false, 
      editedProductName: false,
      editedProductPrice: false,
      editedProductPhoto: false,
      editedProductQuantity: false,
      editedProductDrugform: false, 
      editedMarker: false,
      editedProductChange: false} )
    }

    addNewProd = (prod) => {
      this.state.drugs.push(prod);
      console.log(prod);
      console.log(this.state.drugs);
      this.setState ( {maxID: this.state.maxID+=1} )
    }
    edit = (code) => {
      this.setState( {editOn: true, editedProductCode: code, selectedProductCode:null, 
        newProdBtnClass: 'new-product-btn-on', 
        editedProductName: true,
        editedProductPrice: true,
        editedProductPhoto: true,
        editedProductQuantity: true,
        editedProductDrugform: true, 
        deleteDisabled:true,
        editedMarker: true
      } );
      
      console.log(this.state.editedProductName)
    }

    changed = (name, price, photo, quantity, drugform) => {
      this.setState( { editedProductChange: true, editDisabled: true,
        editedProductName: name,
        editedProductPrice: price,
        editedProductPhoto: photo,
        editedProductQuantity: quantity,
        editedProductDrugform: drugform,} );
      console.log(this.state.editedProductChange)
    }



    render() {

        let drugsList = this.state.drugs.map(e => 
           <Product key={e.code} name={e.name}
            price={e.price} photo={e.photo} quantity={e.quantity} drugform={e.drugform} code={e.code}
            productClass={this.state.productClass}
            productClassActive={this.state.productClassActive}
            selectedProductCode={this.state.selectedProductCode}
            cbSelected={this.productSelected}
            isSelected=
            {
              (this.state.selectedProductCode == e.code)
              ? this.state.productClassActive 
              :
               this.state.productClass}
            cbdelete={this.delete}

            deleteDisabled={this.state.deleteDisabled}
            editDisabled={this.state.editDisabled}
            newProductOn={this.state.newProductOn}
            cbedit={this.edit}
            editedProductChange={this.state.editedProductChange}


          />
               
        );

        return (
          <div className="Main">
            <h1 className="Name">{this.props.shopName}</h1>
            <table className="Table">
              <thead className="Table-header">
                <tr>
                  <th>"Name"</th>
                  <th>"Price"</th>
                  <th>"Photo"</th>
                  <th>"Quantity"</th>
                  <th>"Drug Form"</th>
                  <th>"Control"</th>
                </tr>
              </thead>
              <tbody className='Drugs-List'>
                {drugsList}
              </tbody>
            </table>

            <input className={this.state.newProdBtnClass} type="button" value="New product" onClick={this.newProduct}/>
            <ProductCard selectedProductCode={this.state.selectedProductCode}
            drugs={this.state.drugs}
            newProductOn={this.state.newProductOn}
            ID={this.state.maxID}
            cbCancel={this.cancelNewProd}
            cbAdd={this.addNewProd}
            editOn={this.state.editOn}
            editedProductCode={this.state.editedProductCode}
            editedProductName={this.state.editedProductName}
            editedProductPrice={this.state.editedProductPrice}
            editedProductPhoto={this.state.editedProductPhoto}
            editedProductQuantity={this.state.editedProductQuantity}
            editedProductDrugform={this.state.editedProductDrugform}
            cbChanged={this.changed}
            editedMarker={this.state.editedMarker}
            />

          </div>
        )
    }
}

export default MainShop;