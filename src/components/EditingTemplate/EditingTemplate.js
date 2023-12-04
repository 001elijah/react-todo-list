import React from "react";
import PropTypes from "prop-types";
import CancelButton from "../CancelButton/CancelButton";
import SaveButton from "../SaveButton/SaveButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from "./EditingTemplate.module.scss";
import { toast } from "react-toastify";

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
    if (value !== newValue) {
      editItem(id, newValue);
      setNewValue("");
      setEditing(false);
      return
    }
    toast("Title is the same")
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

EditingTemplate.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  newValue: PropTypes.string.isRequired,
  editFieldRef: PropTypes.object.isRequired,
  setEditing: PropTypes.func.isRequired,
  setNewValue: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default EditingTemplate;
