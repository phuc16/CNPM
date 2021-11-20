import { Component } from "react";
import PaymentHeader from "../Components/PaymentHeader";
import PaymentBody from "../Components/PaymentBody";
import NavBar from "../component/NavBar";
import { CartContext } from "../contexts/Cart";
import PaymentModal from "../Modal/PaymentModal";


class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        check: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.decline = this.decline.bind(this);
    this.proceed = this.proceed.bind(this);
  }

  handleOpen(){
    this.setState({
        check: true
    });
    console.log(this.state.check);
  }

  decline() {
    this.setState({
        check: false
    });
    console.log(this.state.check);
    
  }

  proceed(changeToOnline){
    this.setState({ check: false });
    changeToOnline();
  }

  render() {
    return (
      <div>
        <NavBar Title="PAYMENT" />
        <div className="content">
          <CartContext.Consumer>
            {({ TableNo, OrderID, date, time, totalCost, cartItems }) => (
              cartItems.length > 0 && <PaymentHeader
                TableNo={TableNo}
                OrderID={OrderID}
                date={date}
                time={time}
                totalCost={totalCost}
              />
            )}
          </CartContext.Consumer>
          <CartContext.Consumer>
          {({ TableNo, cartItems, changeToOnline }) =>(
              cartItems.length > 0 && <PaymentModal
                TableNo = {TableNo}
                show={this.state.check} 
                invalid={this.decline} 
                valid={() => {this.proceed(changeToOnline)}}
              />
          )}
          </CartContext.Consumer>

          <CartContext.Consumer>
            {({ TableNo, totalCost, changeToOnline, changeToPhysical, cartItems }) => (
              <div>
                {cartItems.length > 0 && <PaymentBody 
                  TableNo={TableNo}
                  handleOnline={changeToOnline} 
                  handlePhysical={changeToPhysical} 
                  openModal={this.handleOpen}/>}
                {cartItems.length === 0 && <h4 className="empty">Please place your order</h4>}
              </div>
            )}
          </CartContext.Consumer>
          
        </div>
      </div>
    );
  }
}

export default Payment;
