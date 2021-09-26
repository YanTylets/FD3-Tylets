import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { favoritesThunkAC } from '../redux/fetchThunk';
import { favoriteDeleteAC } from '../redux/favoriteListAC';

import './Favorite.css';

class Favorite extends React.PureComponent {

    static propTypes = {
        movieId: PropTypes.number.isRequired,
        favorites: PropTypes.object.isRequired,
    }
    state = {
        added: false
    }

componentDidMount(){
    if (this.props.favorites.data.findIndex(i => i.id === this.props.movieId) === -1){
        this.setState({added:false})
    } else this.setState({added:true})
}

    addToFavoriteList = () => {
        this.props.dispatch(favoritesThunkAC(this.props.dispatch, this.props.movieId) );
        console.log(this.props.favorites.data.findIndex(i=>i.id===this.props.movieId))

        this.setState({added:true})
    } 
    delete = () => {
        let deleteIndex = this.props.favorites.data.findIndex(i=>i.id===this.props.movieId)
        this.props.dispatch(favoriteDeleteAC(deleteIndex) );
        console.log(deleteIndex)
        this.setState({added:false})
    } 

  render() {
      return ( <div className='buttons'>
            {!this.state.added?
            <div className='button heart' onClick={this.addToFavoriteList} title='Добавить в Избранное'></div> :
            <div className='button cross'  onClick={this.delete} title='Удалить из Избранного'></div>
            }
            </div>

      );
  }
}

const mapStateToProps = function (state) {
    return {
      favorites: state.favorites,
    };
  };
  
  export default connect(mapStateToProps)(Favorite);