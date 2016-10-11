import React, { Component } from 'react'
import uuid from 'uuid'
import { Link } from 'react-router'

import FavoritesActions from '../actions/FavoritesActions'

export default class FavoritesList extends Component {
  _toggleFavorite (listItem) {
    const { favorites } = this.props

    if (favorites.find(favorite => favorite.id === listItem.id)) {
      FavoritesActions.removeFavorite(listItem.id)
    } else {
      FavoritesActions.addFavorite(listItem)
    }
  }

  render () {
    const { favorites } = this.props

    let favoritesList

    if (favorites) {
      favoritesList =
        <div className="favoriteList row">
          {favorites.map(favorite => {
            return (
              <div key={uuid()} className="favorite">
                <Link to={`/details/${favorite.id}`}>
                  <h2 className="businessName">{favorite.name}</h2>
                  <span className="favoriteImage">
                    <img src={favorite.image_url} alt="business image" />
                  </span>
                  <img src={favorite.rating_img_url} alt={favorite.rating.toString()} />
                  <span className="categories">{favorite.categories.map(cat => <span key={uuid()}>{cat[0]}</span>)}</span>
                </Link>
                <button className="btn btn-danger" type="button" onClick={() => this._toggleFavorite(favorite)}>❤</button>
              </div>
            )
          })}
        </div>
    } else {
      favoritesList = <div>no favorites</div>
    }

    return (
      <div>{favoritesList}</div>
    )
  }
}
