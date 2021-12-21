import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Pagination.css'


class Pagination extends React.PureComponent {

    static propTypes = {
        currPage: PropTypes.number,
        movies: PropTypes.object.isRequired
    }

    state = {
        pages:[]
    }
    componentDidUpdate(prevProps) {
        if(this.props.currPage !== prevProps.currPage){
        return this.creator()
        }

    }


    componentDidMount() {
        this.creator();
    }

    creator = () => {
        const pages = [];
        const pagesCount =this.props.movies.data ? Math.ceil((this.props.movies.data.length)/24) : 1;
        const currPage = this.props.currPage ? this.props.currPage : 1;
        if(pagesCount > 5) {
            if(currPage > 3) {
                for (let i = currPage-2; i <= currPage+2; i++) {
                    pages.push(i)
                    if(i === pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 5; i++) {
                    pages.push(i)
                    if(i === pagesCount) break
                }
            }
        }  else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
        this.setState({pages:pages})
}

    render() {
        return(
            <div className='pages'>
                {this.state.pages.map((page, index)=> 
                <NavLink to={`/FD3-Tylets/pages/${page}`} key ={index}><span key={index} className={this.props.currPage===page ? 'current-page' : 'page'}>{page}</span></NavLink>
                )}

            </div>

        );
    }

}

const mapStateToProps = function (state) {
    return {
      movies: state.movies,
    };
  };
  
  export default connect(mapStateToProps)(Pagination);