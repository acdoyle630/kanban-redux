import React,{Component} from 'react';
import { moveCard } from '../actions';
import { connect } from 'react-redux';




class Card extends Component {
  constructor(props) {
    super(props);

  }

  moveCardHandler=(  )=>{
    let cardId = this.props.card.id
    console.log(cardId)
    this.props.moveCard(cardId)

   }



  render(){

  return (
    <li>
    <h5>{ this.props.card.title }</h5>
    <p>{ this.props.card.priority }</p>
    <p>{ this.props.card.status }</p>
    <p>{ this.props.card.createdBy }</p>
    <p>{ this.props.card.assignedTo }</p>

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

