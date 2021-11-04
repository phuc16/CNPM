import React, { Component } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Menu from '../component/menu';


const menuItems =
        [
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                 {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8}
                
        ];

const MenuPage = () => {
    return (
      <div className="App">        
        
          <div className="content">

            <div className="product-list">
              
                {
                    menuItems.map((item) => (
                      <Menu
                        imgUrl={item.imgUrl}
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        pricePU={item.pricePU}
                      />
                      )
                    )
                
                }
              
            </div>
          </div>
        
      </div>
    );
  }

export default MenuPage