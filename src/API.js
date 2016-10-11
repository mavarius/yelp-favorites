import axios from 'axios'
import ServerActions from './actions/ServerActions'
import FavoritesActions from './actions/FavoritesActions'

const API = {
  getFavorites () {
    axios.get('/api/favorites')
      .then(response => {
        let favorites = response.data
        console.log('favorites: ', favorites)
        ServerActions.receiveFavorites(favorites)
      })
      .catch(console.error)
  }
}

export default API
