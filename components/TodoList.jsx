import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onRemoveTodo, onUpdateTodo}) => {
  return (
    <div className='List'>
      {todos && todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}/>
      ))}
        
    </div>
  )
}

export default TodoList