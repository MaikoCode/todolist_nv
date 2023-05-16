import  {useState} from 'react'

export default function TodoForm({ addTodo }) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }



  return (
    <form onSubmit={handleSubmit} className=''>
        <input type="text"
        placeholder='Add a new task'
        value={value}
        onChange={e=>setValue(e.target.value)}
        className='' />
    </form>
  )
}
