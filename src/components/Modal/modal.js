import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handingling the submit', e.target.value)
    console.log(this.state.password,'subbmittdlakjaksd')
    this.refs.userPass.value = "";
  }

  handleChange(e) {
    const password = e.target.value
    this.setState({
      password
    })
  }

  render() {
    return (
      <div className="modalWrap">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="password">Secret password</label>
          <input type="password" onChange={this.handleChange.bind(this)} id="password" ref="userPass"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}