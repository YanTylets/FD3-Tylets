import {FEATURED_API} from '../AppData'
import { moviesLoadingAC, moviesErrorAC, moviesSetAC } from "./moviesListAC";

function moviesThunkAC(dispatch) {
    // Как и любой action creator, moviesThunkAC должен вернуть action,
    // только action будет не хэш, а ФУНКЦИЯ.
    // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
    // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
    // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
    return function() {
        dispatch( moviesLoadingAC() );
        let apiArray = [];
        for(let i=1; i<15; i++) {
          apiArray.push(fetch(FEATURED_API +i)
              .then(res => {
                if(!res.ok)
                  throw new Error("fetch error " + res.status);
                else 
                  return res.json()
                })
            .then(res => res.results))
            }
            Promise.all(apiArray)
              .then(res =>{
                for(let i=1; i<res.length; i++) {
                  res[0] = res[0].concat(res[i]);
                  if(i === res.length-1 ) return res[0]
                }
              })
              .then(data => {
                dispatch( moviesSetAC(data));
                console.log(data)
              })
              .catch (error => {
                console.error(error);
                dispatch(moviesErrorAC());
              })
            
    }

}

export {moviesThunkAC};