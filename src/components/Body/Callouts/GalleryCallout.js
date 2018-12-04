import React from 'react';

const GalleryCallout = (props) => {
  return (
    <li className="callout">
      <img
        src={props.imgSrc}
        alt='Sun' />
      <div className="text-content">
        <h3>Camera: {props.camera}</h3>
      </div>
    </li>
  );
}

export default GalleryCallout;