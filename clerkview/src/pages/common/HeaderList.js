import "./HeaderList.css";

export default function HeaderList(props) {
  function detailClick() {
    alert(`${props.title} Header Clicked`);
  }

  const { title } = props;
  return (
    <div className="order-header">
      <div className="detail">
        <button onClick={() => detailClick()}>{title}</button>
      </div>
    </div>
  );
}
