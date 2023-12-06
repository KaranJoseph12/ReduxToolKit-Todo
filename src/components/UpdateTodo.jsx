import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateTodo } from '../features/todo/todoSlice'
import { FaEdit } from "react-icons/fa";

export default function UpdateTodo({open,setOpen,todo}) {
 
  const [value, setValue] = useState({id:todo.id,text:todo.text});
  function closeModal() {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
  }
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo(value))
    closeModal()
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="!absolute right-14 top-1 z-10 select-none rounded bg-lime-500  text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none mr-2 px-2"
        >
          <FaEdit size={30} />
        </button>
      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => ''}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" inset-0 bg-black/25" />
          </Transition.Child>

          <div className=" inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-yellow-300 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-yellow-300"
                  >
                    Update List
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="mt-2">
                      <input type="text"  
                      className='peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-500 bg-slate-900'
                      value={value.text} 
                      onChange={(e)=>(setValue({...value,text: e.target.value}))}
                      />
                    <button
                      type="submit"
                      className="!absolute right-6 top-16 py-1  z-10 select-none rounded bg-black  text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none mr-2 px-2 text-yellow-300"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
