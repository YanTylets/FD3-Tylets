import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



import './Recomended.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280" 

class Recomended extends React.Component {

    static propTypes = {
        movieId: PropTypes.number.isRequired,
    }

    state = {
        recMovies: [],
        dataReady: false
    }

    fetchSuccess = (recMovies) => {
        this.setState({
          dataReady: true,
          recMovies: recMovies
        })
      }

    fetchError = (errorMessage) => {
        console.error(errorMessage);
      };

    componentDidMount() {
      this.loadData();
    }

    loadData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/recommendations?api_key=953aabad8f5d4a2f206f8f80281ffd31&language=ru-RU`)
      .then(res => {
        if(!res.ok)
          throw new Error("fetch error " + res.status);
        else 
          return res.json()
      })
      .then(data => {
        this.fetchSuccess(data.results.slice(0,4))
      })
      .catch (error => {
        this.fetchError(error.massage);
      })
    }


    render() { 
      let recMovie = this.state.recMovies.map(i => 
        <div className='rec-movie' key = {i.id}>
          <NavLink exact to={"/movie/"+i.id}> <img src={IMG_API+i.backdrop_path} alt={i.title}/></NavLink>
          <div className='text-line'>
          <p>{i.title}</p>  
          <p>{Math.floor(i.vote_average*10)}%</p>
          </div>
        </div>);

      if ( !this.state.dataReady )
        return <div>загрузка данных...</div>;


        return (
          <div className='container'>
            <div className='Recommendations'>
            <h2>Recommendations</h2>
            <div className='rec-slider'>
              {recMovie}
            </div>
          </div>
          </div>


        );
    }
}

export default Recomended;