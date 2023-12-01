import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./components/FilterButton/FilterButton";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";
import usePrevious from "./utils/hooks/usePrevious";
import TaskList from "./components/TaskList/TaskList";
import Heading from "./components/Heading/Heading";
import FilterList from "./components/FilterList/FilterList";
import Logo from "./components/Logo/Logo";
import Loader from "./components/Loader/Loader";
import Pagination from "./components/Pagination/Pagination";
import {
  deleteTodo,
  getTodos,
  patchTodo,
  postTodo,
} from "./redux/operations/todosOperations";
import { selectTodos } from "./redux/selectors/todosSelectors";
import { toast } from "react-toastify";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);
const TASKS_PER_PAGE = 4;

function App() {
  const dispatch = useDispatch();
  const {
    todos: tasks = localStorage.getItem("persist:todos")
      ? localStorage.getItem("persist:todos")
      : [],
  } = useSelector(selectTodos);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTask = currentPage * TASKS_PER_PAGE;
  const indexOfFirstTask = indexOfLastTask - TASKS_PER_PAGE;
  const currentTasks = tasks
    .filter(FILTER_MAP[filter])
    .slice(indexOfFirstTask, indexOfLastTask);

  const addTask = (title) => {
    const newTask = { title, completed: false };
    dispatch(postTodo(newTask));
  };

  const toggleTaskCompleted = (id) => {
    currentTasks.forEach((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        dispatch(patchTodo({ ...task, completed: !task.completed }));
      }
    });
  };

  const editTask = (id, newTitle) => {
    currentTasks.forEach(async (task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        await dispatch(patchTodo({ ...task, title: newTitle }));
        toast("Edit success");
      }
    });
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const taskList = currentTasks
    .map(({ id, title, completed }) => (
      <Todo
        id={id}
        title={title}
        completed={completed}
        key={id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `Total ${tasks.length} ${tasksNoun}`;

  const listHeadingRef = useRef(null);

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  useEffect(() => {
    tasks.length === 0 && dispatch(getTodos());
  }, [tasks.length, dispatch]);

  return (
    <>
      <Loader />
      <div className="todoApp stackLarge">
        <Logo />
        <Form addTask={addTask} />
        <FilterList filterList={filterList} />
        <Heading listHeadingRef={listHeadingRef} headingText={headingText} />
        <TaskList taskList={taskList} />
        <Pagination
          onPageChange={paginate}
          totalCount={tasks.filter(FILTER_MAP[filter]).length}
          siblingCount={1}
          currentPage={currentPage}
          pageSize={TASKS_PER_PAGE}
          className={"paginationBar"}
        />
      </div>
    </>
  );
}

export default App;
