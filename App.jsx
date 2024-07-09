import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import { useState } from 'react'


function App() {


  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  
  }

  const removeTodo = (todoId)=> {
     setTodos([...todos.filter((todo) => todo.id!==todoId)]);
  
  }
  
const updateTodo = (newTodo)=> {
  todos.map((todo)=> {
    if(todo.id!==newTodo.id) {
      return todo;
    }
    return newTodo;
})
setTodos([...updatedTodos]);
}
  return (
    <>
      <div className='App'>
        <div className='Bugra'>
<TodoCreate onCreateTodo ={createTodo}/>
<TodoList todos = {todos} onRemoveTodo = {removeTodo} onUpdateTodo={updateTodo}/>
</div>
      </div>
     
    </>
  )
}

export default App
