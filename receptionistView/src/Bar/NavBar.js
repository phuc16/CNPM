import './Bar.css';

function NavBar({Title}) {
    function handleClick(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div className="navbar" onClick={handleClick}>
          <h1 className="insidetext noselect">{Title}</h1>
        </div>
    );
}
   
export default NavBar;