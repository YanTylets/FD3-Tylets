import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Cast from './Cast';
import MyChart from './Chart';
import Favorite from './Favorite';


import './MovieInfo.css';
import Recomended from './Recomended';

const IMG_API = "https://image.tmdb.org/t/p/w1280"

class MovieInfo extends React.PureComponent {

    static propTypes = {
        movieId: PropTypes.number.isRequired,
      }

    state = {
        info: [],
        dataReady: false,
        added: false
    }

    componentDidUpdate(prevProps) {
      if (this.props.movieId !== prevProps.movieId) {
        this.loadData();
        this.setState ({dataReady:false})
      }
    }
    


    fetchSuccess = (movieInfo) => {
        this.setState({
          dataReady:true,
          info: movieInfo
        })
      }

    fetchError = (errorMessage) => {
        console.error(errorMessage);
      };

    componentDidMount() {
      this.loadData();
      console.log(this.props.movieId)
    }

    loadData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}?api_key=953aabad8f5d4a2f206f8f80281ffd31&language=ru-RU`)
      .then(res => {
        if(!res.ok)
          throw new Error("fetch error " + res.status);
        else 
          return res.json()
      })
      .then(data => {
        this.fetchSuccess(data)
      })
      .catch (error => {
        this.fetchError(error.massage);
      })
    }
    


    render() {
        
        let rating = this.state.info.vote_average*10;


        if ( !this.state.dataReady )
        return <div>загрузка данных...</div>;
  
        return(
            <div className='movie_info'>
                <Header/>
                <div className="movie-main-info" style={{
                  background:`radial-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1) ), 
                  no-repeat center/cover url(
                    ${this.state.info.backdrop_path? 
                    IMG_API+this.state.info.backdrop_path:
                    "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                    }`}}>
                    
                  <img src=
                  {this.state.info.poster_path ? 
                  (IMG_API + this.state.info.poster_path) :
                  "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                  } className="poster-image" alt={this.state.info.title}/>
                  <div className="text-info">
                  <h1>
                    {this.state.info.title} {this.state.info.release_date ? `(${this.state.info.release_date.slice(0,4)})` : ''}
                  </h1>
                  <p className="original-title">{this.state.info.original_title}</p>
                  <p style={{fontStyle:"italic", margin:0}}>{this.state.info.runtime} min</p>
                  <p className="genre">
                    {this.state.info.genres?
                    (this.state.info.genres.map(i => i.name)).join(', '):
                    ''} 
                  </p>
                  <div className='bttn-rating'>
                  <div className='rating'>
                        <div className='percent'>{rating}%</div>
                        <MyChart className='circle' vote={this.state.info.vote_average}/>
                    </div>
                      <Favorite movieId = {this.props.movieId}/>
                    </div>
                  <p style={{ fontStyle:"italic", fontFamily:'Helvetica Neue', fontSize:"23px", opacity:"0.6"}}>{this.state.info.tagline}</p>

                  <div>
                    <h2>Описание</h2>
                    {this.state.info.overview}
                  </div>
                  </div>
                </div>
                <Cast movieId = {this.props.movieId}/>
                <Recomended movieId = {this.props.movieId}/>
            </div>
            
        );
    }
}

export default MovieInfo;