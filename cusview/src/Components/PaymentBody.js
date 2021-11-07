import "./PaymentBody.css";
import { Link } from "react-router-dom";

export default function PaymentBody({handlePhysical, handleOnline}) {
  function PhysicalMethodClick() {
    handlePhysical();
    alert("Physical Method Clicked");
  }

  function OnlineMethodClick() {
    handleOnline();
    alert("Online Method Clicked");
  }

  return (
    <div className="PaymentBody">
      <div className="cash_confirm">
        <h2>Physical Payment</h2>
        
        <Link to="/cart/payment/bill">
          <button onClick={() => PhysicalMethodClick()}>Confirm</button>
        </Link>
      </div>

      <div className="cash_confirm">
        <h2>Online Payment</h2>
        <Link to="/cart/payment/bill">
          <button onClick={() => OnlineMethodClick()}>Confirm</button>
        </Link>
      </div>
    </div>
  );
}
