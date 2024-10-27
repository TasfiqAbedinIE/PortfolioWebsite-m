import React from 'react';
import './header.css'

const Modal = ({photo, title, details, onClose }) => {
  console.log(photo)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className='image_section'>
          <img src={photo} className='title_image' />
        </div>
        <div className='title_section'>
          <p>{title}</p>
        </div>
        <div className='detail_section'>
          <div dangerouslySetInnerHTML={{__html: details}} />
        </div>
        <div className='button' onClick={onClose}>
          <h1>BACK</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
