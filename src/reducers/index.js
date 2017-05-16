import {
  LOAD_CARDS,
  ADD_CARD,
  MOVE_CARD
} from '../actions';

const initialState = {
  cards : []
};
const cards = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);

  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards : action.cards
      });

    case ADD_CARD:
    console.log('hit ADD_CARD')
    console.log(action.card)
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

    case MOVE_CARD:
      let currentCard;
      let newState = state.cards.concat()
      for(var i = 0; i < newState.length; i++){
        if(newState[i].id === action.cardId){
          currentCard = newState[i]
        }
      }
      if(currentCard.status === "Done"){
        currentCard.status = "ova"
      }
      if(currentCard.status === "Complete"){
        currentCard.status = "Done"
      }
      if(currentCard.status === "In Progress"){
        currentCard.status = "Complete"
      }
      if(currentCard.status === "Queue"){
      currentCard.status = "In Progress"
      }

      return Object.assign({}, state, {
        cards: newState
      })

    default:
      return state;
  }
};

export default cards;