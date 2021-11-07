import "./OrderHeader.css";

export default function PaymentHeader(props) {
  function detailClick() {
    alert("Payment Detail Clicked");
  }

  const { tableId, paymentId, datetime } = props;

  return (
    <div className="order-header">
      <div className="detail">
        <button onClick={() => detailClick()}>Payment Detail</button>
      </div>
      <div className="info">
        <h1 style={{ textAlign: "left" }}>TABLE ID: {props.tableId}</h1>
        <h1 style={{ textAlign: "center" }}>PAYMENT ID: {props.paymentId}</h1>
        <h1 style={{ textAlign: "right" }}>Date Time: {props.datetime}</h1>
      </div>
      <h1>Payment Info</h1>
    </div>
  );
}
