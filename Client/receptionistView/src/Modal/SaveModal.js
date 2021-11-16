import Modal from '../Modal/Modal.js';

function SaveModal ({ show, handleClose, saveData }) {
    return (
        <Modal show={show} handleClose={handleClose}>
            <h1> Save changes to Database ? </h1>
            <div className="button-div">
                <button className="BlueButton" onClick={saveData}> Save </button>
                <button className="BlackButton" onClick={handleClose}> Close </button>
            </div>
            
        </Modal>
    );
};
export default SaveModal;