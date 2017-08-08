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
      showModal: false,
      password: '',
      value: '',
      clickedOn: false
    }

    this.handleClick = this.handleClick.bind(this)
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


  render(){
    return (
      <div className="parkingWrap">
        here is the spot: {this.state.spots.map((spot, i) => <h1 key={i} onClick={(e) => this.handleClick(e, i)}>{spot}</h1>)}
        {this.state.showModal && 
          <Modal
            handleSubmit={this.handleModalSubmit.bind(this)}
            handleChange={this.handleModalChange.bind(this)}
            value={this.state.value}
          />
        }
      </div>
    )
  }



  handleClick(e, i) {
    if (!this.state.currentUser) {
      this.setState({showModal: true});
      this.clickedOn(i);
      return;
    }
  }

  clickedOn(i) {
    console.log(i, 'clickedON')
  }

  handleModalSubmit(e) {
    e.preventDefault();
    this.setState({
      value: '',
      showModal: false
    })
  }

  handleModalChange(e) {
    const password = e.target.value
    this.setState({
      password,
      value: password
    })
  }
}