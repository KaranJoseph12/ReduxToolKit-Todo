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
    // updateTodo:(state,actions)=>{

    // },
    deleteTodo:(state,actions)=>{
      state.todos = state.todos.filter((eachtodo)=>(eachtodo.id !== actions.payload))
    },
   }
})

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer