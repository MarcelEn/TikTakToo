import React, { Component } from 'react';
import './TikTakTooField.css';
import Field from './Field';

class TikTakTooField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ],
      myTurn: true,
      notMyTurnError: [false, false],
      notMyTurnErrorTimeout: null,
      score: [0, 0],
      iAmPlayer: 'X',
      serverError: false,
      alreadyMadeAnInput: false
    };
    this.fieldEventHandler = this.fieldEventHandler.bind(this);
    this.makeNotMyTurnErrorTimeout = this.makeNotMyTurnErrorTimeout.bind(this);
  }
  fieldEventHandler(fieldid) {
    if (!this.state.myTurn) {
      this.setState({ ...this.state, notMyTurnError: [true, true] });
    } else if (this.state.alreadyMadeAnInput === false) {
      // simulate positve response here i have to make a request for serverside confirmation
      let currentState = { ...this.state };
      let response = {
        data: [...currentState.data],
        error: false,
        score: [0, 0]
      }
      response.data[fieldid] = currentState.iAmPlayer;
      // simulate ends but the content have to be in a other function because of async request
      let newState = { ...this.state };
      if (response.error) {
        newState.error = true;
      } else {
        newState.data = [...response.data];
        newState.score = [...response.score];
        newState.myTurn = false;
      }
      this.setState(newState);
    } else {
      //alreadyMadeAnInput ... add props to Field that shows the acitve request field...
    }
  }
  makeNotMyTurnErrorTimeout() {
    let newState = { ...this.state };
    let that = this;
    clearTimeout(newState.notMyTurnErrorTimeout);
    newState.notMyTurnErrorTimeout = setTimeout(function () {
      that.setState({ ...that.state, notMyTurnError: [false, false] });
    }, 1000);
    newState.notMyTurnError[0] = false;
    this.setState(newState);
  }
  render() {
    if (this.state.notMyTurnError[0]) {
      this.makeNotMyTurnErrorTimeout(); // throws errors but does the correct job
    }
    return (
      <div>
        <div>
          {this.state.score[0]} : {this.state.score[1]}
        </div>
        <table>
          <tbody>
            <tr>
              <Field fieldid="0"
                text={this.state.data[0]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
              <Field fieldid="1"
                text={this.state.data[1]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
              <Field fieldid="2"
                text={this.state.data[2]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
            </tr>
            <tr>
              <Field fieldid="3"
                text={this.state.data[3]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
              <Field fieldid="4"
                text={this.state.data[4]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
              <Field fieldid="5"
                text={this.state.data[5]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
            </tr>
            <tr>
              <Field fieldid="6"
                text={this.state.data[6]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
              <Field fieldid="7"
                text={this.state.data[7]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
              <Field fieldid="8"
                text={this.state.data[8]}
                myTurn={this.state.myTurn}
                fieldEventHandler={this.fieldEventHandler}
              />
            </tr>
          </tbody>
        </table>
        {this.state.notMyTurnError[1] ?
          <div>Du bist nicht an der Reihe</div>
          :
          ''
        }
      </div>
    );
  }
}

export default TikTakTooField;
