import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class FirstCard extends Component {
  constructor(props) {
    super(props)
      this.state = { covidData: [] }
  }
  componentDidMount() {
    fetch(`https://sampo.thl.fi/pivot/prod/fi/epirapo/covid19case/fact_epirapo_covid19case.json?row=dateweek2020010120201231-443686&column=measure-141082`)
    .then(response => response.json())
    .then(data => {
      this.setState({covidData: data["dataset"]})
    })
  }

  render() {
    return (
      <div className="firstcard">
      {this.state.covidData.map((item) => <p>item</p>)}
    </div>
    )
  }
}

export default FirstCard
