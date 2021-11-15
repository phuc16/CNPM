import React, { useState, useEffect  } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

import axios from 'axios';

const menuItems = [];


export default function MenuPage() {
  const [curMenu, setCurMenu] = useState(menuItems);
  
  useEffect(() => {
    axios.get('http://localhost:3001/customer/get/products')
    .then(response => {
      // console.log(response.data.results);
      setCurMenu(response.data.results);
    })
    .catch((error) => {
        console.log(error);
      })
  }, []);

  function reset(event){
    event.preventDefault();
    axios.get('http://localhost:3001/customer/get/products')
    .then(response => {
      // console.log(response.data.results);
      setCurMenu(response.data.results);
    })
    .catch((error) => {
        console.log(error);
      })
  }

  function filterPizza(event){
    event.preventDefault();
    axios.get('http://localhost:3001/customer/get/products')
    .then(response => {
      setCurMenu(response.data.results.filter((product) => product.Category === 'Breakfast'));
    })
    .catch((error) => {
        console.log(error);
      })
  }

  function filterBurger(event){
    event.preventDefault();
    axios.get('http://localhost:3001/customer/get/products')
    .then(response => {
      setCurMenu(response.data.results.filter((product) => product.Category === 'Lunch'));
    })
    .catch((error) => {
        console.log(error);
      })
  }

  function filterSoup(event){
    event.preventDefault();
    axios.get('http://localhost:3001/customer/get/products')
    .then(response => {
      setCurMenu(response.data.results.filter((product) => product.Category === 'Sweet'));
    })
    .catch((error) => {
        console.log(error);
      })
  }

  function filterTea(event){
    event.preventDefault();
    axios.get('http://localhost:3001/customer/get/products')
    .then(response => {
      setCurMenu(response.data.results.filter((product) => product.Category === 'Drink'));
    })
    .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="App">
    <CartContext.Consumer>
      {({ TableNo }) => <MyNavbar TableNo = {TableNo}/>}
      </CartContext.Consumer>
      <Slide />
      <Category reset={reset} pizza={filterPizza} burger={filterBurger} soup={filterSoup} tea={filterTea}  />
      <div className="content">
        <div className="product-list">
          <CartContext.Consumer>
            {({ addItemToCart }) =>
              curMenu.map((item) => (
                <Menu
                  key={item.ProductID}
                  ImgLink={item.ImgLink}
                  Name={item.Name}
                  Category={item.Category}
                  Price={item.Price}
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
