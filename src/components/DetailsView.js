import React, { Component } from 'react'
import uuid from 'uuid'

import SearchActions from '../actions/SearchActions'
import SearchStore from '../stores/SearchStore'

export default class DetailsView extends Component {
  constructor () {
    super()

    this.state = {
      details: SearchStore.getDetails()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    SearchStore.startListening(this._onChange)
  }

  componentDidMount () {
    console.log('this.props.params.id: ', this.props.params.id)
    SearchActions.getDetails(this.props.params.id)
  }

  componentWillUnmount () {
    SearchStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      details: SearchStore.getDetails()
    })
  }

  render () {
    const { details } = this.state

    let businessDetails

    if (details) {
      businessDetails =
        <div>
          <h2>{details.name}</h2>
          <span className="detailsImage">
            <img src={details.image_url} alt="business image" />
          </span>
          <img src={details.rating_img_url} />
          {/* <span className="categories">{details.categories.map(cat => <span key={uuid()}>{cat[0]}</span>)}</span> */}
        </div>
    } else {
      businessDetails = <p>no details</p>
    }

    return (
      <div className="row">
        {businessDetails}
      </div>
    )
  }
}
