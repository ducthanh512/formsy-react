import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

import MyInput from './../components/Input';
import MyTable from './../components/Table';

const App = React.createClass({

  functionAddRow() {
    addRow("dataTable");
  },
  render() {
    return (
      <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="status">
            <button type="button" onClick={this.functionAddRow}>Add Row</button>
            <MyInput name="txtInput" type="text" required />
            <MyTable name="dataTable" border="1"/>

      </Form>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('example'));
