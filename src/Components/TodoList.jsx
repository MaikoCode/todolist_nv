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
        if(todo.id == id){
            return {...todo, completed: !todo.completed}
        }
        return todo;
    })

    setTodos(updatedTodos);
  }

  return (
    <div>
        <TodoForm  addTodo={addTodo}/>
        <ul>
        {filteredTodos.map(todo => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        })}

        </ul>

        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("finished")}>Finished</button>
        </div>
    </div>
  )
}
