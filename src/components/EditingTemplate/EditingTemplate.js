import React from "react";
import CancelButton from "../CancelButton/CancelButton";
import SaveButton from "../SaveButton/SaveButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from "./EditingTemplate.module.scss";

const EditingTemplate = ({
  value,
  id,
  newValue,
  editFieldRef,
  setEditing,
  setNewValue,
  editItem,
}) => {
  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem(id, newValue);
    setNewValue("");
    setEditing(false);
  };

  return (
    <form className="stackSmall" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label className="todoLabel" htmlFor={id}>
          New title for {value}
        </label>
        <input
          id={id}
          className={s.todoText}
          type="text"
          value={newValue}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <ButtonGroup>
        <CancelButton value={value} onClick={() => setEditing(false)} />
        <SaveButton value={value} />
      </ButtonGroup>
    </form>
  );
};

export default EditingTemplate;
