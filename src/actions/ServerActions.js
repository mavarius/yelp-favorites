import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveFavorites (favorites) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FAVORITES',
      payload: { favorites }
    })
  }
}

export default ServerActions
