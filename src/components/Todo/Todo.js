import React, { useState, useRef, useEffect } from "react";
import usePrevious from "../../utils/hooks/usePrevious";
import EditingTemplate from "../EditingTemplate/EditingTemplate";
import ViewTemplate from "../ViewTemplate/ViewTemplate";

const Todo = ({
  name,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

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
    <li className="todo">
      {isEditing ? (
        <EditingTemplate
          value={name}
          id={id}
          newValue={newName}
          setNewValue={setNewName}
          editFieldRef={editFieldRef}
          setEditing={setEditing}
          editItem={editTask}
        />
      ) : (
        <ViewTemplate
          name={name}
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

export default Todo;
