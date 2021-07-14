var DrugsList = React.createClass({

    displayName: 'DrugList',

    propTypes: {
        shopName: React.PropTypes.string,
        drugs: React.PropTypes.array
    },

    render: function() {
        let table = [];
        drugsArr.forEach((el) => {
            let drug = 
              React.DOM.tr({key: el.code, className: el.name}, 
                React.DOM.td(null, el.name),
                React.DOM.td(null, el.price),
                React.DOM.td(null, el.photo),
                React.DOM.td(null, el.quantity),
                React.DOM.td(null, el.drugform)
                );
            table.push(drug);
        }
        );
        console.log(table);

       

        return React.DOM.div({className:'Main'},
          React.DOM.h1({className:'Name'}, this.props.shopName),
          React.DOM.table({className:'Table'},
            React.DOM.thead({className:'Table-header'},
              React.DOM.tr(null, 
                React.DOM.th(null, 'Name'),
                React.DOM.th(null, 'Price'),
                React.DOM.th(null, 'Photo'),
                React.DOM.th(null, 'Quantity'),
                React.DOM.th(null, 'Drug Form')
              )
            ),
            React.DOM.tbody({className:'Table-body'}, table)
          )
        );
    },
});