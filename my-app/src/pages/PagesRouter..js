import React from 'react';
import { Route } from 'react-router-dom';
import Page_MoviesList from './Page_MoviesList';
import Page_MovieInfo from './Page_MovieInfo';
import Page_FavoriteList from './Page_FavoriteList';
import Page_MoviesList_pages from './Page_MovieList_pages';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import combinedReducer from '../redux/reducers';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

let store=createStore(combinedReducer, persistedState, applyMiddleware(thunk));

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

class PagesRouter extends React.Component {
          
    render() {
  
      return (
        <Provider store={store}>
        <div>
          <Route path="/FD3-Tylets" exact component={Page_MoviesList} />
          <Route path="/FD3-Tylets/pages/:page" exact component={Page_MoviesList_pages} />
          <Route path="/FD3-Tylets/movie/:mid" exact component={Page_MovieInfo} />
          <Route path="/FD3-Tylets/favlist" exact component={Page_FavoriteList} />
        </div>
        </Provider>
      );
      
    }
  
  }
      
  export default PagesRouter;