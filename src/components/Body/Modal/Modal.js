import React from 'react';

const calloutmodal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span
          className="close-icon"
          onClick={props.closeClick} >
            X
        </span>
        <img src={props.modalImg} alt="Logo"/>
        <div className="img-info">
          <h3>{props.modalTitle}</h3>
          <p>{props.modalDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default calloutmodal;