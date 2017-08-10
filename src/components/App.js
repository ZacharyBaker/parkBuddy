import React from 'react';
import PropTypes from 'prop-types';
import Parking from './Parking/Parking';
// import logo from '../assets/images/parkBuddyLogo.png'

import '../assets/stylesheets/base.scss';


const App = (props) => {
  return (
    <div className="appWrapper">
      <img className="main-logo" src={require('../assets/images/parkBuddyLogo.png')} alt=""/>
      <Parking />
    </div>
  );
};

// App.propTypes = {
//   name: PropTypes.string,
// };

export default App;