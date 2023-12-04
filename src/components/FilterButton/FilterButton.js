import React from "react";
import PropTypes from "prop-types";

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

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  isPressed: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterButton;
