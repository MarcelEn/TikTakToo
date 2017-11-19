import React, { Component } from 'react';
import './Field.css';

class Field extends Component {
  render() {
    return (
      <td className="field">
        <div className={this.props.text !== '' ? 'field-part' : 'field-part available'}  
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
