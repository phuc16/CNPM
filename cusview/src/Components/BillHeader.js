import "./BillHeader.css";
import BillItem from "./BillItem";

export default function BillHeader(props) {
  return (
    <div className="bill-header">
      <div className="info">
        <h1 style={{ textAlign: "center" }}>DATE: {props.date}</h1>
        <h1 style={{ textAlign: "center" }}>TIME: {props.time}</h1>
        <h1 style={{ textAlign: "center" }}>TABLE NO: {props.tableId}</h1>
        <h1 style={{ textAlign: "center" }}>ORDER ID: {props.orderId}</h1>
      </div>
      <div className="bill-list">
        <div className="attribute">
          <span style={{ textAlign: "left" }}>Food Names</span>
          <span style={{ textAlign: "center" }}>Quantities</span>
          <span style={{ textAlign: "right" }}>Price</span>
        </div>
        <div>
          <hr style={{ color: "#ffff1a", borderColor: "#ffff1a" }} />
        </div>
        {props.products.map((product) => (
          <BillItem
            key={product.id}
            name={product.name}
            quantity={product.quantity}
            price={product.pricePU * product.quantity}
          />
        ))}
        <div>
          <hr style={{ borderColor: "#ffff1a" }} />
        </div>
        <div className="total">
          <span style={{ textAlign: "left" }}>Total</span>
          <span style={{ textAlign: "right" }}>{props.totalCost}$</span>
        </div>
      </div>
    </div>
  );
}
