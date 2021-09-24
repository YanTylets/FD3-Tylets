const MOVIES_LOADING='MOVIES_LOADING';
const MOVIES_ERROR='MOVIES_ERROR';
const MOVIES_SET='MOVIES_SET';

const moviesLoadingAC=function() {
  return {
    type: MOVIES_LOADING,
  };
}

const moviesErrorAC=function() {
  return {
    type: MOVIES_ERROR,
  };
}

const moviesSetAC=function(movies) {
  return {
    type: MOVIES_SET,
    movies:movies,
  };
}

export {
  moviesLoadingAC,MOVIES_LOADING,
  moviesErrorAC,MOVIES_ERROR,
  moviesSetAC,MOVIES_SET,
}