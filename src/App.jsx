
import { useState } from "react"
import TodoList from "./Components/TodoList";
function App() {
 
    const [todos, setTodos] = useState([]);

  return (
    <div>
        <h1>TodoList</h1>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
   
  )
}

export default App
