import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../../redux/Actions/TodoAction'

function AddTodo() {

   const [newTodo , setNewTodo] = useState({description:""})
   const [filter,setFilter] = useState("all")
   const dispatch = useDispatch()  
   
   const handleAdd = () => {
       dispatch(addTodo(newTodo))
   }



  return (
    <div>
      
      <input placeholder="what's your plan for today?" type="text" value={newTodo.description} onChange={(e)=>setNewTodo({description:e.target.value})}/>
      <button onClick={handleAdd}> Add Todo </button>
      <button onClick={()=>setFilter("all")}>all</button>
      <button onClick={()=>setFilter("done")}>done</button>
      <button onClick={()=>setFilter("undone")}>undone</button>

    </div>
  )
}

export default AddTodo