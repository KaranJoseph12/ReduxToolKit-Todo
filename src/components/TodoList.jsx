import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './UpdateTodo'

const TodoList = () => {
  const [open, setOpen] = useState(false);

  const data = useSelector((state) => state.todos)
  return (
    <>

      <div className="relative  h-10 w-full min-w-[200px]">

        {data.map((eachTodo) => (
          <li key={eachTodo.id} className=' relative flex h-10 w-full min-w-[200px] list-none my-2 bg-slate-900 ' >
            <DeleteTodo id ={eachTodo.id}/>
            <UpdateTodo open={open} setOpen={setOpen}  todo={eachTodo}/>
            <input
              type="text"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 "
              value={eachTodo.text}
              onChange={()=>""}
            />
          </li>

        ))}


      </div>

    </>
  )
}

export default TodoList