import { useState } from "react";

function Table({tableNo, tableStatus}) {
    const[status,setStatus] = useState(tableStatus)

    const handleToggle = () => {
        if(status === "unoccupied") setStatus("occupied");
        else setStatus("unoccupied");
    };

    return (
        <div className="card">
            <h2>Table {tableNo}</h2>
            <div className={status === "unoccupied" ? "unoccupied" : "occupied"} onClick={handleToggle}></div>
            <div className="button" onClick={handleToggle}>Update</div>
        </div>
    );
}
   
export default Table;