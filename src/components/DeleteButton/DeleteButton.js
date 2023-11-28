import React from "react";

const DeleteButton = ({ name, onClick }) => {
  return (
    <button type="button" className="btn btn__danger" onClick={onClick}>
      Delete <span className="visually-hidden">{name}</span>
    </button>
  );
};

export default DeleteButton;
