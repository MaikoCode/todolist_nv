import  {useState} from 'react'
import "./Trick.css"
export default function TodoForm({ addTodo }) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }



  return (
    <form onSubmit={handleSubmit} className='relative'>
      <span className='absolute h-5 w-5 rounded-full bg-transparent border border-[#777a92] bottom-1/2 mx-4 pr-4 translate-y-0.5'></span>
      <div className='flex w-full'>
        <input type="text"
        placeholder='Create a new todo…'
        value={value}
        onChange={e=>setValue(e.target.value)}
        className='bg-white dark:bg-darkDesaturedBlue  w-full outline-none rounded-md mb-4 p-4 text-[#393A4B] dark:text-[#C8CBE7] pl-12' />
      </div>
    </form>
  )
}
