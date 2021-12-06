import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { moviesThunkAC } from "./redux/fetchThunk";

import './App.css';

import Movie from './components/Movie';
import Header from './components/Header';
import Pagination from './components/Pagination';


class App extends React.PureComponent {

  state = {
    update: false,
    perPage: 24
  }

  static propTypes = {
    page: PropTypes.number,
    movies: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.dispatch( moviesThunkAC(this.props.dispatch) );
  }


  render() {
    let moviesList =
      this.props.movies.data ?
      (this.props.page?
          (this.props.movies.data.slice(((this.props.page*this.state.perPage + 1*this.props.page)-this.state.perPage), (this.props.page*this.state.perPage + 1*this.props.page)).map((movie) =>
          <Movie 
            key={movie.id} 
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
            vote_average={movie.vote_average}
            id={movie.id}
          />
        )) :
        (this.props.movies.data.slice(0, this.state.perPage).map((movie) =>
        <Movie 
          key={movie.id} 
          title={movie.title}
          poster_path={movie.poster_path}
          overview={movie.overview}
          vote_average={movie.vote_average}
          id={movie.id}
        />
      ))):
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
        <Pagination currPage={this.props.page}/>
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


