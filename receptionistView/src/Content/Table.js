import { useState } from "react";

function Table({tableNo, tableStatus, callBack}) {
    const[status,setStatus] = useState(tableStatus)

    const handleToggle = () => {
        console.log(tableNo);
        callBack();
        if(status === "unoccupied") setStatus("occupied");
        else setStatus("unoccupied");
        
    };

    return (
        <div className="table">
            <h2 className="noselect">Table {tableNo}</h2>
            <div className={status === "unoccupied" ? "unoccupied" : "occupied"} onClick={handleToggle}></div>
            <div className="button noselect" onClick={handleToggle} >Update</div>
        </div>
    );
}
   
export default Table;