import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import usePrevious from "../../utils/hooks/usePrevious";
import EditingTemplate from "../EditingTemplate/EditingTemplate";
import ViewTemplate from "../ViewTemplate/ViewTemplate";
import s from "./Todo.module.scss";

const Todo = ({
  title,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li className={s.todo}>
      {isEditing ? (
        <EditingTemplate
          value={title}
          id={id}
          newValue={newTitle}
          setNewValue={setNewTitle}
          editFieldRef={editFieldRef}
          setEditing={setEditing}
          editItem={editTask}
        />
      ) : (
        <ViewTemplate
          title={title}
          id={id}
          completed={completed}
          toggleTaskCompleted={toggleTaskCompleted}
          setEditing={setEditing}
          deleteTask={deleteTask}
          editButtonRef={editButtonRef}
        />
      )}
    </li>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Todo;
