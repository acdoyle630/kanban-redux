import React, { Component } from 'react';
import { connect } from 'react-redux';




class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : "",
      priority : "",
      status : "Queue",
      created_by : "",
      assigned_to : "",
    };

    this.registeredUsers = [];

  }

  componentWillMount() {
    this.getAllUsers()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.title === "" || undefined){
      throw new Error('title cannot be empty')
    }

    this.props.addNewCard(this.state);

    this.setState({ _id : '', title : '', priority : '', created_by : '', assigned_to : '' });
  }


  handleChangeTitle = (event) => {
    this.setState({
      title : event.target.value
    });
  }

  handleChangePriority = (event) => {
    this.setState({
      priority : event.target.value
    });
  }

  handleChangeAssignedTo = (event) => {
    this.setState({
      assigned_to : event.target.value
    });
  }


  getAllUsers(){
    fetch('/api/users', {
      method: "GET"
    }).then((response) =>{
      return(response.json())
    }).then(response=>{
      for(var i=0; i< response.length; i++){
        this.registeredUsers.push(response[i])

      }
    })
  }


        // <div>
        //   <input type="text" placeholder="Assigned To" value={this.state.assigned_to} onChange={this.handleChangeAssignedTo} />
        // </div>

  render(){
    console.log(this.props.users)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div>
          <input type="text" placeholder="Priority" value={this.state.priority} onChange={this.handleChangePriority} />
        </div>
        <div>
          <input type="text" list="userlist" value={this.state.assigned_to} onChange={this.handleChangeAssignedTo}/>
            <datalist id="userlist">
            {
              this.registeredUsers.map(function(user){
                return (<option key={user.id}
                          value={user.username}></option>)
              })
            }
          </datalist>
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user
  };
}

const ConnectedNewCardForm = connect(
  mapStateToProps,
)(NewCardForm);

export default ConnectedNewCardForm;