var MainShop = React.createClass({

    displayName: 'MainShop',

    propTypes: {
        shopName: React.PropTypes.string,
        drugs: React.PropTypes.array
    },

    getInitialState: function() {
      return {
       drugs: this.props.drugs,
       productClass: 'product',
       productClassActive: 'product-active',
       selectedProductCode: null
      };
    },

    productSelected: function(code) {
      this.setState( {productClass: 'product'} );
      console.log('selected ' +code);
      console.log(this.state.drugs);
      this.setState( {selectedProductCode: code} );
  },
    delete: function(code, name) {
    if(confirm(`Delete '${name}'?`))  
    this.setState( {drugs: this.state.drugs.filter(i => i.code != code)} )                   
},

    render: function() {

        let drugsList = this.state.drugs.map(e => 
           React.createElement(Product, {key:e.code, name: e.name, 
            price: e.price, photo: e.photo, quantity: e.quantity, drugform: e.drugform, code: e.code,
            productClass: this.state.productClass,
            productClassActive: this.state.productClassActive,
            selectedProductCode: this.state.selectedProductCode,
            cbSelected: this.productSelected,
            isSelected: ((this.state.selectedProductCode == e.code)? this.state.productClassActive : this.state.productClass),
            cbdelete: this.delete,
          })
               
        );
        

       

        return React.DOM.div({className:'Main'},
          React.DOM.h1({className:'Name'}, this.props.shopName),
          React.DOM.table({className:'Table'},
            React.DOM.thead({className:'Table-header'},
              React.DOM.tr(null, 
                React.DOM.th(null, 'Name'),
                React.DOM.th(null, 'Price'),
                React.DOM.th(null, 'Photo'),
                React.DOM.th(null, 'Quantity'),
                React.DOM.th(null, 'Drug Form'),
                React.DOM.th(null, 'Control')
              )
            ),
            React.DOM.tbody({className:'Drugs-List'}, drugsList)
          )
        );
    },
});