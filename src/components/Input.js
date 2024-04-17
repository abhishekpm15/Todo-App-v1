import React, { useContext, useEffect } from 'react'
import { TodoContextProvider } from '../context/TodoContext'

const Input = () => {
  const {item, setItem, todos, UpdateItem, AddItem, updateId} = useContext(TodoContextProvider)

  useEffect(() => {
    if (updateId) {
      const value = todos.find(todo => todo.id === updateId)?.todo || ''
      setItem(value)
    }
  }, [updateId, todos, setItem])

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
      {updateId && item !== '' ? (
        <div
          className='text-base w-40 sm:w-36 flex items-center justify-center text-white bg-green-600 rounded-l-lg cursor-pointer ring-2 ring-black/60 '
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
