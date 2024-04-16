import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App () {
  const [todos, setTodos] = useState([])
  return (
    <div className='App text-2xl flex flex-col items-center h-screen w-screen overflow-x-hidden'>
      <Header />
      <TodoList todos = {todos} setTodos= {setTodos}/>
    </div>
  )
}

export default App
