import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {sortBy} from 'lodash';

class Table extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      property: this.props.property
    }
  }

  render() {
    return (
      <div className="table">
        <div className="table-header">
          <span style={{ width: '20%' }}>
              Id
          </span>
          <span style={{ width: '20%' }}>
              Address
          </span>
          <span style={{ width: '20%' }}>
              Price
          </span>
          <span style={{ width: '20%'}}>
              Last update
          </span>
          <span style={{ width: '20%'}}>
              Type
          </span>
        </div>
        {this.props.property.map(item =>
          <div key={item.objectID} className="table-row">
            <span style={{ width: '20%' }}>{item.id}</span>
            <span style={{ width: '20%' }}>{item.address}</span>
            <span style={{ width: '20%' }}>{item.num_comments}</span>
            <span style={{ width: '20%' }}>{item.points}</span>
            <span style={{ width: '20%' }}>{item.points}</span>
          </div>
        )}
      </div>
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
