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
    this.createUsers(this.state)
      }

  //   this.props.addNewCard(this.state);

  //   this.setState({username : "", password : ""});
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


  next = ( ) => {
    console.log('hit');
  }




















  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;