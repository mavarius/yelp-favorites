import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearchResults (results) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { results }
    })
  },

  receiveFavorites (favorites) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FAVORITES',
      payload: { favorites }
    })
  },

  receiveDetails (details) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAILS',
      payload: { details }
    })
  }
}

export default ServerActions
