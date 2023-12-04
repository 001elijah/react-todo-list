import React from "react";
import PropTypes from "prop-types";
import s from "./ButtonGroup.module.scss";

const ButtonGroup = ({ children }) => {
  return <div className={s.btnGroup}>{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ButtonGroup;
