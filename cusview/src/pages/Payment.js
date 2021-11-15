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

  proceed(){
    this.setState({ check: false });
  }

  render() {
    return (
      <div>
        <NavBar Title="PAYMENT" />
        <div className="content">
          <CartContext.Consumer>
            {({ TableNo, OrderID, date, time, totalCost }) => (
              <PaymentHeader
                TableNo={TableNo}
                OrderID={OrderID}
                date={date}
                time={time}
                totalCost={totalCost}
              />
            )}
          </CartContext.Consumer>
          <CartContext.Consumer>
          {({ TableNo }) =>(
            <PaymentModal
              TableNo = {TableNo}
              show={this.state.check} 
              invalid={this.decline} 
              valid={this.proceed}/>
          )}
          
          </CartContext.Consumer>
          <CartContext.Consumer>
            {({ TableNo, changeToOnline, changeToPhysical }) => (
                <PaymentBody 
                  TableNo={TableNo}
                  handleOnline={changeToOnline} 
                  handlePhysical={changeToPhysical} 
                  openModal={this.handleOpen}/>
            )}
          </CartContext.Consumer>
          
        </div>
      </div>
    );
  }
}

export default Payment;
