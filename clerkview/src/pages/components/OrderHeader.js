import "./OrderHeader.css";

export default function OrderHeader(props) {
  function detailClick() {
    alert("Order Detail Clicked");
  }

  const { tableId, orderId, date } = props;

  return (
    <div className="order-header">
      <div className="detail">
        <button onClick={() => detailClick()}>Order Detail</button>
      </div>
      <div className="info">
        <h1 style={{ textAlign: "left" }}>TABLE ID: {props.tableId}</h1>
        <h1 style={{ textAlign: "center" }}>ORDER ID: {props.orderId}</h1>
        <h1 style={{ textAlign: "right" }}>
          Date: {props.date.split(/[T]/)[0]}
        </h1>
      </div>
      <h1>Cart Info</h1>
      <div className="attribute">
        <span style={{ textAlign: "left" }}>Food Names</span>
        <span style={{ textAlign: "center" }}>Quantities</span>
        <span style={{ textAlign: "right" }}>Price Per Unit</span>
      </div>
    </div>
  );
}
