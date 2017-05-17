import React, { Component } from 'react';


class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.id,
      username: "",
      password: ""
    };

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

export default LoginForm;