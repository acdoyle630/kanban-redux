import React, { Component } from 'react';
import { userAuth, userSignOut, logAllUsers, loadUsers } from '../../actions';
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

  componentWillMount() {
    fetch('/api/users', {
      method: "GET"
    }).then((response) =>{
      return response.json()
    }).then((allUsers) =>{
     this.props.loadUsers(allUsers)
    }).catch(err =>{
      throw err;
    })
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
    }).then(this.verifyUser(user))
   }

  verifyUser=(user)=>{
    this.props.logAllUsers(user)
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
      //console.log(user)
      this.props.userAuth(user)
      } else {

        this.props.userAuth({"logInSuccess": false})
      }
    })
  }

  signOut=()=>{
    fetch('/logout', {
      method: "GET"
    }).then(data =>{
      return(data.json())
    }).then(response =>{
      //sign out action
      this.props.userSignOut(response)
    })
  }




  render(){
    console.log(this.props.userLog)
    if(this.props.users.logInSuccess === false){
      return(
        <div>
        <h1 id="wrongPassword">WRONG USERNAME/PASSWORD</h1>
        <button id="signout" onClick={this.signOut}>
          Try again</button>
        </div>
        )
    }
    if(this.props.users.userLoggedIn === false){

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
    } else{

      return(
        <div>
        <h3 id="currentUser">Logged in as: {this.props.users.username}</h3>
        <button id="signout" onClick={this.signOut}>
          signout</button>
        </div>
        )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.user,
    userLog: state.userLog
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userAuth: user => {
      dispatch(userAuth(user))
    },
    userSignOut: user => {
      dispatch(userSignOut(user))
    },
    logAllUsers: newUser => {
      dispatch(logAllUsers(newUser))
    },
    loadUsers: allUsers =>{
      dispatch(loadUsers(allUsers))
    }
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);




export default ConnectedUser;

