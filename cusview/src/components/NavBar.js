import "./NavBar.css";

export default function navBar({ Title }) {
  return (
    <div className="navbar">
      <h1 className="insidetext noselect">{Title}</h1>
    </div>
  );
}
