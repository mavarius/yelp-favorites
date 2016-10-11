import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className="container">
          <div className="row">
            <h1 className="app-title">Yelpish</h1>
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
