import React from "react";

const DeleteButton = ({ title, onClick }) => {
  return (
    <button type="button" className="btn btnDanger" onClick={onClick}>
      Delete <span className="visuallyHidden">{title}</span>
    </button>
  );
};

export default DeleteButton;
