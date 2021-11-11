import Modal from '../Modal/Modal.js';
import { useState } from 'react';

function SaveModal ({ show, handleClose, saveData }) {
    const [querying, setQuerying] = useState(false);

    async function Save(){
        setQuerying(true);
        saveData();
        setQuerying(false);
    }

    return (
        <Modal show={show} handleClose={handleClose}>
            {querying 
            ? 
            <h1> Querying </h1>
            :
            <>
            <h1> Save changes to Database ? </h1>
            <div className="button-div">
                <button className="BlueButton" onClick={Save}> Save </button>
                <button className="BlackButton" onClick={handleClose}> Close </button>
            </div>
            </>
            }
        </Modal>
    );
};
export default SaveModal;