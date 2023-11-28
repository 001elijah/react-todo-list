import React from "react";

const EditButton = ({ name, editButtonRef, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick} ref={editButtonRef}>
      Edit <span className="visually-hidden">{name}</span>
    </button>
  );
};

export default EditButton;
