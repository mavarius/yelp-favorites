import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getSearch (query) {
    axios.get(`/api/search${query}`)
      .then(response => {
        let businesses = response.data.businesses
        ServerActions.receiveSearchResults(businesses)
      })
      .catch(console.error)
  },

  getFavorites () {
    axios.get('/api/favorites')
      .then(response => {
        let favorites = response.data
        ServerActions.receiveFavorites(favorites)
      })
      .catch(console.error)
  },

  addFavorite (listItem) {
    axios.post('/api/favorites', listItem)
      .then(response => {
        let favorites = response.data
        ServerActions.receiveFavorites(favorites)
      })
      .catch(console.error)
  },

  removeFavorite (id) {
    axios.delete(`/api/favorites/${id}`)
      .then(response => {
        let favorites = response.data
        ServerActions.receiveFavorites(favorites)
      })
      .catch(console.error)
  },

  getDetails (id) {
    axios.get(`/api/search/${id}`)
      .then(response => {
        let details = response.data
        ServerActions.receiveDetails(details)
      })
      .catch(console.error)
  }
}

export default API
