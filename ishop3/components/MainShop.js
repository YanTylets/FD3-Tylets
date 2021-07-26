import React from 'react';
import PropTypes from 'prop-types';

import './MainShop.css';

import Product from './Product';

class MainShop extends React.Component {

  static propTypes = {
        shopName: PropTypes.string,
        drugs: PropTypes.array,
    };

    state = {
       drugs: this.props.drugs,
       productClass: 'product',
       productClassActive: 'product-active',
       selectedProductCode: null
    }

    productSelected = (code) => {
      this.setState( {productClass: 'product'} );
      console.log('selected ' +code);
      console.log(this.state.drugs);
      this.setState( {selectedProductCode: code} );
  }

    delete = (code, name) => {
    if(confirm(`Delete '${name}'?`))  
    this.setState( {drugs: this.state.drugs.filter(i => i.code != code)} )                   
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
          </div>
        )
    }
}

export default MainShop;