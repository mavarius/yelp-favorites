import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _results = []

class SearchStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_results':
          _results = action.payload.favorites
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
    return _results
  }
}

export default new SearchStore()
