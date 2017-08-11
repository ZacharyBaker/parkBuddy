import React from 'react'
import PropTypes from 'prop-types'
import './Parking.scss'
import Modal from '../Modal/Modal'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import axios from 'axios'
import * as secrets from './secrets'

export default class Parking extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      spots: [],
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
      let spots = response.data[0].spot
      this.setState({
        spots
      })
    })
    .catch(error => {
      console.log(error)
    })
  }


  render(){
    return (
      <div className="parkingWrap">
        <div className="spotContainer">
          {
            this.state.spots.map((spot, i) => {
              return (  
                <h1 key={i} onClick={(e) => this.handleClick(e, i)}>{spot}</h1>)}
              )
          }
        </div>
        {this.state.showModal && 
          <div>
            <ReactCSSTransitionGroup transitionName="modalTransition"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
              <Modal
                key="1"
                handleSubmit={this.handleModalSubmit.bind(this)}
                handleChange={this.handleModalChange.bind(this)}
                value={this.state.value}
                show={this.state.showModal}
              />
            </ReactCSSTransitionGroup>
            <div className="modalOverlay" />
          </div>
        }
      </div>
    )
  }



  handleClick(e, i) {
    console.log('this.state.spots', this.state.spots)
      this.setState({showModal: true})
      this.clickedOn(i)
      return
  }

  clickedOn(i) {
    this.setState({ clickedOn: i })
  }

  handleModalSubmit(e) {
    e.preventDefault()
    this.setState({
      value: '',
      showModal: false
    })
    let currentUser = false
    switch (this.state.password) {
      case secrets.jaden.pass:
        currentUser = 'Jaden'
        break
      case secrets.vlad.pass:
        currentUser = 'Vlad'
        break
      case secrets.zach.pass:
        currentUser = 'Zach'
        break
      default:
        alert('🐒💩🐒💩🐒💩🐒💩Wrong Password🐒💩🐒💩🐒💩🐒💩')
    }
    if (currentUser) {
      this.updateSpots(currentUser)
    }
  }

  updateSpots(currentUser) {
    const { clickedOn, spots } = this.state
    spots[clickedOn] = currentUser
    this.setState({spots})
    axios.post('/api/update', {spot: spots})
    .then(response => {
      console.log('response', response)
      // this.setState({
      //   spots
      // })
    })
    .catch(error => {
      console.log(error)
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