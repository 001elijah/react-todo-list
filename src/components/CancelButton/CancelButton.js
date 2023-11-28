import React from "react";

const CancelButton = ({ value, onClick }) => {
  return (
    <button type="button" className="btn todo-cancel" onClick={onClick}>
      Cancel
      <span className="visually-hidden">renaming {value}</span>
    </button>
  );
};

export default CancelButton;
