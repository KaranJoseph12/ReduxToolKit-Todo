import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (

    <>
      <div className=" py-8  h-auto">
        <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
        <h1 className="text-center text-3xl mt-5" >{`Todo-list`.toUpperCase()}</h1>
          <div className="w-full  max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
            <div className=" bg-slate-900">
              {/* AddTodoForm */}
              <AddTodo/>
            </div>
            <div className="my-5">
              {/* todoList */}
              <TodoList/>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}