import "./BillHeader.css";
import BillItem from "./BillItem";
import { Link } from 'react-router-dom';


export default function BillHeader(props) {
  function paymentMethod(pmID){
    if(pmID === 1) return "Physical";
    if(pmID === 2) return "Online";
  }

  return (
    <div className="bill-header">
      <div className="info">
        
        <h1 style={{ textAlign: "center" }}>Date: {props.date}</h1>
        <h1 style={{ textAlign: "center" }}>Time: {props.time}</h1>
        <h1 style={{ textAlign: "center" }}>Table No: {props.tableId}</h1>
        <h1 style={{ textAlign: "center" }}>Payment Method: {paymentMethod(props.PaymentMethod)}</h1>
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
            price={(product.pricePU * product.quantity).toFixed(2)}
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
      <div className="footer">
      <Link to="/">
          <button type="button">
            BACK
          </button>
      </Link>
      </div>
    </div>
  );
}
