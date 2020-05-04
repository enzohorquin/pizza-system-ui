import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, className, alt }) => (
  <img src={src} className={className} alt={alt} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
