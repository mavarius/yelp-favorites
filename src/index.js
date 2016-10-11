import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchView from './components/SearchView'
import DetailsView from './components/DetailsView'
import FavoritesView from './components/FavoritesView'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={SearchView} />
      <Route path="/details/:id" component={DetailsView} />
      <Route path="/favorites" component={FavoritesView} />
    </Route>

  </Router>,
  document.getElementById('root')
)
