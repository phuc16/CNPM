import "./OrderFooter.css";
import { Redirect } from "react-router-dom";

export default function OrderFooter(props) {
  function comfirmClick(item) {
    props.onConfirm(item.PaymentID);
    alert(`Comfirm payment ${item.PaymentID}`);
    props.history.replace("/payments");
  }

  const { item, onConfirm, totalCost, history } = props;

  return (
    <div className="order-footer">
      <div className="confirm">
        <button onClick={() => comfirmClick(item)}>
          Confirm Customer Payment
        </button>
      </div>
    </div>
  );
}
