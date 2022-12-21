import { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <span className={styles.close}>&times;</span>
            <p>some text here</p>
        </div>
    </div>
  );
};

export default Modal;
