import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {
    static propTypes = {
        selectedProductCode: PropTypes.number,
        drugs: PropTypes.array,
        newProductOn: PropTypes.bool,
        ID: PropTypes.number,
        cbCancel: PropTypes.func,
        cbAdd: PropTypes.func,
        editOn: PropTypes.bool,
        editedProductCode: PropTypes.number,
        editedProductName: PropTypes.string,
        editedProductPrice: PropTypes.number,
        editedProductPhoto: PropTypes.string,
        editedProductQuantity: PropTypes.number,
        editedProductDrugform: PropTypes.string,
        cbChanged: PropTypes.func
    };

    state = {
      inputName: '',
      inputPrice: null,
      inputPhoto: '',
      inputQuantity: null,
      inputDrugform: '',
      addBtnDisabled: true,
      inputNameValid: false,
      inputPriceValid: false,
      inputPhotoValid: false,
      inputQuantityValid: false,
      inputDrugformValid: false,
      allValid: false,
      wasChanged : false
    }

    cancelBtn = (e) => {
        this.props.cbCancel()
        this.setState({ inputNameValid: false,
          inputPriceValid: false,
          inputPhotoValid: false,
          inputQuantityValid: false,
          inputDrugformValid: false,
          allValid: false
        })
    }

    nameChange = (EO) => {
      this.setState( {inputName: EO.target.value} );
      if(this.props.editOn == true) {
        if(EO.target.value != this.props.editedProductName) {
          this.setState ( {wasChanged: true} );
      } else if (EO.target.value == this.props.editedProductName) { this.setState ( {wasChanged: false} );
    }
  }
      if((EO.target.value).length > 0 ) {
        this.setState( {inputNameValid: true} ); 
      } else this.setState( {inputNameValid: false} );
      if((EO.target.value).length > 0 && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true &&this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
        console.log(this.state.inputName);
        console.log(EO.target.value);
        console.log(this.state.allValid);
        console.log(this.state.wasChanged);
        this.props.cbChanged(this.state.wasChanged);
    }

    priceChange = (EO) => {
      this.setState( {inputPrice: (EO.target.value)} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputPriceValid: true} ); 
      } else this.setState( {inputPriceValid: false} );
      if(this.state.inputNameValid== true && (EO.target.value).length > 0 && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
    }

    photoChange = (EO) => {
      this.setState( {inputPhoto: EO.target.value} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputPhotoValid: true} ); 
      } else this.setState( {inputPhotoValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && (EO.target.value).length > 0 && this.state.inputQuantityValid== true && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
    }

    quantityChange = (EO) => {
      this.setState( {inputQuantity: EO.target.value} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputQuantityValid: true} ); 
      } else this.setState( {inputQuantityValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && (EO.target.value).length > 0 && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
    }

    drugformChange = (EO) => {
      this.setState( {inputDrugform: EO.target.value} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputDrugformValid: true} ); 
      } else this.setState( {inputDrugformValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true && (EO.target.value).length > 0) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
    }

    addBtn = (e) => {
      let prod = {};
      prod.name = this.state.inputName;
      prod.code = this.props.ID;
      prod.price = this.state.inputPrice;
      prod.photo = this.state.inputPhoto;
      prod.quantity = this.state.inputQuantity;
      prod.drugform = this.state.inputDrugform;
      this.props.cbAdd(prod);
      this.cancelBtn();
    }

    render() {
        if (this.props.selectedProductCode == null && this.props.newProductOn == false && this.props.editOn == false) { 
            return <div className='nothing'></div>
        } else if (this.props.newProductOn == true || this.props.editOn == true) {
            return ( 
                <div className="new-product-card">
                  {this.props.editOn == true && <h3>Edit existing Product</h3>}
                 {this.props.newProductOn == true && <h3>Add new product</h3>}
                  {this.props.newProductOn == true && <span>ID:{this.props.ID}</span>}
                  {this.props.editOn == true && <span>ID:{this.props.editedProductCode}</span>}
                  <label>
                    <span>Name</span> 
                    <input type="text" defaultValue={this.props.editedProductName} onChange={this.nameChange}/>
                    <span>{(this.state.inputNameValid==false) && "Please, fill the field. Value must be a string"}</span> 
                  </label>
                  <label>
                    <span>Price</span> 
                    <input type="text" defaultValue={this.props.editedProductPrice} onChange={this.priceChange}/>
                    <span>{(this.state.inputPriceValid==false) && "Please, fill the field. Value must be a rational number greater than 0"}</span> 
                  </label>
                  <label>
                    <span>Photo</span> 
                    <input type="text" defaultValue={this.props.editedProductPhoto} onChange={this.photoChange}/>
                    <span>{(this.state.inputPhotoValid==false) && "Please, fill the field. Value must be a valid URL"}</span> 
                  </label>
                  <label>
                    <span>Quantity</span> 
                    <input type="text" defaultValue={this.props.editedProductQuantity} onChange={this.quantityChange}/>
                    <span>{(this.state.inputQuantityValid==false) && "Please, fill the field. Value must be a positive integer"}</span> 
                  </label>
                  <label>
                    <span>Drug Form</span> 
                    <input type="text" defaultValue={this.props.editedProductDrugform} onChange={this.drugformChange}/>
                    <span>{(this.state.inputDrugformValid==false) && "Please, fill the field. Value must be a string"}</span>
                  </label>
                  <label className='buttons'>
                    {this.props.newProductOn == true &&<input type="button" value="Add" onClick={this.addBtn} disabled={!this.state.allValid}/>}
                    {this.props.editOn == true && <input type="button" value="Save" onClick={this.saveBtn} disabled={!this.state.allValid}/>}
                    <input type="button" value="Cancel" onClick={this.cancelBtn}/>
                  </label>

                </div>
              )
        } else return ( 
          <div className="card">
            <h3>{this.props.drugs.map(e => e.code == this.props.selectedProductCode && e.name)} </h3>
            <span>
              Price: {this.props.drugs.map(e => e.code == this.props.selectedProductCode && e.price)}
            </span>
            <span>
              Quantity: {this.props.drugs.map(e => e.code == this.props.selectedProductCode && e.quantity)}
            </span>
            <span>
              Drug Form: {this.props.drugs.map(e => e.code == this.props.selectedProductCode && e.drugform)}
            </span>
          </div>
        )

    }
}

export default ProductCard;