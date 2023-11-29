import React from "react";
import clsx from "clsx";
import s from "./AddButton.module.scss";

const AddButton = () => {
  return (
    <button
      type="submit"
      className={clsx(["btn"], [s.btnPrimary], ["btnLg"])}
    >
      Add
    </button>
  );
};

export default AddButton;
