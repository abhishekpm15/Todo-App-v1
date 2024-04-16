import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Input = ({ todos, setTodos, updateValue, setUpdateValue }) => {
  const [item, setItem] = useState('')

  useEffect(() => {
    if (updateValue) {
      const value = todos.find(todo => todo.id === updateValue)?.todo || ''
      setItem(value)
    }
  }, [updateValue, todos])

  const AddItem = () => {
    if (item.length > 0) setTodos([...todos, { id: uuidv4(), todo: item }])
    setItem('')
  }

  const UpdateItem = () =>{
    const updatedTodo = todos.map((todo)=>todo.id === updateValue ? {id:todo.id, todo:item} : todo )
    setTodos(updatedTodo)
    setItem('')
    setUpdateValue(null)
  }

  return (
    <div className='sm:w-[500px] w-[350px] flex justify-center ring-2 ring-black'>
      <input
        type='text'
        placeholder='Enter you Todos'
        className='w-full text-lg outline-none p-2 h-full'
        value={item}
        onChange={e => {
          setItem(e.target.value)
        }}
      ></input>
      {updateValue && item !== '' ? (
        <div
          className='text-base w-40 sm:w-36 flex items-center justify-center text-white bg-light-green-400 rounded-l-lg cursor-pointer ring-2 ring-black/60 '
          onClick={UpdateItem}
        >
          Update Item
        </div>
      ) : (
        <div
          className='text-base w-36 flex items-center justify-center bg-deep-purple-300 text-white rounded-l-lg cursor-pointer ring-2 ring-black/60 '
          onClick={AddItem}
        >
          Add Item
        </div>
      )}
    </div>
  )
}

export default Input
