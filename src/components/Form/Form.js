import React, { useState } from "react";
import clsx from "clsx";
import AddButton from "../AddButton/AddButton";
import s from "./Form.module.scss";

const Form = ({ addTask }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addTask(name);
      setName("");
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
        value={name}
        onChange={handleChange}
      />
      <AddButton />
    </form>
  );
};

export default Form;
