import React, { Component } from "react";

export default class Form extends Component {
  state = {
    Name: "",
    age: "",
    Email: "",
    Phone: "",
    onsubmit : false,
    password:"",
    confirmpassword:""

  };

//   handle = (b) => {
//     this.setState({[b.target.name]:b.target.value})
    
//   };


handle = (e) =>{

    this.setState({ [e.target.name]:e.target.value })

}
handlechange = () =>{

  if(!this.state.Name){

    alert("Nmae mandortary")
  }

   else{
    this.setState({onsubmit:true})
  }

}
//   handlephone = (e) => {
//     this.setState({ Phone: e.target.value });
//   };

//   handleemail = (e) => {
//     this.setState({ Email: e.target.value });
//   };

//   handleage = (e) => {
//     this.setState({ age: e.target.value });
//   };

  render() {
    return (
      <div>
       {!this.state.onsubmit && <div>

        <h1>Registration Form</h1>

        <label>Name</label>
        <input name="Name" value={this.state.Name} onChange={this.handle} />
        <br />
        <label>phone number</label>
        <input name="Phone" value={this.state.Phone} onChange={this.handle} /> <br />
        <label>email</label>
        <input name="Email" value={this.state.Email} onChange={this.handle} />
        <br />
        <label>Age</label>
        <input name="age" value={this.state.age} onChange={this.handle} />
        <br />
        <label>Password</label>
        <input name="password" value={this.state.password} onChange={this.handle} />
        <br />

        <label>confirmpassword</label>
        <input name="confirmpassword" value={this.state.confirmpassword} onChange={this.handle} />
        <br />


<button onClick={this.handlechange} className="btn btn-danger">submit</button>
</div>
}

{this.state.onsubmit  && <div>
          <h2>
          My name {this.state.Name} <br/>my email {this.state.Email} <br/>my age{this.state.age}
         </h2>
         <h2>my no {this.state.Phone}
         </h2>
         </div> 
         
  }








      </div>
    );
  }
}
