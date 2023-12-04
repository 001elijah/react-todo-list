import React from "react";
import PropTypes from "prop-types";
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

ViewTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editButtonRef: PropTypes.object.isRequired,
};

export default ViewTemplate;
