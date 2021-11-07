import { Component } from "react";
import PaymentHeader from "../Components/PaymentHeader";
import PaymentBody from "../Components/PaymentBody";
import NavBar from "../Components/NavBar";
import { CartContext } from "../contexts/Cart";


class Payment extends Component {

  render() {
    return (
      <div>
        <NavBar Title="Payment" />
        <div className="content">
          <CartContext.Consumer>
            {({ tableId, orderId, date, time, totalCost }) => (
              <PaymentHeader
                tableId={tableId}
                orderId={orderId}
                date={date}
                time={time}
                totalCost={totalCost}
              />
            )}
          </CartContext.Consumer>
          
          <CartContext.Consumer>
            {({ changeToOnline, changeToPhysical }) => (
                <PaymentBody handleOnline={changeToOnline} handlePhysical={changeToPhysical}/>
            )}
          </CartContext.Consumer>
          
        </div>
      </div>
    );
  }
}

export default Payment;
