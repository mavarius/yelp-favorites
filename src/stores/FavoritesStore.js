import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _favorites = []

class FavoritesStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_FAVORITES':
          _favorites = action.payload.favorites
          break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getAll () {
    return _favorites
  }
}

export default new FavoritesStore()
