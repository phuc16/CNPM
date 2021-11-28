import "./BillItem.css";

export default function BillItem(props) {
  const { Name, quantity, Price } = props;

  return (
    <div className="bill-item">
      <span className="name">{Name}</span>
      <span style={{ textAlign: "center" }}>{quantity}</span>
      <span style={{ textAlign: "right" }}>{Price}$</span>
    </div>
  );
}
