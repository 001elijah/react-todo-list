import React from "react";
import PropTypes from "prop-types";

const Heading = ({ listHeadingRef, headingText }) => {
  return (
    <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
      {headingText}
    </h2>
  );
};

Heading.propTypes = {
  listHeadingRef: PropTypes.object.isRequired,
  headingText: PropTypes.string.isRequired,
};

export default Heading;
