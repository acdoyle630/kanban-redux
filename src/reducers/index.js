import {
  LOAD_CARDS,
  ADD_CARD,
  MOVE_CARD,
  USER_AUTH,
  USER_SIGNOUT,
  LOG_ALL_USERS,
  LOAD_USERS
} from '../actions';

const initialState = {
  cards : [],
  user : {
    username : "",
    userLoggedIn : false,
  },
  userLog : []
};


const cards = (state = initialState, action) => {
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
    if(action.user.logInSuccess === false){
      return Object.assign({}, state, {
        user : {
          logInSuccess : false
        }
      })
    } else {
      return Object.assign({}, state, {
        user : {
          username : action.user.username,
          userLoggedIn : true
        }
      })
    }

    case USER_SIGNOUT:
      return Object.assign({}, state, {
        user: {
          username : "",
          userLoggedIn : false
      }
    })

    case LOAD_USERS:
      return Object.assign({}, state, {
        userLog : action.allUsers
      })

    case LOG_ALL_USERS:
      return Object.assign({}, state, {
        userLog : state.userLog.concat(action.newUser)
    });

    default:
      return state;
  }
};

export default cards;