import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../../components/HistoryItem';

const OrderHistory = ({ orders, getOrderHistory }) => {
  useEffect(() => {
    getOrderHistory();
  }, [getOrderHistory]);

  const orderList =
    orders.length > 0 ? (
      <div className="history">
        <ul>
          {orders.map((item, index) => {
            return (
              <li key={index}>
                <HistoryItem
                  name={item.name}
                  quantity={item.quantity}
                  dateOrder={item.dateOrder}
                />
              </li>
            );
          })}
        </ul>
      </div>
    ) : (
      <section className="no-items"> No orders made yet!</section>
    );
  return orderList;
};

OrderHistory.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      priceDol: PropTypes.string,
      date: PropTypes.date,
    })
  ).isRequired,
  getOrderHistory: PropTypes.func.isRequired,
};
export default OrderHistory;
