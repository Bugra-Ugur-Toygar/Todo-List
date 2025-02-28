import React, { useState } from 'react'
import '../App.css'
import { MdContentCopy } from 'react-icons/md';


const TodoCreate = ({onCreateTodo}) => {

const [newTodo, setNewTodo] = useState('');

const clearInput = () => {
  setNewTodo('');
}

const createTodo = () => {
if(!newTodo) return;

  const request = {
    id: Math.floor(Math.random() * 9999999999),
    content: newTodo
  
  }
onCreateTodo(request)
clearInput();
}

  return (



 <div className='Todo-create'>

<input 
value={newTodo}
onChange={(e) => setNewTodo(e.target.value)}
className='todo-input'
 type='text'
  placeholder='Enter Todo'/>
<button onClick={createTodo} className='style'>Create Todo</button>
 </div>



  )
}

export default TodoCreate