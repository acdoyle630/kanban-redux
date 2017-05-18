

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const USER_AUTH = 'USER_AUTH';
export const USER_SIGNOUT = "USER_SIGNOUT";

export const loadCards = cards => {

  return {
    type: LOAD_CARDS,
    cards
  };
};

export const addCard = card => {

  return {
    type: ADD_CARD,
    card
  };

};

export const moveCard = cardId => {

  return{
    type: MOVE_CARD,
    cardId
  };
};

export const userAuth = user =>{
  return{
    type : USER_AUTH,
    user
  };
};

export const userSignOut = user =>{
  console.log('hit action signout')
  return{
    type : USER_SIGNOUT,
    user
  }
}