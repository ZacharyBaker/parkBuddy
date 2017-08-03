import React from 'react';
import PropTypes from 'prop-types';
import TestComp from './TestComp';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <TestComp dude />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;