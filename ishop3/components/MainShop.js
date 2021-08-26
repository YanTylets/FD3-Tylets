import React from 'react';
import PropTypes from 'prop-types';

import './MainShop.css';

import Product from './Product';
import ProductCard from './ProductCard';


class MainShop extends React.Component {

  static propTypes = {
        shopName: PropTypes.string.isRequired,
        drugs: PropTypes.array.isRequired,
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
    }

    productSelected = (code) => {
      console.log('selected ' +this.state.selectedProductCode);
      this.setState( {selectedProductCode: code, editOn: false, newProdBtnClass: 'new-product-btn', 
      deleteDisabled:false } ); 
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
      editedProductChange: false} )
    }

    addNewProd = (prod) => {
      this.state.drugs.push(prod);
      this.setState ( {maxID: this.state.maxID+=1} )
    }
    edit = (code) => {
      console.log(this.state.editedProductCode)
      this.setState( {editOn: true, editedProductCode: code, selectedProductCode:null, 
        newProdBtnClass: 'new-product-btn-on', 
        deleteDisabled:true,
      } );

    }

    changed = () => {
      this.setState( { editedProductChange: true, editDisabled: true} );
    }

    save =(edit) => {
      this.state.drugs.splice((this.state.drugs.findIndex(item => item.code == this.state.editedProductCode)), 1, edit);
      console.log(edit);
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
        let defaultProductInfo = {"name":" ", "code":null, "price":null, "photo":" ", " quantity":null, "drugform":" "}
        let productInfo = this.state.drugs.find(e => e.code == (this.state.selectedProductCode || this.state.editedProductCode))

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
            <ProductCard 
            productInfo={(this.state.editOn || this.state.selectedProductCode!=null) ?
              productInfo:
              defaultProductInfo
              }
            selectedProductCode={this.state.selectedProductCode}
            drugs={this.state.drugs}
            newProductOn={this.state.newProductOn}
            ID={this.state.maxID}
            cbCancel={this.cancelNewProd}
            cbAdd={this.addNewProd}
            editOn={this.state.editOn}
            editedProductCode={this.state.editedProductCode}
            cbChanged={this.changed}
            cbSave={this.save}
            />

          </div>
        )
    }
}

export default MainShop;