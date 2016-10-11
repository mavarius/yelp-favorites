import React, { Component } from 'react'

import FavoritesActions from '../actions/FavoritesActions'
import FavoritesStore from '../stores/FavoritesStore'

export default class FavoritesView extends Component {
  constructor () {
    super()

    this.state = {
      favorites: FavoritesStore.getAll()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    FavoritesStore.startListening(this._onChange)
  }

  componentDidMount () {
    FavoritesActions.getFavorites()
  }

  componentWillUnmount () {
    FavoritesStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      favorites: FavoritesStore.getAll()
    })
  }

  render () {
    return (
      <div className="row">
        <h3>Don't give me any sass, I know you can do this on Yelp already...</h3>
      </div>
    )
  }
}
