import React from "react";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ItemCard from "../ItemCard/ItemCard";

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
    <div className="stackSmall">
      <ItemCard
        id={id}
        name={name}
        completed={completed}
        onChange={() => toggleTaskCompleted(id)}
      />
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
