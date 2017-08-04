import React from 'react';
import PropTypes from 'prop-types';
import './TestComp.scss';
import axios from 'axios';

export default class TestComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: []
    }
  }

  componentDidMount() {
    axios.get('/spot')
    .then(response => {
      let spot = response.data[0].spot;

      this.setState({
        spot
      })

    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <div className="dude">
        Hey I'm a dude!<br/>
        here is the spot: {this.state.spot.map((dude, i) => <h1 key={i}>{dude}</h1>)}
      </div>
    )
  }
}