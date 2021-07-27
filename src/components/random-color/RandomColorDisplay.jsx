import React from 'react';
import PropTypes from 'prop-types';
function RandomColorDisplay({ backgroundColor }) {
  let style;
  if(backgroundColor.split('').slice(0, 3).join('') !== 'url'){
    style = {
      backgroundColor,
      width: '100vw',
      height: '100vh'
    };
  }

  else {
    style = {
      backgroundImage: backgroundColor,
      width: '100vw',
      height: '100vh'
    };
  }

  return (
    <div style={style}></div>
  );
}

RandomColorDisplay.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string
};

export default RandomColorDisplay;
