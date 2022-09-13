import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Api() {

  const [todos,setTodos]= useState([])

  const abc = () =>{

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data=>setTodos(data))



  }

  useEffect(()=>{
    abc()
  },[])




  return (
    <div>

      {todos.map(t=> <div>

        {t.title}



      </div>)}





    </div>
  )
}
