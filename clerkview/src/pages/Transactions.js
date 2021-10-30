import React, { Component } from "react";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentId: 1,
      type: "Direct",
      timePassed: "6m",
    };
  }

  componentDidMount = () => {};

  render() {
    return <h2>Transactions Pages</h2>;
  }
}

export default Transactions;
