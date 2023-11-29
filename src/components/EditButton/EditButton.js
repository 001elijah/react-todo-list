import React from "react";

const EditButton = ({ name, editButtonRef, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick} ref={editButtonRef}>
      Edit <span className="visuallyHidden">{name}</span>
    </button>
  );
};

export default EditButton;
