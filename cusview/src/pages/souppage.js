import React from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

const soupItems = [
  {
    id: 11,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 12,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 13,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 14,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 15,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
];

const SoupPage = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Slide />
      <Category />
      <div className="content">
        <div className="product-list">
          <CartContext.Consumer>
            {({ addItemToCart }) =>
              soupItems.map((item) => (
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

export default SoupPage;
