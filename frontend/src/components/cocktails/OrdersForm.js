import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addOrder } from "../../actions/orders";
import { getCafes } from "../../actions/cafes";
import { getCocktails } from "../../actions/cocktails";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

export class Form extends Component {
  state = {
    cafe: "",
    price: "",
    status: "",
    cocktails: [],
  };

  static propTypes = {
    addOrder: PropTypes.func.isRequired,
    getCafes: PropTypes.func.isRequired,
    getCocktails: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCocktails();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { cafe, price, status, cocktails } = this.state;
    const order = { cafe, price, status, cocktails };
    this.props.addOrder(order);
    this.setState({
      cafe: "http://127.0.0.1:8000/cafes/1/",
      price: "",
      status: "",
      cocktails: [],
    });
  };

  render() {
    const { price, status, cocktails } = this.state;
    return (
      <div className="card card-body mt-4 mb-4 text-center">
        <h2>Add Order</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>

          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Status
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem
                value={status}
                defaultValue={this.state.selectValue}
                onChange={this.onChange}
              >
                pending
              </MDBDropdownItem>

              <MDBDropdownItem
                value={status}
                defaultValue={this.state.selectValue}
                onChange={this.onChange}
              >
                waiting
              </MDBDropdownItem>
              <MDBDropdownItem
                value={status}
                defaultValue={this.state.selectValue}
                onChange={this.onChange}
              >
                closed
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <div>
            <select
              defaultValue={this.state.selectValue}
              onChange={this.onChange}
            >
              {this.props.cocktails.map((cocktail) => (
                <option key={cocktail.url} value={cocktails}>
                  {cocktail.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cocktails: state.cocktails.cocktails,
});

export default connect(mapStateToProps, { addOrder, getCafes, getCocktails })(
  Form
);
