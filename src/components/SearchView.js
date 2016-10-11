import React, { Component } from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

import SearchStore from '../stores/SearchStore'
import FavoritesStore from '../stores/FavoritesStore'
import FavoritesActions from '../actions/FavoritesActions'

export default class SearchView extends Component {
  constructor () {
    super()

    this.state = {
      results: SearchStore.getAll(),
      favorites: FavoritesStore.getAll()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    SearchStore.startListening(this._onChange)
    FavoritesStore.startListening(this._onChange)
    FavoritesActions.getFavorites()
  }

  componentWillUnmount () {
    SearchStore.stopListening(this._onChange)
    FavoritesStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      results: SearchStore.getAll(),
      favorites: FavoritesStore.getAll()
    })
  }

  render () {
    return (
      <div className="row">
        <SearchBar />
        <SearchResults {...this.state} />
      </div>
    )
  }
}
