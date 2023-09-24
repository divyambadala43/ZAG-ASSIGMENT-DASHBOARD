import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.heading}>Orders</div>
        <div className={styles.orderButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M12.007 3.09752C11.7425 3.09722 11.4887 3.20217 11.3017 3.38921C11.1147 3.57625 11.0097 3.83002 11.01 4.09454L11.0029 11.003L4.08743 11.003C3.82291 11.0027 3.56914 11.1076 3.3821 11.2947C3.19505 11.4817 3.09011 11.7355 3.09041 12C3.09041 12.5515 3.53588 12.997 4.08743 12.997L11.0029 12.997L11.0029 19.9125C11.0029 20.4641 11.4484 20.9095 12 20.9095C12.5515 20.9095 12.997 20.4641 12.997 19.9125L12.997 12.997L19.9125 12.997C20.464 12.997 20.9095 12.5515 20.9095 12C20.9095 11.4484 20.464 11.003 19.9125 11.003H12.997L12.997 4.08747C12.997 3.55006 12.5444 3.09752 12.007 3.09752Z"
              fill="white"
            />
          </svg>
          <div className={styles.buttonText}>Add order</div>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default Header;
