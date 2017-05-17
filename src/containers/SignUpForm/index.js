import React, { Component } from 'react';


class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.id,
      usernameLI: "",
      passwordLI: "",
      usernameSI: "",
      passwordSI: ""
    };


  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.createUsers(
    {
      username : this.state.usernameSI,
      password : this.state.passwordSI
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.loginUser(
    {
      username : this.state.usernameLI,
      password : this.state.passwordLI
    })
  }


  handleChangeUsername = (event) => {
    this.setState({
      usernameLI : event.target.value
    });
  }

  handleChangePassword = (event) => {
    this.setState({
      passwordLI : event.target.value
    });
  }

  handleChangeUsernameSignUp = (event) => {
    this.setState({
      usernameSI : event.target.value
    });
  }

  handleChangePasswordSignUp = (event) => {
    this.setState({
      passwordSI : event.target.value
    });
  }


  createUsers(user){
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
    console.log(user)
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
      <div id="regForm">
        <form onSubmit={this.handleLogin}>
          <div>
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
          </div>
          <div>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
          </div>
          <div>
            <button name="Login" type="submit">login </button>
          </div>
        </form>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsernameSignUp} />
          </div>
          <div>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePasswordSignUp} />
          </div>
          <div>
            <button name="Sign-Up" type="submit">Sign Up </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;