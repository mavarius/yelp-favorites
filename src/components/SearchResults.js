import React, { Component } from 'react'
import uuid from 'uuid'
import { Link } from 'react-router'

import FavoritesActions from '../actions/FavoritesActions'

export default class SearchResults extends Component {
  _toggleFavorite (listItem) {
    const { favorites } = this.props

    if (favorites.find(favorite => favorite.id === listItem.id)) {
      FavoritesActions.removeFavorite(listItem.id)
    } else {
      FavoritesActions.addFavorite(listItem)
    }
  }

  render () {
    const { results } = this.props

    if (results) {
      return (
        <div className="resultList row">
          {results.map(result => {
            return (
              <div key={uuid()} className="result">
                <Link to={`/details/${results.id}`}>
                  <h2 className="businessName">{result.name}</h2>
                  <span className="resultImage">
                    <img src={result.image_url} alt="business image" />
                  </span>
                  <img src={result.rating_img_url} alt={result.rating.toString()} />
                  <span className="categories">{result.categories.map(cat => <span key={uuid()}>{cat[0]}</span>)}</span>
                </Link>
                <button className="btn btn-danger" onClick={() => this._toggleFavorite(result)}>❤</button>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>searching</div>
      )
    }
  }
}
