import React from 'react';
import styles from './popup.module.css'

const MyAlert = ({ name, email, age, onClose, ClearForm}) => {

  const handleClose=()=>{
    onClose();
    ClearForm();
  }

  return (
    <div className={styles['custom-alert-overlay']}>
      <div className={styles["custom-alert"]}>
        <h1>Dear {name}</h1>
        <div className={styles["message"]}>{name}, Form has been Submitted with data : <br></br>Age: {age}<br></br>Email: {email}<br></br></div>
        <button className={styles["close-button"]} onClick={handleClose}>
          Close
        </button>   
           
      </div>
    </div>
  );
};

export default MyAlert;
