import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class FirstCard extends Component {
  constructor(props) {
    super(props)
      this.state = { covidData: [],
      isHovering: false
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  };

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  componentDidMount() {
    fetch("https://sampo.thl.fi/pivot/prod/api/epirapo/covid19case.json")
    .then(response => response.json())
    .then(data => {
      this.setState({covidData: data})
    })
  }

}
