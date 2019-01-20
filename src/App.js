import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css';
import properties$ from './mock';
import { addProperty } from './actions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    properties$.subscribe((data) => this.props.addProperty(data))
  }

  render() {
    return (
      <div className="app">
        <h1>Property table</h1>
      </div>
    );
  }
}

App.propTypes = {
  addProperty: PropTypes.func
};

const mapActionsToProps = dispatch => ({
  addProperty: property => dispatch((addProperty(property))),
});

export default connect(null, mapActionsToProps)(App);

