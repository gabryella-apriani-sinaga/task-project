import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      className="bg-teal-600 px-4 py-2 text-white font-bold rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
