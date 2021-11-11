import { useState } from "react";
import Table from "./Table";
import Button from 'react-bootstrap/Button';
import SaveModal from '../Modal/SaveModal.js';

function TableTab({data, updateFunc}) {
    const [show, setShow] = useState(false);
    const [tables, setTables] = useState(data);
    const [changes, setChanges] = useState(Array(data.length).fill(false));

    async function pushChangetoDB(){
        changes.forEach((change, index) => {
            if(change === true){
                updateFunc(index + 1);
            }
        });
    }

    async function saveData(){
        pushChangetoDB();
        setChanges(Array(data.length).fill(false));
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