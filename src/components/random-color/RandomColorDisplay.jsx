import React from 'react';
import PropTypes from 'prop-types';
function RandomColorDisplay(props) {
  return (
    <div
      style= {{
        backgroundColor: 'green',
        width: '100vw',
        height: '100vh'
      }}
    >        
    </div>
  );
}
RandomColorDisplay.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default RandomColorDisplay;
