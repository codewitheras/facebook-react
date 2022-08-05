import React from "react";
import "./Toast.css";

const Toast = ({ toastMsg, bgColor, txtColor }) => {
  return (
    <>
      <div
        className='toast__wrapper'
        style={{
          backgroundColor: bgColor,
          color: txtColor,
          border: `1px solid ${bgColor}`,
        }}>
        {toastMsg}
      </div>
    </>
  );
};

export default Toast;
