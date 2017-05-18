import React, { Component } from 'react';


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

  // handleChangeStatus = (event) => {
  //   this.setState({
  //     status : event.target.value
  //   });
  // }


        // <div>
        //   <input type="text" placeholder="Status" value={this.state.status} onChange={this.handleChangeStatus} />
        // </div>


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div>
          <input type="text" placeholder="Priority" value={this.state.priority} onChange={this.handleChangePriority} />
        </div>
        <div>
          <input type="text" placeholder="Assigned To" value={this.state.assigned_to} onChange={this.handleChangeAssignedTo} />
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    );
  }
}

export default NewCardForm;