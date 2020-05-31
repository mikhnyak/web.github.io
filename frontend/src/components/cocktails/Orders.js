import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrders, deleteOrder } from "../../actions/orders";

export class Orders extends Component {
  static propTypes = {
    orders: PropTypes.array.isRequired,
    getOrders: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <Fragment>
        <h2>My orders</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Date</th>
              <th>Cocktails</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>{order.cocktails}</td>
                <td>
                  <button
                    onClick={this.props.deleteOrder.bind(this, order.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

export default connect(mapStateToProps, { getOrders, deleteOrder })(Orders);
