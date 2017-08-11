import React from 'react'
import PropTypes from 'prop-types'
import './modal.scss'

const Modal = (props) => {
  const componentClasses = ['modalWrap'];
  return (
    <div className="modalWrap">
      <form className="formModal" onSubmit={props.handleSubmit}>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={props.handleChange} id="password" value={props.value}/>
        <input type="submit" value="Send it"/>
      </form>
    </div>
  )
}

export default Modal