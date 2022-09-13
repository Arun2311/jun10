// import React, { Component } from 'react'

// export default class Fun extends Component {
//     state={
//         name:"jana"
//     }
//   render() {
//     return (
//       <div>Fun


//         <h1>my is {this.state.name}</h1>
//       </div>
//     )
//   }
// }

import React ,{ useState } from "react";


function Fun(props){

  const [reviews,setreviews]  = useState([
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ]
  )

   
    return(
        <div>
            <h1>{props.title}</h1>
            {/* {name} */}
            {/* <h2>{}</h2> */}

            <p>{reviews.length}</p>

            




            
            
           




        </div>
    )
}

export default Fun;