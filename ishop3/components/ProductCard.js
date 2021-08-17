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
        editedProductName: PropTypes.bool,
        editedProductPrice: PropTypes.bool,
        editedProductPhoto: PropTypes.bool,
        editedProductQuantity: PropTypes.bool,
        editedProductDrugform: PropTypes.bool,
        cbChanged: PropTypes.func,
        editedMarker: PropTypes.bool
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
      nameChange: true, 
      priceChange: true, 
      photoChange: true, 
      quantityChange: true, 
      drugformChange: true
    }

    cancelBtn = (e) => {
        this.props.cbCancel()
        this.setState({ 
          inputName: '',
          inputPrice: null,
          inputPhoto: '',
          inputQuantity: null,
          inputDrugform: '',
          inputNameValid: false,
          inputPriceValid: false,
          inputPhotoValid: false,
          inputQuantityValid: false,
          inputDrugformValid: false,
          allValid: false,
          nameChange: true, 
          priceChange: true, 
          photoChange: true, 
          quantityChange: true, 
          drugformChange: true
        })
    }

    nameChange = (EO) => {
      this.setState( {nameChange: false, inputName: EO.target.value} );
      if((EO.target.value).length > 0 ) {
        this.setState( {inputNameValid: true} ); 
      } else this.setState( {inputNameValid: false} );
      if((EO.target.value).length > 0 && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true &&this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
        this.props.cbChanged(this.state.nameChange, this.state.priceChange, this.state.photoChange, this.state.quantityChange, this.state.drugformChange);
    }

    priceChange = (EO) => {
      this.setState( {inputPrice: (EO.target.value), priceChange: false} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputPriceValid: true} ); 
      } else this.setState( {inputPriceValid: false} );
      if(this.state.inputNameValid== true && (EO.target.value).length > 0 && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
        this.props.cbChanged(this.state.nameChange, this.state.priceChange, this.state.photoChange, this.state.quantityChange, this.state.drugformChange);
    }

    photoChange = (EO) => {
      this.setState( {inputPhoto: EO.target.value, photoChange: false} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputPhotoValid: true} ); 
      } else this.setState( {inputPhotoValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && (EO.target.value).length > 0 && this.state.inputQuantityValid== true && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
        this.props.cbChanged(this.state.nameChange, this.state.priceChange, this.state.photoChange, this.state.quantityChange, this.state.drugformChange);
    }

    quantityChange = (EO) => {
      this.setState( {inputQuantity: EO.target.value, quantityChange: false} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputQuantityValid: true} ); 
      } else this.setState( {inputQuantityValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && (EO.target.value).length > 0 && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
        this.props.cbChanged(this.state.nameChange, this.state.priceChange, this.state.photoChange, this.state.quantityChange, this.state.drugformChange);
    }

    drugformChange = (EO) => {
      this.setState( {inputDrugform: EO.target.value, drugformChange: false} )
      if((EO.target.value).length > 0 ) {
        this.setState( {inputDrugformValid: true} ); 
      } else this.setState( {inputDrugformValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true && (EO.target.value).length > 0) {
          this.setState( {allValid: true} );
        } else this.setState( {allValid: false} );
        this.props.cbChanged(this.state.nameChange, this.state.priceChange, this.state.photoChange, this.state.quantityChange, this.state.drugformChange);
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
                    <input type="text" value={
                      this.props.editedProductName? 
                      this.props.drugs.map(e => e.code == this.props.editedProductCode && e.name).filter(a => a != false) : 
                      this.state.inputName
                    } 
                      onChange={this.nameChange}/>
                    <span>{(this.state.inputNameValid==false) && "Please, fill the field. Value must be a string"}</span> 
                  </label> 
                  <label>
                    <span>Price</span> 
                    <input type="text" value={
                      this.props.editedProductPrice? 
                      this.props.drugs.map(e => e.code == this.props.editedProductCode && e.price).filter(a => a != false) : 
                      this.state.inputPrice
                    }
                     onChange={this.priceChange}/>
                    <span>{(this.state.inputPriceValid==false) && "Please, fill the field. Value must be a rational number greater than 0"}</span> 
                  </label>
                  <label>
                    <span>Photo</span> 
                    <input type="text" value={
                      this.props.editedProductPhoto? 
                      this.props.drugs.map(e => e.code == this.props.editedProductCode && e.photo).filter(a => a != false) : 
                      this.state.inputPhoto
                    } 
                      onChange={this.photoChange}/>
                    <span>{(this.state.inputPhotoValid==false) && "Please, fill the field. Value must be a valid URL"}</span> 
                  </label>
                  <label>
                    <span>Quantity</span> 
                    <input type="text" value={
                      this.props.editedProductQuantity? 
                      this.props.drugs.map(e => e.code == this.props.editedProductCode && e.quantity).filter(a => a != false) : 
                      this.state.inputQuantity
                    }
                    onChange={this.quantityChange}/>
                    <span>{(this.state.inputQuantityValid==false) && "Please, fill the field. Value must be a positive integer"}</span> 
                  </label>
                  <label>
                    <span>Drug Form</span> 
                    <input type="text" value={
                      this.props.editedProductDrugform? 
                      this.props.drugs.map(e => e.code == this.props.editedProductCode && e.drugform).filter(a => a != false) : 
                      this.state.inputDrugform
                    }
                     onChange={this.drugformChange}/>
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