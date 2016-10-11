import React, { Component } from 'react'

import SearchActions from '../actions/SearchActions'
import SearchStore from '../stores/SearchStore'

export default class SearchView extends Component {
  constructor () {
    super()

    this.state = {
      searchResults: SearchStore.getAll()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    SearchStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    SearchStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      searchResults: SearchStore.getAll()
    })
  }

  render () {
    return (
      <div className="row">
        <h3>Searching for the Search Bar...</h3>
      </div>
    )
  }
}
