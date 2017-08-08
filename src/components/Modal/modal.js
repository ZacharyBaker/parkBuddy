import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="modalWrap">
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="password">Secret password</label>
          <input type="password" onChange={this.props.handleChange} id="password" value={this.props.value}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}