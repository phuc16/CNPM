import "./BillItem.css";

export default function BillItem(props) {
  const { name, quantity, price } = props;

  return (
    <div className="bill-item">
      <span className="name">{name}</span>
      <span style={{ textAlign: "center" }}>{quantity}</span>
      <span style={{ textAlign: "right" }}>{price}$</span>
    </div>
  );
}
