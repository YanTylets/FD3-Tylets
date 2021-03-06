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
        cbChanged: PropTypes.func,
        cbSave: PropTypes.func,
        productInfo: PropTypes.object
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
      drugformChange: true,
      editValid: true
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
          drugformChange: true,
          editValid: true
        })
    }

    nameChange = (EO) => {
      this.setState( {nameChange: false, inputName: EO.target.value} );
      if (this.props.editOn==true) {
        if(this.state.priceChange){
          this.setState( {inputPrice: this.props.productInfo.price} )};
        if(this.state.photoChange){
          this.setState( {inputPhoto: this.props.productInfo.photo} )};
        if(this.state.quantityChange){
          this.setState( {inputQuantity: this.props.productInfo.quantity} )};
        if(this.state.drugformChange){
          this.setState( {inputDrugform: this.props.productInfo.drugform} )};
        this.setState( {
          inputPriceValid: true,
          inputPhotoValid: true,
          inputQuantityValid: true,
          inputDrugformValid: true,
        } )
      }
      if((EO.target.value).length > 0 ) {
        this.setState( {inputNameValid: true} ); 
      } else this.setState( {inputNameValid: false} );
      if((EO.target.value).length > 0 && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true &&this.state.inputDrugformValid== true) {
          this.setState( {allValid: true, editValid: true} );
        } else this.setState( {allValid: false, editValid: false} );
        this.props.cbChanged();
        console.log(EO.target.value);
    }

    priceChange = (EO) => {
      this.setState( {inputPrice: (EO.target.value), priceChange: false} )
      if (this.props.editOn==true) {
        if(this.state.nameChange){
          this.setState( {inputName: this.props.productInfo.name} )};
        if(this.state.photoChange){
          this.setState( {inputPhoto: this.props.productInfo.photo} )};
        if(this.state.quantityChange){
          this.setState( {inputQuantity: this.props.productInfo.quantity} )};
        if(this.state.drugformChange){
          this.setState( {inputDrugform: this.props.productInfo.drugform} )};
        this.setState( {
          inputNameValid: true,
          inputPhotoValid: true,
          inputQuantityValid: true,
          inputDrugformValid: true,
        } )
      }
      if(EO.target.value > 0 ) {
        this.setState( {inputPriceValid: true} ); 
      } else this.setState( {inputPriceValid: false} );
      if(this.state.inputNameValid== true && EO.target.value > 0 && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true, editValid: true} );
        } else this.setState( {allValid: false, editValid: false} );
        this.props.cbChanged();
        console.log(EO.target.value);
    }

    photoChange = (EO) => {
      this.setState( {inputPhoto: EO.target.value, photoChange: false} )
      if (this.props.editOn==true) {
        if(this.state.nameChange){
          this.setState( {inputName: this.props.productInfo.name} )};
        if(this.state.priceChange){
          this.setState( {inputPrice: this.props.productInfo.price} )};
        if(this.state.quantityChange){
          this.setState( {inputQuantity: this.props.productInfo.quantity} )};
        if(this.state.drugformChange){
          this.setState( {inputDrugform: this.props.productInfo.drugform} )};
        this.setState( {
          inputNameValid: true,
          inputPriceValid: true,
          inputQuantityValid: true,
          inputDrugformValid: true,
        } )
      }
      if((EO.target.value).length > 0 ) {
        this.setState( {inputPhotoValid: true} ); 
      } else this.setState( {inputPhotoValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && (EO.target.value).length > 0 && this.state.inputQuantityValid== true && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true, editValid: true} );
        } else this.setState( {allValid: false, editValid: false} );
        this.props.cbChanged();
        console.log(EO.target.value);
    }

    quantityChange = (EO) => {
      this.setState( {inputQuantity: (EO.target.value), quantityChange: false} )
      if (this.props.editOn==true) {
        if(this.state.nameChange){
          this.setState( {inputName: this.props.productInfo.name} )};
        if(this.state.priceChange){
          this.setState( {inputPrice: this.props.productInfo.price} )};
        if(this.state.photoChange){
          this.setState( {inputPhoto: this.props.productInfo.photo} )};
        if(this.state.drugformChange){
          this.setState( {inputDrugform: this.props.productInfo.drugform} )};
        this.setState( {
          inputNameValid: true,
          inputPriceValid: true,            
          inputPhotoValid: true,
          inputDrugformValid: true,
        } )
      }
      if(EO.target.value > 0 ) {
        this.setState( {inputQuantityValid: true} ); 
      } else this.setState( {inputQuantityValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && EO.target.value > 0 && this.state.inputDrugformValid== true) {
          this.setState( {allValid: true, editValid: true} );
        } else this.setState( {allValid: false, editValid: false} );
        this.props.cbChanged();
        console.log(EO.target.value);
    }

    drugformChange = (EO) => {
      this.setState( {inputDrugform: EO.target.value, drugformChange: false} )
      if (this.props.editOn==true) {
        if(this.state.nameChange){
          this.setState( {inputName: this.props.productInfo.name} )};
        if(this.state.priceChange){
          this.setState( {inputPrice: this.props.productInfo.price} )};
        if(this.state.photoChange){
          this.setState( {inputPhoto: this.props.productInfo.photo} )};
        if(this.state.quantityChange){
          this.setState( {inputQuantity: this.props.productInfo.quantity} )};
        this.setState( {
          inputNameValid: true,
          inputPriceValid: true,
          inputPhotoValid: true,
          inputQuantityValid: true,
        } )
      }
      if((EO.target.value).length > 0 ) {
        this.setState( {inputDrugformValid: true} ); 
      } else this.setState( {inputDrugformValid: false} );
      if(this.state.inputNameValid== true && this.state.inputPriceValid== true && this.state.inputPhotoValid== true && this.state.inputQuantityValid== true && (EO.target.value).length > 0) {
          this.setState( {allValid: true, editValid: true} );
        } else this.setState( {allValid: false, editValid: false} );
        this.props.cbChanged();
        console.log(EO.target.value);
    }

    addBtn = () => {
      let prod = {};
      prod.name = this.state.inputName;
      prod.code = this.props.ID;
      prod.price = Number(this.state.inputPrice);
      prod.photo = this.state.inputPhoto;
      prod.quantity = Number(this.state.inputQuantity);
      prod.drugform = this.state.inputDrugform;
      this.props.cbAdd(prod);
      this.cancelBtn();
    }

    saveBtn = () => {
      let edit = {};
      edit.name = this.state.inputName;
      edit.code = this.props.editedProductCode;
      edit.price =  Number(this.state.inputPrice);
      edit.photo = this.state.inputPhoto;
      edit.quantity = Number(this.state.inputQuantity);
      edit.drugform = this.state.inputDrugform;
      this.props.cbSave(edit);
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
                      this.state.nameChange?
                      this.props.productInfo.name : 
                      this.state.inputName
                    }
                      onChange={this.nameChange}/>
                    <span>{
                      this.props.editOn?(
                      this.state.nameChange?
                      "":
                      ((this.state.inputNameValid==false) && "Please, fill the field. Value must be a string")):
                      ((this.state.inputNameValid==false) && "Please, fill the field. Value must be a string")
                    }</span> 
                  </label> 
                  <label>
                    <span>Price</span> 
                    <input type="text" value={
                      this.state.priceChange? 
                      this.props.productInfo.price : 
                      this.state.inputPrice
                    }
                     onChange={this.priceChange}/>
                    <span>{
                      this.props.editOn?(
                      this.state.priceChange?
                      "":
                      ((this.state.inputPriceValid==false) && "Please, fill the field. Value must be a rational number greater than 0")):
                      ((this.state.inputPriceValid==false) && "Please, fill the field. Value must be a rational number greater than 0")
                    }</span> 
                  </label>
                  <label>
                    <span>Photo</span> 
                    <input type="text" value={
                      this.state.photoChange? 
                      this.props.productInfo.photo : 
                      this.state.inputPhoto
                    } 
                      onChange={this.photoChange}/>
                    <span>{
                      this.props.editOn?(
                      this.state.photoChange?
                      "":
                      ((this.state.inputPhotoValid==false) && "Please, fill the field. Value must be a valid URL")):
                      ((this.state.inputPhotoValid==false) && "Please, fill the field. Value must be a valid URL")
                    }</span> 
                  </label>
                  <label>
                    <span>Quantity</span> 
                    <input type="text" value={
                      this.state.quantityChange?
                      this.props.productInfo.quantity : 
                      this.state.inputQuantity
                    }
                    onChange={this.quantityChange}/>
                    <span>{
                      this.props.editOn?(
                      this.state.quantityChange?
                      "":
                      ((this.state.inputQuantityValid==false) && "Please, fill the field. Value must be a positive integer")):
                      ((this.state.inputQuantityValid==false) && "Please, fill the field. Value must be a positive integer")
                    }</span> 
                  </label>
                  <label>
                    <span>Drug Form</span> 
                    <input type="text" value={
                      this.state.drugformChange? 
                      this.props.productInfo.drugform : 
                      this.state.inputDrugform
                    }
                     onChange={this.drugformChange}/>
                    <span>{
                      this.props.editOn?(
                      this.state.drugformChange?
                      "":
                      ((this.state.inputDrugformValid==false) && "Please, fill the field. Value must be a string")):
                      ((this.state.inputDrugformValid==false) && "Please, fill the field. Value must be a string")
                    }</span>
                  </label>
                  <label className='buttons'>
                    {this.props.newProductOn == true &&<input type="button" value="Add" onClick={this.addBtn} disabled={!this.state.allValid}/>}
                    {this.props.editOn == true && <input type="button" value="Save" onClick={this.saveBtn} disabled={!this.state.editValid}/>}
                    <input type="button" value="Cancel" onClick={this.cancelBtn}/>
                  </label>

                </div>
              )
        } else return ( 
          <div className="card">
            <h3>{this.props.productInfo.name} </h3>
            <span>
              Price: {this.props.productInfo.price}
            </span>
            <span>
              Quantity: {this.props.productInfo.quantity}
            </span>
            <span>
              Drug Form: {this.props.productInfo.drugform}
            </span>
          </div>
        )

    }
}

export default ProductCard;