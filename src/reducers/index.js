import {
  LOAD_CARDS,
  ADD_CARD,
  MOVE_CARD,
  USER_AUTH
} from '../actions';

const initialState = {
  cards : [],
  user : {
    username : "",
    userLoggedIn : false
  }
};


const cards = (state = initialState, action) => {
  console.log(state)
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
      let currentCard;
      let newState = state.cards.concat()
      for(var i = 0; i < newState.length; i++){
        if(newState[i].id === action.cardId){
          currentCard = newState[i]
        }
      }
      if(currentCard.status === "Complete"){
        currentCard.status = "Hide"
      }
      if(currentCard.status === "In Progress"){
        currentCard.status = "Complete"
      }
      if(currentCard.status === "Queue"){
      currentCard.status = "In Progress"
      }

      return Object.assign({}, state, {
        cards: newState
      });

    case USER_AUTH:
    console.log(state)
    console.log(action.user)
      return Object.assign({}, state, {
        user : {
          username : action.user.username,
          userLoggedIn : true
        }
      })

    default:
      return state;
  }
};

export default cards;