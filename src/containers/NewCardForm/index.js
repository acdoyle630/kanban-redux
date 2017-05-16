import React, { Component } from 'react';


class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.id,
      title : "",
      priority : "",
      status : "Queue",
      createdBy : "",
      assignedTo : "",
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addNewCard(this.state);

    this.setState({ _id : '', title : '', priority : '', createdBy : '', assignedTo : '' });
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
      assignedTo : event.target.value
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
          <input type="text" placeholder="Assigned To" value={this.state.assignedTo} onChange={this.handleChangeAssignedTo} />
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    );
  }
}

export default NewCardForm;