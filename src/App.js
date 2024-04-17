import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoContext from './context/TodoContext'

function App () {
  const [todos, setTodos] = useState([])
  return (
    <div className='App text-2xl flex flex-col items-center h-screen w-screen overflow-x-hidden'>
      <TodoContext>
        <Header />
        <TodoList todos={todos} setTodos={setTodos} />
      </TodoContext>
    </div>
  )
}

export default App
