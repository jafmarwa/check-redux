import React from 'react'
import Todo from '../Todo/Todo'

function TodoList({todos}) {
  return (
    <div> {todos.map(elm => <Todo todo={elm}></Todo>)}</div>
  )
}

export default TodoList