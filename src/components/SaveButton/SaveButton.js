import React from "react";

const SaveButton = ({ value }) => {
  return (
    <button type="submit" className="btn btn__primary todo-edit">
      Save
      <span className="visually-hidden">new name for {value}</span>
    </button>
  );
};

export default SaveButton;
