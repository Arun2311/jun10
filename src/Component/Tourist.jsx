import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Tourist() {
    const [todos,setTodos]= useState([])

const abc = () =>{
    fetch("https://course-api.com/react-tabs-project")
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

              <h1>{e.title}</h1>  
              <h4>  {e.dates}</h4>
                <p>{e.duties}</p>




            </div>)}






    </div>
  )
}
