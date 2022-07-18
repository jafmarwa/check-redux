import {ADD_TODO , DELETE_TODO , DONE_TODO, EDIT_TODO} from '../Actions/Type'

const initState = {
    todos : [ {
        id : "01" , 
        description : "first Todo" , 
        isDone : false
    } ]
}

const TodoReducer = (state = initState , action) => {
     switch (action.type) {
        case ADD_TODO :
            return {
                ...state ,
                todos : [...state.todos , action.payload]
            }

        case DELETE_TODO : 
            return {
                ...state ,
                todos : state.todos.filter(elm => elm.id !== action.payload)
            }

        case DONE_TODO :
            return state.map(elm=> elm.id === action.payload ? {...elm , isDone : !elm.isDone} : elm)
            
        // case EDIT_TODO :
        //     return {
        //         ...state,
        //         todos : 
        //     }
            
     
        default:
            return state
     }
}

export default TodoReducer