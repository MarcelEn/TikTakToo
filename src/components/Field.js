import React, { Component } from 'react';
import './Field.css';

class Field extends Component {
  render() {
    let classHandler = 'field-part';
    if(this.props.text === ''){
      classHandler+= ' available';
    }
    if(this.props.alreadyMadeAnInput === this.props.fieldid){
      classHandler+= ' selectedInput';
    }
    return (
      <td className="field">
        <div className={classHandler}  
          fieldid={this.props.fieldId}
          onClick={this.props.myTurn ? 
            () => this.props.fieldEventHandler(this.props.fieldid) : 
            () => this.props.fieldEventHandler(false)
          }
          >
          {this.props.text}
        </div>
      </td>
    );
  }
}

export default Field;
