import React,{Component} from 'react';
import { moveCard } from '../actions';
import { connect } from 'react-redux';




class Card extends Component {


  moveCardHandler=(  )=>{
    this.putCard(this.props.card)
    let cardId = this.props.card.id
    this.props.moveCard(cardId)
     }



// request to database to change status
  putCard(card){
    if(card.status === "Complete"){
     this.deleteCard(card)
    }
    fetch('/api/cards', {
      method: 'PUT',
      headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(card)
    })
    .then(response =>{
      return (response.json())
    })
    .then(response=>{
    })
    .catch(err =>{
      throw err;
    })
  }

  deleteCard(card){
    fetch('/api/cards', {
      method : "DELETE",
      headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body : JSON.stringify(card)
    })
    .then(console.log("deleted"))
    // .catch(err =>{
    //   throw err;
    // })
  }


  render(){

  return (
    <li>
    <h5>{ `Title: ${this.props.card.title}` }</h5>
    <p>{ `Priority: ${this.props.card.priority}` }</p>
    <p>{ `Status: ${this.props.card.status}` }</p>
    <p>{ `Created by: ${this.props.card.created_by}` }</p>
    <p>{ `Assigned to: ${this.props.card.assigned_to}` }</p>

   <button onClick={this.moveCardHandler}>NEXT</button>
  </li>
    )

  }
}



const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveCard: card => {
      dispatch(moveCard(card))
    }
  }
}



const ConnectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);


export default ConnectedCard;

