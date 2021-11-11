import { useState } from "react";
import Table from "./Table";
import Button from 'react-bootstrap/Button';
import SaveModal from '../Modal/SaveModal.js';

function TableTab({data}) {
    const [show, setShow] = useState(false);
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
                   <Table TableNo={table.TableNo} TableStatus={table.TableStatus} callBack={() => callBack(table.TableNo)} key={table.TableNo}/>
                ))}
            </div>
        </div>
    );
}
   
export default TableTab;