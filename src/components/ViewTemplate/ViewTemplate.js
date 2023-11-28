import React from "react";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const ViewTemplate = ({
  name,
  id,
  completed,
  toggleTaskCompleted,
  setEditing,
  deleteTask,
  editButtonRef,
}) => {
  return (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <ButtonGroup>
        <EditButton
          name={name}
          editButtonRef={editButtonRef}
          onClick={() => setEditing(true)}
        />
        <DeleteButton name={name} onClick={() => deleteTask(id)} />
      </ButtonGroup>
    </div>
  );
};

export default ViewTemplate;
