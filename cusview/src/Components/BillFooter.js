import "./BillFooter.css";

export default function BillFooter() {
  function payClick() {
    alert("Pay clicked!");
  }
  function denyPayClick() {
    alert("Pay later");
  }
  return (
    <div className="bill-footer">
      <span></span>
      <button onClick={() => payClick()}>Pay now</button>
      <button onClick={() => denyPayClick()}>Later</button>
    </div>
  );
}
