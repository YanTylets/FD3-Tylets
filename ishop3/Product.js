var Product = React.createClass({

    displayName: 'Product',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        photo: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired,
        drugform: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        productClass: React.PropTypes.string.isRequired,
        productClassActive: React.PropTypes.string.isRequired,
        selectedProductCode: React.PropTypes.number,
        cbSelected: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.string.isRequired,
        cbdelete: React.PropTypes.func.isRequired,

    },
    productClicked: function(e) {
        this.props.cbSelected(this.props.code);
    },

    clickDelete: function(el) {
        el.stopPropagation();
        this.props.cbdelete(this.props.code, this.props.name)                          
    },


    render: function() {
       return React.DOM.tr({key: this.props.code, className: this.props.isSelected, onClick: this.productClicked}, 
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null, this.props.photo),
            React.DOM.td(null, this.props.quantity),
            React.DOM.td(null, this.props.drugform),
            React.DOM.td(null, React.DOM.input( {type: 'button', value: 'delete', onClick: this.clickDelete}))
            );
    }


})