import React from "react";
import CancelButton from "../CancelButton/CancelButton";
import SaveButton from "../SaveButton/SaveButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

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
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {value}
        </label>
        <input
          id={id}
          className="todo-text"
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
