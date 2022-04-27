import './style.css'

import {legacy_createStore as storeCreator} from "redux"


// document.querySelector('#app').innerHTML





const ADD_TODO = "ADD_TODO";

const reducer = (state, {type , payload})=>{
     switch(type){
       case ADD_TODO :
         return {...state, todo : [...state.todo, payload]};
       default :
         return state;  
     }
}

//action type



// action creator
const addTodo = (title)=>{
  return {
    type : ADD_TODO,
    payload :{
      title : title,
      status : false,
    }
  }
}

const state = storeCreator(reducer,{todo : []});

let cont =  document.querySelector(".dis");

document.querySelector(".add-todo").addEventListener("click", ()=>{
  cont.innerHTML = "";
  console.log("hey")
  let val = document.querySelector("#todo-input").value ;
  state.dispatch(addTodo(val));
  console.log(state.getState().todo);
  state.getState().todo.map((e)=>{
    
    let p = document.createElement("p")
    p.innerHTML = e.title +"  status:-" + e.status;
   

   cont.append(p);
  })
})

// console.log(val)




