import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';


import App from './components/app';
import Movies from './components/movies';
import TvShows from './components/tv_shows';
import reducers from './reducers';
import SelectedItem from './components/selected_item';


import './style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory}>
  <Route path='/' component={App}>

    <IndexRoute component={Movies}/>
        <Route path='movies/:id' component={SelectedItem}/>
        <Route path='tvshows' component={TvShows}/>
        <Route path='tvshows/:id' component={SelectedItem}/>
      </Route>
 </Router> 
</Provider>


  ,document.getElementById('root')
);
