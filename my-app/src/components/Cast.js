import React from 'react';
import PropTypes from 'prop-types';



import './Cast.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280" 

class Cast extends React.Component {

    static propTypes = {
        movieId: PropTypes.number.isRequired,
    }

    state = {
        credits: [],
        dataReady: false
    }

    fetchSuccess = (movieCredits) => {
        this.setState({
          dataReady:true,
          credits: movieCredits
        })
      }

    fetchError = (errorMessage) => {
        console.error(errorMessage);
      };

    componentDidMount() {
      this.loadData();
    }

    loadData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=953aabad8f5d4a2f206f8f80281ffd31&language=ru-RU`)
      .then(res => {
        if(!res.ok)
          throw new Error("fetch error " + res.status);
        else 
          return res.json()
      })
      .then(data => {
        this.fetchSuccess(data.cast.slice(0,7))
      })
      .catch (error => {
        this.fetchError(error.massage);
      })
    }


    render() { 
      let actor = this.state.credits.map(i => 
        <div className='actor' key = {i.cast_id}>
          <img src={IMG_API+i.profile_path} alt={i.original_name}/>
          <p>{i.original_name}</p>  
          <p>{i.character}</p>
        </div>);

      if ( !this.state.dataReady )
        return <div>загрузка данных...</div>;

        return (
          <div className='container'>
            <div className='cast'>
            <h2>Main cast</h2>
            <div className='cast-slider'>
              {actor}
            </div>
          </div>
          </div>


        );
    }
}

export default Cast;