import React, { useContext } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
} from '@material-tailwind/react'
import { MdDeleteOutline } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import { TodoContextProvider } from '../context/TodoContext';

const Todo = ({data}) => {
const { UpdateTodo, DeleteTodo} = useContext(TodoContextProvider)
  return (
    <Card className='mt-6 w-80 sm:w-96 shadow-2xl ring-1 ring-black/30 shadow-blue-300 flex mx-auto'>
      <CardBody>
        <div className='mb-2 text-xl text-black break-words'>
          {data.todo}
        </div>
      </CardBody>
      <CardFooter className='flex space-x-10 justify-center bg-deep-purple-300 rounded-xl'>
        <div className='text-3xl text-white cursor-pointer' onClick={()=>{UpdateTodo(data.id)}}><IoMdCreate /></div>
        <div className='text-3xl text-white cursor-pointer' onClick={()=>{DeleteTodo(data.id)}}><MdDeleteOutline /></div>
      </CardFooter>
    </Card>
  )
}

export default Todo
