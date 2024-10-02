import React from "react";
import classes from "./Modal.module.css";

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: any;
}) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
