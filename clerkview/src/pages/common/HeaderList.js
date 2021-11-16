import "./HeaderList.css";

export default function HeaderList(props) {
  function detailClick() {
    alert(`${props.title} List Refresh`);
    props.getList();
  }

  const { title, getList } = props;
  return (
    <div className="order-header">
      <div className="detail">
        <button onClick={() => detailClick()}>{title}</button>
      </div>
    </div>
  );
}
