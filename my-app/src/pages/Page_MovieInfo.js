import React from 'react';

import MovieInfo from '../components/MovieInfo';

class Page_MovieInfo extends React.PureComponent {

    render() {
        let movieId=parseInt(this.props.match.params.mid);
        console.log(movieId);

        return(
            <MovieInfo
              movieId ={movieId}
            />
       );
    }
}

export default Page_MovieInfo;