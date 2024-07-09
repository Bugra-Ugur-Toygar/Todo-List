import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import '../App.css';
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';



const Todo = ({todo, onRemoveTodo, onUpdateTodo}) => {
const {id, content} = todo;

const [editable, setEditable] = useState(false);
const [newTodo, setNewTodo] = useState(content);


  function removeTodo() {
    onRemoveTodo(id);
  }

const updateTodo = () => {
  const request = {
    id: id,
    content: newTodo
  }
  onUpdateTodo(request);
  setEditable(false);
}

  return (
    <div className='sarma-List'>
    <div>
        {
          editable ? <input value ={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type='text' /> : content 
        }
    </div>
    <div>
    
    <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
    {
    editable ? <FaCheck /> : <MdModeEdit className='todo-icons' onClick={()=> setEditable(true)}/>
    }
    

    </div>
    </div>
  )
}

export default Todo