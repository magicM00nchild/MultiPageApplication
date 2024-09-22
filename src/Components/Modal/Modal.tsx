import React from 'react';
import './Modal.css'; // CSS für das modale Fenster

const Modal = ({
  show,
  handleClose,
  children,
}: {
  show: any;
  handleClose: any;
  children: any;
}) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
