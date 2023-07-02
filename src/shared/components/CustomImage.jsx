import React from 'react';

function CustomImage(props) {
  const { src, alt, imageStyle } = props;

  return <img src={src} alt={alt} className={imageStyle} />;
}

export default CustomImage;
