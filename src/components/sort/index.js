import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Button from '../button';

const Sort = ({ sortKey, children}) => {
    const sortClass = classNames(
        'button-inline'
    );

    return(
        <Button onClick={(sortKey) => console.log(sortKey)} className={sortClass}>
            {children}
        </Button>
    );
};

Sort.propTypes = {
    onSort: PropTypes.func,
    sortKey: PropTypes.string,
    children: PropTypes.node
};

export default Sort;
