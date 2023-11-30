import React from "react";

const EditButton = ({ title, editButtonRef, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick} ref={editButtonRef}>
      Edit <span className="visuallyHidden">{title}</span>
    </button>
  );
};

export default EditButton;
