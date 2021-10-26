function SelBar({option1, option2}) {
    function handleClick(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div className="select-bar-container">
            <div className="option" onClick={handleClick}>
                <h1>{option1}</h1>
            </div>
            <div className="option">
                <h1>{option2}</h1>
            </div>
        </div>
    );
}
   
export default SelBar;