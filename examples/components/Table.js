import React from 'react';
import Formsy from 'formsy-react';

const MyTable = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],


  render() {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = 'form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');


    return (
      <div className={className}>
        <table
        name={this.props.name}
        >
        <tbody><tr>
        <th>"Sr. No."</th>
        <th>"value"</th>
        </tr>
        </tbody></table>
  </div>
    );
  }
});

export default MyTable;
