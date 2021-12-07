import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import './Movie.css'
const IMG_API = "https://image.tmdb.org/t/p/w1280"

class Movie extends React.PureComponent {


    static propTypes = {
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }

    setVoteClass = (vote) => {
        if(vote >= 7.5) {
            return 'green';
        } else if(vote >= 6) {
            return 'orange';
        } else {
            return 'red';
        }
    }
    render() {
        return (

            <div className="movie">           
                  <img src=
                  {this.props.poster_path ? 
                  (IMG_API + this.props.poster_path) :
                  "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                  } alt={this.props.title}/>
                  <div className="movie-info">
                      <h3>{this.props.title}</h3>
                      <span className={
                          `tag ${this.setVoteClass(this.props.vote_average)}`
                    }>
                          {this.props.vote_average}</span>
                  </div>

                  <div className="movie-over">
                      <h2>Описание:</h2>
                      <p>{this.props.overview}</p>
                      <NavLink to={"/FD3-Tylets/movie/"+this.props.id} className="movie-info-link"> Подробнее...</NavLink>



                  </div>
            </div>
        )
    }
};

export default Movie;