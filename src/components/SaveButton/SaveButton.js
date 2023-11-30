import React from "react";

const SaveButton = ({ value }) => {
  return (
    <button type="submit" className="btn btnPrimary todoEdit">
      Save
      <span className="visuallyHidden">new title for {value}</span>
    </button>
  );
};

export default SaveButton;
