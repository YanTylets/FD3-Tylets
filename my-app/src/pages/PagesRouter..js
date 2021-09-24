import React from 'react';
import { Route } from 'react-router-dom';
import Page_MoviesList from './Page_MoviesList';
import Page_MovieInfo from './Page_MovieInfo';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import combinedReducer from '../redux/reducers';

let store=createStore(combinedReducer, applyMiddleware(thunk));







class PagesRouter extends React.Component {
          
    render() {
  
      return (
        <Provider store={store}>
        <div>
          <Route path="/" exact component={Page_MoviesList} />
          <Route path="/movie/:mid" exact component={Page_MovieInfo} />
        </div>
        </Provider>
      );
      
    }
  
  }
      
  export default PagesRouter;