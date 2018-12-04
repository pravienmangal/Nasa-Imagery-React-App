import React from 'react';

const SearchCallout = (props) => {
  return (
    <li
      className="callout" 
      onClick={props.clicked}>
      <img
        src={props.imgSrc}
        alt="Sun" />
      <div className="text-content">
        <h3>{props.imgTitle}</h3>
      </div>
    </li>
  );
}

export default SearchCallout;