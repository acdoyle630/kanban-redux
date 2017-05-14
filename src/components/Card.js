import React,{Component} from 'react';
import { moveCard } from '../actions';
import { connect } from 'react-redux';




class Card extends Component {
  constructor(props) {
    super(props);

  }

  moveCardHandle=()=>{
    console.log(this.props.card._id)
    //this.props.moveCard("card")
    }

  render(){

  return (
    <li>
    <h3>{ this.props.card.title }</h3>
    <p>{ this.props.card.priority }</p>
    <p>{ this.props.card.status }</p>
    <p>{ this.props.card.createdBy }</p>
    <p>{ this.props.card.assignedTo }</p>

   <button onClick={this.moveCardHandle}>NEXT</button>
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
    moveCard: cards => {
      dispatch(moveCard(cards))
    }
  }
}



const ConnectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);


export default ConnectedCard;

