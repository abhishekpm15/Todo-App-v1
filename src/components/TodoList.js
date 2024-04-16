import React, { useState } from 'react'
import Todo from './Todo'
import Input from './Input'

const TodoList = ({ todos, setTodos }) => {
  const [updateItem, setUpdateItem] = useState(null)
  return (
    <div className='w-full mt-20 flex flex-col items-center  rounded-lg '>
      <Input todos={todos} setTodos={setTodos} updateValue = {updateItem} setUpdateValue = {setUpdateItem}/>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  sm:px-24 py-5 items-start mx-auto'>
        {todos.map((todo, key) => {
          return (
            <Todo data={todo} key={key} todos={todos} setTodos={setTodos} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
