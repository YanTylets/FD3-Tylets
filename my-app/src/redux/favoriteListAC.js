const FAVORITES_LOADING='FAVORITES_LOADING';
const FAVORITES_ERROR='FAVORITES_ERROR';
const FAVORITES_SET='FAVORITES_SET';
const FAVORITES_DELETE ='FAVORITES_DELETE';

const favoritesLoadingAC=function() {
  return {
    type: FAVORITES_LOADING,
  };
}

const favoritesErrorAC=function() {
  return {
    type: FAVORITES_ERROR,
  };
}

const favoritesSetAC=function(favorites) {
  return {
    type: FAVORITES_SET,
    favorites:favorites,
  };
}

const favoriteDeleteAC=function(deleteIndex) {
  return {
    type:FAVORITES_DELETE,
    deleteIndex:deleteIndex
  };
}

export {
  favoritesLoadingAC,FAVORITES_LOADING,
  favoritesErrorAC,FAVORITES_ERROR,
  favoritesSetAC,FAVORITES_SET,
  favoriteDeleteAC,FAVORITES_DELETE
}