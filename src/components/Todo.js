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
    <Card className='mt-6 w-80 sm:w-96 shadow-2xl ring-2  ring-black shadow-black/50 flex mx-auto'>
      <div className='text-xs absolute top-7 left-2 bg-deep-purple-200 text-white p-1 rounded-b-lg'>Time : {data.time.match(/\b\d{2}:\d{2}\b/)} </div>
      <div className='text-xs absolute left-2 bg-deep-purple-200 p-1 text-white rounded-t-lg mt-2'>{data.time.match(/\b[a-zA-Z]{3} [a-zA-Z]{3} \d{2} \d{4}\b/)}</div>
      <div className='text-xs'></div>
      <CardBody>
        <div className='mt-10 sm:mt-8  text-xl text-black break-words'>
          {data.todo}
        </div>
      </CardBody>
      <CardFooter className='flex space-x-10 justify-center bg-deep-purple-300 rounded-b-xl'>
        <div className='text-3xl text-white cursor-pointer' onClick={()=>{UpdateTodo(data.id)}}><IoMdCreate /></div>
        <div className='text-3xl text-white cursor-pointer' onClick={()=>{DeleteTodo(data.id)}}><MdDeleteOutline /></div>
      </CardFooter>
    </Card>
  )
}

export default Todo
