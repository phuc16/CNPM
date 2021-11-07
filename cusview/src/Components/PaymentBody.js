import "./PaymentBody.css";
import { Link } from "react-router-dom";

export default function PaymentBody({ openModal }) {
  function PhysicalMethodClick() {
    alert("Cash method Clicked");
  }

  function OnlineMethodClick() {
    openModal();
  }

  return (
    <div className="PaymentBody">
      <div className="cash_confirm">
        <h2>Physical Payment</h2>
        <Link to="/cart/payment/bill">
          <button onClick={() => PhysicalMethodClick()}>Confirm</button>
        </Link>
      </div>

      <div class="online_payment">
        <div class="online_payment_title">
          <h2>Online Payment</h2>
        </div>

        <div class="online_confirm">
          <button onClick={() => OnlineMethodClick()}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
