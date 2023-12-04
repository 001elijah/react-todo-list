import React from "react";
import PropTypes from "prop-types";

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

TaskList.propTypes = {
  taskList: PropTypes.array.isRequired,
};

export default TaskList;
