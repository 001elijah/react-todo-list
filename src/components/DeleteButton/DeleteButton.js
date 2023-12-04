import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ title, onClick }) => {
  return (
    <button type="button" className="btn btnDanger" onClick={onClick}>
      Delete <span className="visuallyHidden">{title}</span>
    </button>
  );
};

DeleteButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
