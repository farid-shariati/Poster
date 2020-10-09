import React, { useEffect, Fragment } from "react";

//style
import "./Modal.css";

const Modal = ({ open, onClose, width, height, children }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  return (
    <Fragment>
      <div
        className={`modal-background ${open ? "modal-open" : "modal-close"}`}
        onClick={onClose}
      ></div>
      
      <div className={`modal ${open ? "modal-open" : "modal-close"}`} style={{ width, height }}>
        {children}
      </div>
    </Fragment>
  );
};

export default Modal;
