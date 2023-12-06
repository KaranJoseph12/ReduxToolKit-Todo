import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }
  return (
    <div>
      <form  className="relative flex h-10 w-full min-w-[200px] ">
        <button
          className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          add
        </button>
        <input
          type="text"
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 "
          placeholder="Enter Text"
          value={input}
          onChange={(e)=>(setInput(e.target.value))}
          required
        />
       
      </form>
     
    </div>
  )
}

export default AddTodo