import React from "react";

const Heading = ({ listHeadingRef, headingText }) => {
  return (
    <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
      {headingText}
    </h2>
  );
};

export default Heading;
