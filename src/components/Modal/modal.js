import React from 'react'
import PropTypes from 'prop-types'
import './modal.scss'

const Modal = (props) => {
  const componentClasses = ['modalWrap'];
  return (
    <div className={componentClasses.join(' ')}>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="password">Secret password</label>
        <input type="password" onChange={props.handleChange} id="password" value={props.value}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Modal