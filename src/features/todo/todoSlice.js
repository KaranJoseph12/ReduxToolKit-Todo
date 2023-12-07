import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos: [{
    id:1,
    text: "Hello Everyone"
   }]
}

export const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers:{
    addTodo:(state,actions)=>{
      const todo = {
        id:nanoid(),
        text: actions.payload
      }
      state.todos.push(todo);
    },
    updateTodo:(state,actions)=>{
      const {id,text} = actions.payload
      state.todos.map((eachtodo)=>eachtodo.id === id ? eachtodo.text = text: eachtodo)
    },
    deleteTodo:(state,actions)=>{
      state.todos = state.todos.filter((eachtodo)=>(eachtodo.id !== actions.payload))
    },
   }
})

export const {addTodo,updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer