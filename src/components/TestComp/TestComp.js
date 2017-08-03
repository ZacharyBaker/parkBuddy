import React from 'react';
import PropTypes from 'prop-types';
import './TestComp.scss';

export default class TestComp extends React.Component {
  render(){
    return (
      <div className="dude">
        Hey I'm a dude!
      </div>
    )
  }
}