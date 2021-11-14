import './OrderItem.css';

import remove from './img/remove.png';
import add from './img/add.png';
import minus from './img/minus.png';

export default function OrderItem(props){
    const { ImgLink, Name, quantity, Price, removeProduct, addQuantity, minusQuantity } = props;

    return(
        <div className="orderItem">
            <img src= {ImgLink} alt=''/>
            <span className="name">{Name}</span>
            <span className="quantity" style={{textAlign: 'center'}}>
                <img src= {minus} onClick={minusQuantity} alt=''/>
                <span>{quantity}</span>
                <img src= {add} onClick={addQuantity} alt=''/>
            </span>
            
            <span style={{textAlign: 'right'}}>{Price}$</span>
            <img className="remove" src={remove} onClick={removeProduct} alt='' />
        </div>
    );
}
