import React from 'react';
import PropTypes from 'prop-types';
import './Parking.scss';
import Modal from '../Modal/Modal'
import axios from 'axios';

export default class Parking extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      spots: [],
      currentUser: false,
      showModal: false
    }
  }

  componentDidMount() {
    axios.get('/spot')
    .then(response => {
      let spots = response.data[0].spot;

      this.setState({
        spots
      })

    })
    .catch(error => {
      console.log(error);
    });
  }

  handleClick(e) {
    console.log(e.target, 'EVENT')
    console.log('handling the click')
    if (!this.state.currentUser) {
      this.setState({showModal: true});
      return;
    }
  }

  render(){
    return (
      <div className="parkingWrap">
        here is the spot: {this.state.spots.map((spot, i) => <h1 key={i} onClick={this.handleClick.bind(this)}>{spot}</h1>)}
        {this.state.showModal && 
          <Modal />
        }
      </div>
    )
  }
}