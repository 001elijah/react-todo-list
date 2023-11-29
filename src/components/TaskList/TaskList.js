import React from "react";

const TaskList = ({ taskList }) => {
  return (
    <ul
      className="todoList stackLarge stackException"
      aria-labelledby="list-heading"
    >
      {taskList}
    </ul>
  );
};

export default TaskList;
