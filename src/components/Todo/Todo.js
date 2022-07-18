import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteTodo,doneTodo} from '../../redux/Actions/TodoAction'

function Todo({todo,el}) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    
  return (
    <div>
        <div>
        <button onClick={()=>dispatch(doneTodo(todo.id))}>{todo.isDone ? "done":"undone"}</button>
        {todo.description}
        </div>
        
        <button onClick={handleDelete}>delete</button>
        <button>Edit</button>
       
        <hr></hr>
    </div>
    
  )
}

export default Todo