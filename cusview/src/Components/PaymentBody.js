import "./PaymentBody.css";
import { Link } from "react-router-dom";

export default function PaymentBody(props) {
  function PhysicalMethodClick() {
    props.handlePhysical();
    // alert("Physical Method Clicked");
  }

  function OnlineMethodClick() {
    props.openModal();
  }

  return (
    <div className="PaymentBody">
      <div className="cash_confirm">
        <h2>Physical Payment</h2>
        <Link to={`/${props.TableNo}/cart/payment/bill`}>
          <button onClick={() => PhysicalMethodClick()}>
            <h1>Pay Later</h1>
          </button>
        </Link>
      </div>

      <div className="cash_confirm">
        <h2>Online Payment</h2>
        <button onClick={() => OnlineMethodClick()}>
          <h1>Pay Now</h1>
        </button>
      </div>
    </div>
  );
}
