import React, { useContext } from 'react'
import Todo from './Todo'
import Input from './Input'
import  { TodoContextProvider } from '../context/TodoContext'

const TodoList = () => {
  const {todos} = useContext(TodoContextProvider)
  return (
    <div className='w-full mt-20 flex flex-col items-center  rounded-lg '>
      <Input />
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  sm:px-24 py-5 items-start mx-auto'>
        {todos?.map((todo, key) => {
          return (
            <Todo data={todo} key ={key}/>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
