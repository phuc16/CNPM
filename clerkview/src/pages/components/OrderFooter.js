import "./OrderFooter.css";
import { Redirect } from "react-router-dom";

export default function OrderFooter(props) {
  function comfirmClick(item) {
    props.onConfirm(item.OrderID);
    alert(`Comfirm order ${item.OrderID}`);
    props.history.replace("/orders");
  }

  const { item, onConfirm, totalCost, history } = props;

  return (
    <div className="order-footer">
      <div className="total-cost">
        <span></span>
        <span style={{ textAlign: "center" }}>Total Cost:</span>
        <span style={{ textAlign: "right" }}>{props.totalCost}$</span>
      </div>
      <div className="confirm">
        <button onClick={() => comfirmClick(item)}>
          Confirm Customer Order
        </button>
      </div>
    </div>
  );
}
