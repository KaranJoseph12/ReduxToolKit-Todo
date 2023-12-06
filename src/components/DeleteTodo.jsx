import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'
import { MdDelete } from "react-icons/md";





const DeleteTodo = ({id}) => {
  const dispatch = useDispatch()
  return (
    <>
    <button
          className="!absolute right-1 top-1 z-10 select-none rounded bg-red-500  text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none mr-2"
          type="button"
          data-ripple-light="true"
          onClick={()=> (dispatch(deleteTodo(id)))}
        >
          <MdDelete  size={30}/>
        </button>


    </>
  )
}

export default DeleteTodo