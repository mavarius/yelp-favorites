import API from '../API'
import AppDispatcher from '../AppDispatcher'

const FavoritesActions = {
  getFavorites () {
    API.getFavorites()
  },

  addFavorite (listItem) {
    API.addFavorite(listItem)
  },

  removeFavorite (id) {
    API.removeFavorite(id)
  }
}

export default FavoritesActions
