import React from "react";

const Input = ({ placeholder, type, className }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`${className} outline-none`}
    />
  );
};

export default Input;
