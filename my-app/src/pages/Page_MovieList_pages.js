import React from 'react';
import App from '../App';



class Page_MoviesList_pages extends React.PureComponent {

    render() {
        let page=parseInt(this.props.match.params.page);
        return (

            <App page={page}/>

        );
    }
}

export default Page_MoviesList_pages;