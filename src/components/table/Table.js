import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import {sortBy, toggleFav} from '../../actions';

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
        toggleFav={this.props.toggleFav}
        {...item}
      />
    ))
  };

  sortById = () => {
    return sortBy(this.props.sortBy('id'));
  };

  sortByAddress = () => {
    return sortBy(this.props.sortBy('address'));
  };

  sortByType = () => {
    return sortBy(this.props.sortBy('type'));
  };

  sortByPrice = () => {
    return sortBy(this.props.sortBy('price'));
  };

  sortByDate = () => {
    return sortBy(this.props.sortBy('lastUpdate'));
  };

  render() {
    return (
      <table className="table">
        <thead className="thead-light">
        <tr>
          <th onClick={this.sortById} scope="col">Id</th>
          <th onClick={this.sortByAddress} scope="col">Address</th>
          <th onClick={this.sortByType} scope="col">Type</th>
          <th onClick={this.sortByPrice} scope="col">Price</th>
          <th onClick={this.sortByDate} scope="col">Last Update</th>
          <th scope="col">Add to favorite</th>
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

const mapActionsToProps = dispatch => ({
  sortBy: prop => dispatch((sortBy(prop))),
  toggleFav: assetId => dispatch((toggleFav(assetId))),
});

Table.propTypes = {
  id: PropTypes.number,
  address: PropTypes.string,
  price: PropTypes.number,
  lastUpdate: PropTypes.number,
  type: PropTypes.string
};

export default connect(mapStateToProps, mapActionsToProps)(Table);
