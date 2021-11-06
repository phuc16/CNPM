import { useState } from "react";
import Table from "./Table";
import Button from 'react-bootstrap/Button';
import SaveModal from '../Modal/SaveModal.js';

function TableTab() {
    const [show, setShow] = useState(false);
    const data = [
        { tableNo: 1, tableStatus: "unoccupied" }, { tableNo: 2, tableStatus: "unoccupied" }, { tableNo: 3, tableStatus: "unoccupied" }, { tableNo: 4, tableStatus: "unoccupied" }, { tableNo: 5, tableStatus: "unoccupied" },
        { tableNo: 6, tableStatus: "unoccupied" }, { tableNo: 7, tableStatus: "unoccupied" }, { tableNo: 8, tableStatus: "unoccupied" }, { tableNo: 9, tableStatus: "unoccupied" }, { tableNo: 10, tableStatus: "unoccupied" },
        { tableNo: 11, tableStatus: "unoccupied" }, { tableNo: 12, tableStatus: "unoccupied" }, { tableNo: 13, tableStatus: "unoccupied" }, { tableNo: 14, tableStatus: "unoccupied" }, { tableNo: 15, tableStatus: "unoccupied" },
        { tableNo: 16, tableStatus: "unoccupied" }, { tableNo: 17, tableStatus: "unoccupied" }, { tableNo: 18, tableStatus: "unoccupied" }, { tableNo: 19, tableStatus: "unoccupied" }, { tableNo: 20, tableStatus: "unoccupied" },
        { tableNo: 21, tableStatus: "unoccupied" }, { tableNo: 22, tableStatus: "unoccupied" }, { tableNo: 23, tableStatus: "unoccupied" }, { tableNo: 24, tableStatus: "unoccupied" }, { tableNo: 25, tableStatus: "unoccupied" }
    ];
    const [tables, setTables] = useState(data);
    const [changes, setChanges] = useState([
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false,
        false,false,false,false,false
    ]);

    function pushChangetoDB(){
        changes.forEach((change, index) => {
            if(change === true){
                console.log(`Table ${index + 1} has been changed !`);
            }
        });
    }

    function saveData(){
        pushChangetoDB();
        setChanges([
                false,false,false,false,false,
                false,false,false,false,false,
                false,false,false,false,false,
                false,false,false,false,false,
                false,false,false,false,false
        ]);
        setShow(false);
    }

    function handleClose(){
        setShow(false);
    }

    function handleShow(){
        setShow(true);
    }

    function callBack(tableNo){
        changes[tableNo - 1] = !changes[tableNo - 1];
    }

    return (
        <div className="content">
            <SaveModal show={show} handleClose={handleClose} saveData={saveData}></SaveModal>
            <nav className="header">
                <h1 className="noselect">Table List</h1>
                <Button variant="outline-dark" onClick={handleShow}>Save</Button>
            </nav>
            <div className="tableList">
                {tables.map((table/*Each Table*/) => (
                    <Table tableNo={table.tableNo} tableStatus={table.tableStatus} callBack={() => callBack(table.tableNo)} key={table.tableNo}/>
                ))}
            </div>
        </div>
    );
}
   
export default TableTab;