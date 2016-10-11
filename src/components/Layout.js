import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className="container">
          <div className="row">
            <h1 className="app-title">Yelpish</h1>
            <Link className="navBtn" to="/" onlyActiveOnIndex>search</Link> | <Link className="navBtn" to="/favorites">favorites</Link>
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
