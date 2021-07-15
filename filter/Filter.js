var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        strings:React.PropTypes.array,
    },

    getInitialState: function() {
        return {
            strings: this.props.strings,
            checkboxClicked: false,
            checked: false,
            changedText: '',
        }
    },
    sortABC: function() {
        if(this.state.checkboxClicked == false) {
          let newStrings = this.state.strings.slice();
          this.setState( {strings:newStrings.sort(), checkboxClicked: true, checked: true } );
        } else {
          this.setState( {strings:this.props.strings,
          checkboxClicked: false, checked: false } );
        }
        console.log(this.state.checkboxClicked);
        console.log(this.state.strings);
        console.log(this.props.strings);
    },
    reset: function() {
        this.setState( {strings:this.props.strings,
            checkboxClicked: false, checked:false, changedText: ''} );
        },

    letterSort: function(EO) { 
            console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value);
            this.setState( {changedText: EO.target.value, strings:this.state.strings.filter(i => i.indexOf(EO.target.value)!=-1)} );
            console.log(this.state.changedText);
            console.log(this.state.strings);
            console.log(this.props.strings);
          },

    render: function() {

        let list = [] 
        this.state.strings.forEach((e, i) => {
           let str = React.DOM.li({key: i}, e)
           list.push(str);
        });
        
        

        return React.DOM.div({className:'Main'},
          React.DOM.input({type:'checkbox', className:'Checkbox', onClick:this.sortABC, checked: this.state.checked}),
          React.DOM.input({type:'text', className:'Text', onChange:this.letterSort, value: this.state.changedText}),
          React.DOM.input({type:'button', value:'Сброс', className:'Reset', onClick:this.reset}),
          React.DOM.ul({className:'List'}, list)
        )
    }
})