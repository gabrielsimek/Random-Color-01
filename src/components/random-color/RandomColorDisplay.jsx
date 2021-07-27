import React from 'react';
import PropTypes from 'prop-types';
function RandomColorDisplay({ backgroundColor }) {
  return (
    <div
      style= {{
        backgroundColor,
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
