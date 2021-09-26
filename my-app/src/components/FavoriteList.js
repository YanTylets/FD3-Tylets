import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import Header from './Header';
import Favorite from "./Favorite";

import './FavoriteList.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280" 

class FavoriteList extends React.PureComponent {


    static propTypes = {
        favorites: PropTypes.array.isRequired,
    }
    componentDidMount() {
        console.log(this.props.favorites)
    }



    render() {
        let list =
        this.props.favorites.map(item => {
        return (
            <li className='list-item' key={item.id}>
            <NavLink to={"/movie/"+item.id}> 
            <img className='list-img' src={IMG_API+item.poster_path}/>
            </NavLink>
            <p className='title'>{item.title}</p>
            <p className='vote'>{item.vote_average}</p>
            <Favorite className="btn" movieId = {item.id} />
          </li>
        )
        })
        return (
            <div className='list-container'>
                <Header></Header>
                <ul className="list">
                    {list}
                </ul>
            </div>

        );
    }
}


const mapStateToProps = function (state) {
    return {
      favorites: state.favorites.data,
    };
  };
  
  export default connect(mapStateToProps)(FavoriteList);