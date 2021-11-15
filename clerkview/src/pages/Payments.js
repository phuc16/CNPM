import React, { Component } from "react";
import BillHeader from "./components/BillHeader";
import PaymentHeader from "./components/PaymentHeader";
import PaymentFooter from "./components/PaymentFooter";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableNo: -1,
      PaymentID: "",
      Date: "",
      productItem: [],
    };
  }

  componentDidMount = async () => {
    let PaymentID = this.props.match.params.id;
    let PaymentDetail = await this.props.getPaymentDetail(PaymentID);
    console.log(PaymentDetail);

    let state = {
      TableNo: PaymentDetail[0].TableNo,
      PaymentID: PaymentID,
      Date: PaymentDetail[0].PaymentDate,
      productItem: PaymentDetail,
    };

    console.log("Payment Detail state: ", state);

    this.setState({
      TableNo: state.TableNo,
      PaymentID: state.PaymentID,
      Date: state.Date,
      productItem: state.productItem,
    });
  };

  getTotalCost() {
    let total = this.state.productItem.reduce(
      (sum, product) => sum + product.Price,
      0
    );
    total = total.toFixed(2);
    return total;
  }

  render() {
    const { onConfirm, getPaymentDetail } = this.props;

    const totalCost = this.getTotalCost();

    return (
      <div className="App">
        <div className="content">
          <PaymentHeader
            paymentId={this.state.PaymentID}
            tableId={this.state.TableNo}
            datetime={this.state.Date}
          />
          <BillHeader
            tableId={this.state.TableNo}
            paymentId={this.state.PaymentID}
            datetime={this.state.Date}
            productQuantity={this.state.productItem.length}
            products={this.state.productItem}
            totalCost={totalCost}
          />
          <PaymentFooter
            item={this.state}
            onConfirm={this.props.onConfirm}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

export default Payments;
