import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../core/utils/utils';

const HistoryItem = ({ name, quantity, dateOrder }) => {
  return (
    <div className="history-item">
      <div className="history-item__detail">
        <span className="history-item__name">{`Product: ${name}`}</span>
        <span className="history-item__quantity">{`Quantity: ${quantity}`}</span>
        <span className="history-item__date">{`Date: ${formatDate(
          dateOrder
        )}`}</span>
      </div>
    </div>
  );
};

HistoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  dateOrder: PropTypes.instanceOf(Date).isRequired,
};
export default HistoryItem;
