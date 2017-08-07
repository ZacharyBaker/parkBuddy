import React from 'react';
import PropTypes from 'prop-types';
import Parking from './Parking/Parking';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Parking />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;