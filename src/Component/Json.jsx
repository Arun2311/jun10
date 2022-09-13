import React, { Component } from "react";


class Json extends Component{
    state = { 
            users:[ 
               { 
               "userId": 1, 
               "id": 1, 
               "title": "Breakfast", 
               "completed": false 
               }, 
               { 
               "userId": 1, 
               "id": 2, 
               "title": "Dinner", 
               "completed": false 
               }, 
               { 
               "userId": 1, 
               "id": 3, 
               "title": "Lunch", 
               "completed": true 
               }, 
               { 
               "userId": 1, 
               "id": 4, 
               "title": "Brunch", 
               "completed": true 
               }, 
               { 
               "userId": 1, 
               "id": 5, 
               "title": "Snacks", 
               "completed": true
               }] 
        
    }
    render(){
        return(
            <div>

                <h1>hi ram</h1>
                <h2>
                {this.state.users.map(x => x.completed && <>{x.title}</>)}
</h2>




            </div>

        )
    }
}

export default Json





    