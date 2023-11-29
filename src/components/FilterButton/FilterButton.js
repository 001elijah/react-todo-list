import React from "react";

const FilterButton = ({ name, isPressed, setFilter }) => {
  return (
    <button
      type="button"
      className="btn toggleBtn btnFilter"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="visuallyHidden">Show </span>
      <span>{name}</span>
      <span className="visuallyHidden"> tasks</span>
    </button>
  );
};

export default FilterButton;
