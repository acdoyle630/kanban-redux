import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';

import { loadCards, addCard } from '../../actions';

import { getCardsFromFakeXHR } from '../../lib/cards.db';


class App extends Component {

  constructor(props){

    super(props);

    this.title = 'Kanban App';

    this.next = this.next.bind(this)
  }

  componentWillMount() {
    getCardsFromFakeXHR()
    .then( cards => {
      console.log(cards)
      this.props.loadCards( cards )
    })
  }

  addCard = ( card ) =>{
    this.props.addCard( card );
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
          <h2>Welcome to React</h2>
          <NewCardForm addCard={this.addCard}/>
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


