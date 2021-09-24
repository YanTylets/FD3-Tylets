import { MOVIES_LOADING, MOVIES_ERROR, MOVIES_SET } from './moviesListAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function moviesListReducer(state=initState,action) {
  switch (action.type) {

    case MOVIES_LOADING: {
      let newState={
        status:'loading',
        data:null,
      };
      return newState;
    }

    case MOVIES_ERROR: {
      let newState={
        status:'error',
        data:null,
      };
      return newState;
    }

    case MOVIES_SET: {
      let newState={
        status:'ok',
        data:action.movies,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default moviesListReducer;