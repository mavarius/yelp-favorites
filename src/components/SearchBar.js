import React, { Component } from 'react'

import SearchActions from '../actions/SearchActions'

export default class SearchBar extends Component {
  clearSearchBar (e) {
    const { termInput, locationInput } = this.refs

    termInput.value = ''
    locationInput.value = ''
  }

  handleSearch (e) {
    e.preventDefault()
    const { termInput, locationInput } = this.refs

    let term, location

    termInput.value ? term = `term=${termInput.value}` : ''
    locationInput.value ? location = `location=${locationInput.value}` : ''

    let query = `?${term}&${location}`

    SearchActions.getSearch(query)
  }

  render () {
    return (
      <div className="row searchBlock">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="termInput" placeholder="enter search" required />
          <input type="text" className="searchBar" ref="locationInput" placeholder="enter location" required />
          <button className="btn searchBtn">search</button>
        </form>
      </div>
    )
  }
}
