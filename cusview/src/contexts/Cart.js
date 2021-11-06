import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableId: 1,
            orderId: '0D123456',
            cartItems:
            [],
        };

        this.addItemToCart = this.addItemToCart.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.submit = this.submit.bind(this);
    }

    addItemToCart(item){
        const { cartItems } = this.state;
        let index = -1;

        for (const i in cartItems){
            if (cartItems[i].id === item.id){
                index = i;
            }
        }

        if (index === -1){
            this.setState({
                cartItems: this.state.cartItems.concat({...item, quantity: 1})
            });
        }
        else{
            const quantity = this.state.cartItems[index].quantity + 1;
            this.setState({
                cartItems: [
                    ...cartItems.slice(0 , index),
                    {...item, quantity : quantity},
                    ...cartItems.slice(index + 1)
                ]
            });
        }
    }

    getTotalCost(){
        let total = this.state.cartItems.reduce((sum, item) => sum + item.pricePU * item.quantity, 0)
        total = total.toFixed(2);
        return total;
    }
    
    getTotalQuantity(){
        return this.state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    changeQuantity(item, change){
        const quantity = change === 'add' ? item.quantity + 1 : (item.quantity <= 1 ? 1 : item.quantity - 1)
        const { cartItems } = this.state;
        const index = cartItems.indexOf(item);
        this.setState({
            cartItems: [
                ...cartItems.slice(0 , index),
                {...item, quantity : quantity},
                ...cartItems.slice(index + 1)
            ]
        });
    }

    removeProduct(item){
        const { cartItems } = this.state;
        const index = cartItems.indexOf(item);
        this.setState({
            cartItems: [
                ...cartItems.slice(0 , index),
                ...cartItems.slice(index + 1)
            ]
        });
    }

    submit(){
        alert(`Product: ${this.state.cartItems.length}, quantity: ${this.getTotalQuantity()}. View console 4 detail`);
        this.state.cartItems.map((item) => console.log(item));
        this.setState({
            cartItems: []
        })
    }

    render(){
        return(
            <CartContext.Provider
                value = {{
                    tableId: this.state.tableId,
                    orderId: this.state.orderId,
                    cartItems: this.state.cartItems,
                    addItemToCart: this.addItemToCart,
                    totalCost: this.getTotalCost(),
                    totalQuantity: this.getTotalQuantity(),
                    changeQuantity: this.changeQuantity,
                    removeProduct: this.removeProduct,
                    submit: this.submit
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}