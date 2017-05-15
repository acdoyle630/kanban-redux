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
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

    case MOVE_CARD:
      console.log(action.card.status)
      action.card.status = "In Progress"
      console.log(state)
      return Object.assign({}, state, {
        cards: state.cards.concat(action.card)
      })

    default:
      return state;
  }
};

export default cards;