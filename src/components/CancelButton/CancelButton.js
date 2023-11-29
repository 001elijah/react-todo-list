import React from "react";

const CancelButton = ({ value, onClick }) => {
  return (
    <button type="button" className="btn todoCancel" onClick={onClick}>
      Cancel
      <span className="visuallyHidden">renaming {value}</span>
    </button>
  );
};

export default CancelButton;
