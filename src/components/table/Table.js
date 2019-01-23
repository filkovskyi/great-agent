import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {sortBy} from 'lodash';
import TableRow from './TableRow';
import {SORT_BY} from '../../actions/';

const SORTS = {
  NONE: property => this.props.property,
  ID: list => sortBy(this.props.property, 'id'),
  ADDRESS: list => sortBy(this.props.property, 'address'),
  TYPE: list => sortBy(this.props.property, 'type'),
  PRICE: list => sortBy(this.props.property, 'price'),
  LAST_UPDATE: list => sortBy(this.props.property, 'last_update')
};

class Table extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      property: this.props.property
    }
  };

  renderTableRows = () => {
    return this.props.property.map((item, key) => (
      <TableRow
        key={key}
        {...item}
      />
    ))
  };

  render() {
    return (
      <table className="table">
        <thead className="thead-light">
        <tr>
          <th scope="col">
            Id
          </th>
          <th scope="col">Address</th>
          <th scope="col">Type</th>
          <th scope="col">Price</th>
          <th scope="col">Last Update</th>
        </tr>
        </thead>
        <tbody>
        {this.renderTableRows()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  property: state.propertyCache
});

Table.propTypes = {
  id: PropTypes.number,
  address: PropTypes.string,
  price: PropTypes.number,
  lastUpdate: PropTypes.number,
  type: PropTypes.string
};

export default connect(mapStateToProps, null)(Table);
