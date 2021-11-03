import './PaymentBody.css';
import Textfield from '@atlaskit/textfield';

export default function PaymentBody(){

    function CashMethodClick(){
        alert('Cash method Clicked');
    }

    function OnlineMethodClick(){
        alert('Online method Clicked');
    }

    return(
        <div className="PaymentBody">
            <div className="cash_confirm">
                <h2>Cash Payment</h2>
                <button onClick={() => CashMethodClick()}>Confirm</button>
            </div>

            <div class="online_payment">
                <div class="online_payment_title">
                    <h2>Online Payment</h2>
                </div>
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
                </div>
                <div class="online_confirm">
                    <button onClick={() => OnlineMethodClick()}>Confirm</button>
                </div>
            </div>
        </div>
    );
}