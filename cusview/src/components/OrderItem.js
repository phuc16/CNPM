import './OrderItem.css';

import remove from './img/remove.png';
import add from './img/add.png';
import minus from './img/minus.png';

export default function OrderItem(props){
    const { imgUrl, name, quantity, pricePU, removeProduct, addQuantity, minusQuantity } = props;

    return(
        <div className="orderItem">
            <img src= {imgUrl} alt=''/>
            <span className="name">{name}</span>
            <span className="quantity" style={{textAlign: 'center'}}>
                <img src= {minus} onClick={minusQuantity} alt=''/>
                <span>{quantity}</span>
                <img src= {add} onClick={addQuantity} alt=''/>
            </span>
            
            <span style={{textAlign: 'right'}}>{pricePU}$</span>
            <img className="remove" src={remove} onClick={removeProduct} alt='' />
        </div>
    );
}
