import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    isediting:""
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const now = new Date();
            const newtodo = {
                id: now.toDateString(),
                text: action.payload,
                ischecked:false,
            }
             state.todos.push(newtodo)       
        },
        removetodo: (state, action) => {
            state.todos=state.todos.filter((item)=>item.id!==action.payload)
        },

        resettodo: (state,action) => {
            console.log("hi delete");
            return {
                ...state,
                todos:[]
            }
        },
        checkboxtodo: (state, action)=>{
            state.todos = state.todos.map((todo) => {
                // console.log(todo);
                return todo.id === action.payload
                  ? { ...todo, ischecked: !todo.ischecked }
                  : { ...todo };
              });
        },

        editing: (state, action)=>{
            return {
                ...state,
                isediting: action.payload,
              }; 
         },
    

         submitediting: (state, action) => {
            
            const editedlist = state.todos.map((newvalue) => {
                return newvalue.id === state.isediting
                  ? { ...newvalue, text: action.payload }
                  : newvalue;
              });
        
              return {
                ...state,
                todos: editedlist,
                isediting: "",
              };
        
        
          },
        
    
    }
})

export const {addtodo,removetodo,resettodo, checkboxtodo,editing, submitediting}= todoSlice.actions;
export default todoSlice.reducer