
import './Trick.css'
function Todo({index, todo, toggleTodo}) {

  const handleCheckboxChange = () => {
    toggleTodo(todo.id);
    

  }

  return (
    <li className={`flex items-center  bg-white dark:bg-darkDesaturedBlue dark:text-white border-b-1 p-4 border-b border-softColor ${index === 0 ? "rounded-t-md" : ""} ${todo.completed ? "text-[#4D5067] line-through " : ""}`}>
      <input id="task" type="checkbox" checked={todo.completed} onChange={handleCheckboxChange}
      />
      <label htmlFor='task' className='pl-4 cursor-pointer text-taskColorWhite dark:text-taskColorBlack ' onClick={handleCheckboxChange}>{todo.text}</label>
    </li>
  );
}

export default Todo;