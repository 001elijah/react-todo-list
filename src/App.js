import FilterButton from './components/FilterButton/FilterButton';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';

function App({ tasks }) {
  const taskList = tasks.map(({id, name, completed}) => (
    <Todo
      id={id}
      name={name}
      completed={completed}
      key={id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
