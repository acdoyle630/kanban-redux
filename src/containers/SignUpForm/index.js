import React, { Component } from 'react';
import { userAuth } from '../../actions';
import { connect } from 'react-redux';



class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      usernameLI: "",
      passwordLI: "",
      usernameSI: "",
      passwordSI: ""
    };


  }


  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset()
    this.createUsers(
    {
      username : this.state.usernameSI,
      password : this.state.passwordSI
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    event.target.reset()
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
    fetch('/login', {
      method : "POST",
      credentials : "include",
      headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response =>{
     if(response.status === 200){
      this.props.userAuth(user)
     }
    })
  }




  render(){
    console.log(this.state)
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


const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userAuth: user => {
      dispatch(userAuth(user))
    }
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);




export default ConnectedUser;

