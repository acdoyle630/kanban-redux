import React, { Component } from 'react';


class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.id,
      username: "",
      password: ""
    };

  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    this.createUsers(this.state)
      }

  handleLogin=(event)=>{
    event.preventDefault()
    console.log(this.state)
    this.loginUser(this.state)
  }

  // }

  handleChangeUsername = (event) => {
    this.setState({
      username : event.target.value
    });
  }

  handleChangePassword = (event) => {
    this.setState({
      password : event.target.value
    });
  }

  createUsers(user){
    console.log(user)
    fetch('/api/users', {
      method: "POST",
       headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response =>{
      return(response)
    })
  }

  loginUser(user){
    fetch('/login', {
      method : "POST",
      credentials : "include",
      headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
  }




  render(){
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
        </div>
        <div>
          <button name="Sign-Up" type="submit">login </button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;