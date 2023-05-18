import {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList({todos, setTodos}) {


  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter(todo => {
    if(filter === "active"){
        return !todo.completed;
    }else if(filter === "finished"){
        return todo.completed;
    }else{
        return true;
    }
  })


  const addTodo = text => {
    const newTodo = {id: todos.length + 1, text, completed: false};
    setTodos([...todos, newTodo]);
  }


  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
        if(todo.id === id){
            return {...todo, completed: !todo.completed}
        }
        return todo;
    })

    setTodos(updatedTodos);
  }

  
  // const handleActiveItems = (todos) => {
  //   const countActiveItems = todos.filter(todo => todo.completed).length;
   
  // }
  console.log(todos.filter(todo => todo.completed).length)
 
  return (
    <div>
        <TodoForm  addTodo={addTodo}/>
        <ul>
        {filteredTodos.map((todo, index) => {
            return <Todo key={todo.id} todo={todo}  toggleTodo={toggleTodo}  index={index} />
        })}

        </ul>

        <footer>
          <div className='sm:hidden mb-4 flex justify-between text-inactiveWhite dark:text-inactiveBlack bg-white dark:bg-darkDesaturedBlue border-none rounded-b-md p-4'>
          <div>
            <span>
              {todos.filter(todo => !todo.completed).length}{' '}
              {todos.filter(todo => !todo.completed).length === 1 ? 'item' : 'items'} left
            </span>
          </div>
              <div>
                <button onClick={() => setTodos([])} className='hover:text-hoverColorLight dark:hover:text-hoverColorBlack'>Clear Completed</button>
              </div>
          </div>

          
            <div className='flex justify-between max-sm:justify-around  text-inactiveWhite dark:text-inactiveBlack bg-white dark:bg-darkDesaturedBlue border-none rounded-b-md p-4 '>
                <div className='max-sm:hidden'><span>{todos.length} items left</span></div>
                <div className='flex justify-between'>
                  <button onClick={() => setFilter("all")} className={`${filter === "all" ? "text-brightBlue" : "text-inactiveWhite dark:text-inactiveBlack"} hover:text-hoverColorLight hover:font-bold dark:hover:text-hoverColorBlack max-sm:ml-12 mr-4`}>All</button>
                  <button onClick={() => setFilter("active")} className={`${filter === "active" ? "text-brightBlue" : "text-inactiveWhite dark:text-inactiveBlack"} hover:text-hoverColorLight hover:font-bold dark:hover:text-hoverColorBlack mr-4`}>Active</button>
                  <button onClick={() => setFilter("finished")} className={`${filter === "finished" ? "text-brightBlue" : "text-inactiveWhite dark:text-inactiveBlack"} hover:text-hoverColorLight hover:font-bold dark:hover:text-hoverColorBlack`}>Finished</button>
                </div>
                <div>
                  <button onClick={() => setTodos([])} className='hover:text-hoverColorLight dark:hover:text-hoverColorBlack max-sm:hidden'>Clear Completed</button>
                </div>
            </div>
          
        </footer>
    </div>
  )
}
