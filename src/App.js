import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css';
import properties$ from './mock';
import { addProperty } from './actions'
import Table from './components/table/Table';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    properties$.subscribe((data) => this.props.addProperty(data))
  }

  render() {
    return (
      <div className="container">
        <h1>Property table</h1>
        <Table/>
      </div>
    );
  }
}

App.propTypes = {
  addProperty: PropTypes.func
};

const mapActionsToProps = dispatch => ({
  addProperty: property => dispatch((addProperty(property)))
});

export default connect(null, mapActionsToProps)(App);
