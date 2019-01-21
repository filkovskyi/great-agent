import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class TableRow extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, address, type, price, lastUpdate,  } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{address}</td>
        <td>{type}</td>
        <td>{price}</td>
        <td>{lastUpdate}</td>
      </tr>
    )
  }
}

TableRow.propTypes = {
  id: PropTypes.number,
  address: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  lastUpdate: PropTypes.number
};
