import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class FirstCard extends Component {
  constructor(props) {
    super(props)
      this.state = { covidData: [] }
  }
  componentDidMount() {
    fetch(`https://sampo.thl.fi/pivot/prod/api/epirapo/covid19case.json`)
    .then(response => response.json())
    .then(data => {
      this.setState({covidData: data})
    })
  }

  render() {
    return (
      <div className="firstcard">
      {this.state.items.map((item) => <p>item</p>)}
    </div>
    )
  }
}

export default FirstCard
