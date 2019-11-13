import React from "react";
import styles from "./styles.module.css";

const IconButton = ({ onClick, icon, active }) => {
  const getIcon = () => {
    if (icon === "favorite") {
      return (
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 0L14.8794 5.66049L21.4616 7.60081L17.277 13.0395L17.4656 19.8992L11 17.6L4.53436 19.8992L4.72303 13.0395L0.538379 7.60081L7.12062 5.66049L11 0Z"
            fill="#CCCCCC"
          />
        </svg>
      );
    }

    if (icon === "compare") {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2V0H18V2H0ZM0 9V7H18V9H0ZM0 16V14H8V16H0ZM18 14V16H16V18H14V16H12V14H14V12H16V14H18Z"
            fill="#CCCCCC"
          />
        </svg>
      );
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${styles["button"]} ${active ? styles["button-active"] : ""}`}
    >
      {getIcon()}
    </button>
  );
};

export default IconButton;
