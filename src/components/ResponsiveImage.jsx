import React from 'react';


function ResponsiveImage(props) {
  const { children, ...attrs } = props;
  const { src, alt, ...restAttrs } = attrs;

  return (
    <>
    <img
    src={src}
    alt={alt} 
    className="max-w-sm rounded-lg shadow-2xl w-full h-auto object-cover"
    {...restAttrs}></img>
    </>

  );
}

export default ResponsiveImage;