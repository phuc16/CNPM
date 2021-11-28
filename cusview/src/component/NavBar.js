import './NavBar.css';

function NavBar({Title}) {
    return (
        <div className="navbar">
          <h1 className="insidetext noselect">{Title}</h1>
        </div>
    );
}
   
export default NavBar;