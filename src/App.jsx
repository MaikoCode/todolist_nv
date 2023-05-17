
import { useState } from "react"
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import './Components/Trick.css'
function App() {
 
    const [todos, setTodos] = useState([]);

  return (
    <div className="w-screen h-screen  bg-dirtyWhite dark:bg-darkBlue trick overflow-auto ">
      <div className="max-w-2xl mx-auto ">
          <Header />
          <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div className="text-center mt-[150px] text-[#9495A5] dark:text-[#5B5E7E]">
        <span>Drag and drop to reorder list</span>
      </div>
    </div>
   
  )
}

export default App
