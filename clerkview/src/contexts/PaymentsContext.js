import React, { Component, createContext } from "react";
import Axios from "axios";

export const PaymentContext = createContext();

class PaymentProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentsList: [],
    };
  }

  getPaymentList = () => {
    Axios.get("http://localhost:3001/clerk/payment").then((response) => {
      this.setPaymentList(response.data);
    });
  };

  setPaymentList = (paymentsList) => {
    console.log(paymentsList);
    this.setState({ paymentsList: paymentsList });
  };

  updatePaymentStatus = (paymentId) => {
    Axios.post("http://localhost:3001/clerk/updatepayment", {
      paymentId: paymentId,
    })
      .then((res) => {
        console.log("Update payment success", res);
      })
      .catch((err) => console.log(err));
  };

  handleConfirmPayment = (item) => {
    alert(`Confirm payment ${item.PaymentID}`);
    const newPaymentsList = this.state.paymentsList;
    const index = newPaymentsList.findIndex(
      (payment) => payment.PaymentID === item.PaymentID
    );
    newPaymentsList.splice(index, 1);
    this.setState({ paymentsList: newPaymentsList });

    this.updatePaymentStatus(item.PaymentID);
  };

  getPaymentDetail = async (paymentId) => {
    const response = await Axios.post("http://localhost:3001/clerk/payment/detail", {
      paymentId: paymentId,
    });
    // .then((response) => {
    //     console.log("Payment detail get: ", response.data);
    //     return response.data;
    //   });
    return response.data;
  };

  render() {
    return (
      <PaymentContext.Provider
        value={{
          paymentsList: this.state.paymentsList,
          getPaymentList: this.getPaymentList,
          handleConfirmPayment: this.handleConfirmPayment,
          getPaymentDetail: this.getPaymentDetail,
          updatePaymentStatus: this.updatePaymentStatus,
        }}
      >
        {this.props.children}
      </PaymentContext.Provider>
    );
  }
}

export default PaymentProvider;
