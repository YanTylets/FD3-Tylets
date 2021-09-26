import { FAVORITES_LOADING, FAVORITES_ERROR, FAVORITES_SET, FAVORITES_DELETE} from './favoriteListAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: [],

}

function favoriteListReducer(state=initState,action) {
  switch (action.type) {

    case FAVORITES_LOADING: {
        let newState={...state};
        newState.status='loading';
        // newState.data=[...newState.data,null];
      return newState;
    }

    case FAVORITES_ERROR: {
      let newState={...state};
      newState.status='error';
    //   newState.data=[...newState.data,null];
      return newState;
    }

    case FAVORITES_SET: {
      console.log('state до обработки редьюсером:', state)
      let newState={...state};
        newState.status='ok';
        newState.data=[...newState.data,action.favorites];
        console.log('state после обработки редьюсером:', newState)
      return newState;
    }

    case FAVORITES_DELETE: {
      let newState={...state};
        newState.status='ok';
        newState.data=newState.data.slice()
        newState.data.splice(action.deleteIndex,1);
        console.log('state после обработки редьюсером:', newState);


      return newState;
    }
    
    default:
      return state;
  }
}

export default favoriteListReducer;