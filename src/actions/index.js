

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const USER_AUTH = 'USER_AUTH';
export const USER_SIGNOUT = "USER_SIGNOUT";
export const LOG_ALL_USERS = "LOG_ALL_USERS";
export const LOAD_USERS = "LOAD_USERS";

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
  return{
    type : USER_SIGNOUT,
    user
  };
};

export const logAllUsers = newUser =>{
  return{
    type : LOG_ALL_USERS,
    newUser
  };
};

export const loadUsers = allUsers =>{
  return{
    type : LOAD_USERS,
    allUsers
  }
}