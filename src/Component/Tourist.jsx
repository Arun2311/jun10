import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Tourist() {
    const [todos,setTodos]= useState([])

const abc = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(r => r.json())
    .then(e => setTodos(e))
}

useEffect(()=>{
    abc()
  })



  return (
    <div>Tourist

        {todos.map(e=>
            <div>

              <span>{e.title}</span> 
              <button className='btn btn-danger'>Delete</button> 
              {/* <h4>  {e.dates}</h4>
                <p>{e.duties}</p> */}




            </div>)}






    </div>
  )
}
