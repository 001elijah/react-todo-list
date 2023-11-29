import React from "react";

const DeleteButton = ({ name, onClick }) => {
  return (
    <button type="button" className="btn btnDanger" onClick={onClick}>
      Delete <span className="visuallyHidden">{name}</span>
    </button>
  );
};

export default DeleteButton;
