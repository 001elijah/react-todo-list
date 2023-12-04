import React from "react";
import PropTypes from "prop-types";

const EditButton = ({ title, editButtonRef, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick} ref={editButtonRef}>
      Edit <span className="visuallyHidden">{title}</span>
    </button>
  );
};

EditButton.propTypes = {
  title: PropTypes.string.isRequired,
  editButtonRef: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
