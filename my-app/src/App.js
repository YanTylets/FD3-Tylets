import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { moviesThunkAC } from "./redux/fetchThunk";

import './App.css';

import Movie from './components/Movie';
import Header from './components/Header';


class App extends React.PureComponent {

  static propTypes = {
    movies: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch( moviesThunkAC(this.props.dispatch) );
    console.log(this.props.movies)
  }


  render() {
    let moviesList =
      this.props.movies.data ?
        this.props.movies.data.map((movie) =>
          <Movie 
            key={movie.id} 
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
            vote_average={movie.vote_average}
            id={movie.id}
          />
        ) : 
        <div></div>

    if ( this.props.movies.status==='loading' )
    return "загрузка...";

  if ( this.props.movies.status==='error' )
    return "ошибка загрузки данных";

      return (
        <div>
          <Header/>
        <div className="App">
          {moviesList}
        </div>
        </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(App);


