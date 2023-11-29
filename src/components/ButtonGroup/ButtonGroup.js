import React from "react";
import s from "./ButtonGroup.module.scss";

const ButtonGroup = ({ children }) => {
  return <div className={s.btnGroup}>{children}</div>;
};

export default ButtonGroup;
