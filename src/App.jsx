
import { useState } from "react"
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import './Components/Trick.css'
function App() {
 
    const [todos, setTodos] = useState([]);

  return (
    <div className="w-screen h-screen  bg-white dark:bg-darkBlue trick">
      <div className="max-w-2xl mx-auto">
          <Header />
          <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
   
  )
}

export default App
