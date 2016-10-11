import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _results = []

let _details = {}

class SearchStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
          _results = action.payload.results
          this.emit('CHANGE')
          break
        case 'RECEIVE_DETAILS':
          _details = action.payload.details
          this.emit('CHANGE')
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

  getDetails () {
    return _details
  }
}

export default new SearchStore()
