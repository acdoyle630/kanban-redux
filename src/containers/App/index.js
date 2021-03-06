import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';
import SignUpForm from '../SignUpForm';

import { loadCards, addCard } from '../../actions';



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
      return response.json()
    }).then((cards) =>{
     this.props.loadCards(cards)
    }).catch(err =>{
      throw err;
    })
  }


  addNewCard = ( card ) =>{
    console.log(card)
    console.log(this.props.users.username)
    if(this.props.users.userLoggedIn === true){

      return fetch('/api/cards', {
        method: "POST",
        headers:
        {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          title: card.title,
          priority: card.priority,
          status: "Queue",
          created_by: this.props.users.username,
          assigned_to: card.assigned_to
        })
      }).then( response =>{
       return(response.json())
      }).then(response =>{
        this.props.addCard(response)
      })
    } else {
      console.log('login to see cards')
    }
  }

  next = ( ) => {
    console.log('hit');
  }


  render() {
      let queue = [];
      let inProgress = [];
      let complete = [];
      let allCards = this.props.cards;
    if(this.props.users.userLoggedIn === true){
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
    }
    //user={this.props.users}/>
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kanban Board</h2>
          <div id="SignUpForm">
            <SignUpForm/>
          </div>
          <NewCardForm addNewCard={this.addNewCard}/>
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
    cards: state.cards,
    users: state.user
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


