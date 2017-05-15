import React,{Component} from 'react';
import { moveCard } from '../actions';
import { connect } from 'react-redux';




class Card extends Component {
  constructor(props) {
    super(props);

  }

  moveCardHandler=(  )=>{
    let card = this.props.card
    console.log(card)
    this.props.moveCard(card)
    // this.props.card.status = "In Progress"
    // console.log(this.props.card)
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

