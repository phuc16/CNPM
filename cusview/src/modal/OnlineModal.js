import Modal from './Modal.js';
import Textfield from '@atlaskit/textfield';

function OnlineModal ({ show, valid, invalid, returnBack}) {
    return (
        <Modal show={show} handleClose={returnBack}>
            <div class="online_payment_body">
                <div class="online_item">
                    <p>Bank</p>
                    <Textfield name='Bank' placeholder='Bank name'>
                    </Textfield>
                </div>
                <div class="online_item">
                    <p>Branch</p>
                    <Textfield name='Branch' placeholder='Branch'>
                    </Textfield>
                </div>
                <div class="online_item">
                    <p>Card Number</p>
                    <Textfield name='Card Number' placeholder='Card Number'>
                    </Textfield>
                </div>
                <div className="button-div">
                    <button className="BlueButton" onClick={valid}> Save </button>
                    <button className="BlueButton" onClick={invalid}> Save </button>
                    <button className="BlackButton" onClick={returnBack}> Close </button>
                </div>
            </div>
            
        </Modal>
    );
};
export default OnlineModal;