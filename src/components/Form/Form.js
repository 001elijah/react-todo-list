import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import AddButton from "../AddButton/AddButton";
import s from "./Form.module.scss";
import { toast } from "react-toastify";

const Form = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask(title);
      setTitle("");
    } else {
      toast("Specify what needs to be done")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={s.labelWrapper}>
        <label htmlFor="new-todo-input" className={s.labelLg}>
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className={clsx(["input"], [s.inputLg])}
        name="text"
        autoComplete="off"
        value={title}
        onChange={handleChange}
      />
      <AddButton />
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default Form;
