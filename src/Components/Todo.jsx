

function Todo({ todo, toggleTodo }) {

  const handleCheckboxChange = () => {
    toggleTodo(todo.id);
  }

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
      <span>{todo.text}</span>
    </li>
  );
}

export default Todo;