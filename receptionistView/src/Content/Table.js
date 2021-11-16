import { useState } from "react";

function Table({TableNo, TableStatus, callBack}) {
    const[status,setStatus] = useState(TableStatus)

    const handleToggle = () => {
        console.log(TableNo);
        callBack();
        if(status === 1) setStatus(0);
        else setStatus(1);
    };

    return (
        <div className="table">
            <h2 className="noselect">Table {TableNo}</h2>
            <div className={status === 0 ? "unoccupied" : "occupied"} onClick={handleToggle}></div>
            <div className="button noselect" onClick={handleToggle} >Update</div>
        </div>
    );
}
   
export default Table;