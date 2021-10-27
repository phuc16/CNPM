import { useState } from "react";
import { Link } from "react-router-dom";

function SelBar({option1, option2}) {
    function handleClickLeft(e) {
        console.log('You clicked option 1');
        if (tab === 1) return; 
        else setTab(1);
    }

    function handleClickRight(e) {
        console.log('You clicked option 2');
        if (tab === 1) setTab(2);
    }

    const [tab,setTab] = useState(1)

    return (
        <div className="select-bar-container">
            <Link to="/Reservation" onClick={() => handleClickLeft()}>
                <div className={tab === 1? "currentoption" : "otheroption"} >
                    <h1 className="insidetext">{option1}</h1>
                </div>
            </Link>
            <Link to="/" onClick={handleClickRight}>
                <div className={tab === 2? "currentoption" : "otheroption"} >
                    <h1 className="insidetext">{option2}</h1>
                </div>
            </Link>
        </div>
    );
}
   
export default SelBar;