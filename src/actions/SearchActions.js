import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const SearchActions = {
  getSearch (query) {
    API.getSearch(query)
  },

  getDetails (id) {
    API.getDetails(id)
  }
}

export default SearchActions
