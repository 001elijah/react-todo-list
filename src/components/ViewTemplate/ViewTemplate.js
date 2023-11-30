import React from "react";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ItemCard from "../ItemCard/ItemCard";

const ViewTemplate = ({
  title,
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
        title={title}
        completed={completed}
        onChange={() => toggleTaskCompleted(id)}
      />
      <ButtonGroup>
        <EditButton
          title={title}
          editButtonRef={editButtonRef}
          onClick={() => setEditing(true)}
        />
        <DeleteButton title={title} onClick={() => deleteTask(id)} />
      </ButtonGroup>
    </div>
  );
};

export default ViewTemplate;
