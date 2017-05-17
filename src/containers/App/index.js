import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';
import LoginForm from '../LoginForm';

import { loadCards, addCard } from '../../actions';

import { getCardsFromFakeXHR } from '../../lib/cards.db';


class App extends Component {

  constructor(props){

    super(props);

    this.title = 'Kanban App';

    this.next = this.next.bind(this)
  }

  componentWillMount() {
     fetch('/api/cards', {
      method: "GET"
    }).then((response) =>{
     //console.log(response.json())
      return response.json()
    }).then((cards) =>{
     this.props.loadCards(cards)
    }).catch(err =>{
      throw err;
    })
  }


  addNewCard = ( card ) =>{
    console.log(card)
    return fetch('/api/cards', {
      method: "POST",
      headers:
      {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(card)
    }).then( response =>{
     return(response.json())
    }).then(response =>{
      this.props.addCard(response)
    })
  }

  next = ( ) => {
    console.log('hit');
  }


  render() {
    let queue = [];
    let inProgress = [];
    let complete = [];
    let allCards = this.props.cards;
    for (var i = 0; i < allCards.length; i++){
      if(allCards[i].status === "Queue"){
        queue.push(allCards[i]);
      }
      if(allCards[i].status === "In Progress"){
        inProgress.push(allCards[i]);
      }
      if(allCards[i].status === "Complete"){
        complete.push(allCards[i]);
      }
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kanban Board</h2>
          <div id="LoginForm">
            <LoginForm/>
          </div>
          <NewCardForm addNewCard={this.addNewCard}/>
        </div><br></br><br></br><br></br><br></br><br></br><br></br>
          <div id="list">
            <div id="queue">
              <h3>Queue</h3>
              <CardList cards={queue}/>
            </div>
            <div>
              <div id="inProgress">
              <h3>In Progress</h3>
                <CardList cards={inProgress}/>
              </div>
            </div>
            <div>
              <div id="complete">
              <h3>Complete</h3>
                <CardList cards={complete}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    addCard: card => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;


