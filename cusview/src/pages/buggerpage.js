import React from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

const buggerItems = [
  {
    id: 6,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 7,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 8,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 9,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 10,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
];

const BuggerPage = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Slide />
      <Category />
      <div className="content">
        <div className="product-list">
          <CartContext.Consumer>
            {({ addItemToCart }) =>
              buggerItems.map((item) => (
                <Menu
                  key={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  category={item.category}
                  description={item.description}
                  pricePU={item.pricePU}
                  addItemToCart={() => addItemToCart(item)}
                />
              ))
            }
          </CartContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default BuggerPage;
