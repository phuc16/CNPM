import './PaymentHeader.css';

export default function PaymentHeader(props) {
    return ( 
        <div class = "Payment-header" >
            <div class = "info">
                <h4> DATE: {props.date} </h4>
                <h4> TIME: {props.time} </h4> 
                <h4> TABLE No: {props.tableId} </h4> 
                <h4> ORDER ID: {props.orderId} </h4>  
                
            	<div class = "sub_info" >
                	<h4> Total Cost:{props.totalCost} </h4>
        	</div>
	    </div> 
	</div>
    );
}