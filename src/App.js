import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';

function App() {

  const todos = useSelector(state => state.TodoReducer.todos)


  return (
    <div className="App">
      <header className="App-header">
          <AddTodo></AddTodo>

          <TodoList todos = {todos}></TodoList>
      </header>
    </div>
  );
}

export default App;
