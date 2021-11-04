import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const menuItems =
        [
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza',description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza',description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza',description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza',description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza',description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', category: 'pizza',description: 'PIZZA', pricePU: 4.8}
        ];

const DataCategory = () =>{
    const Category = ["pizza", "bugger", "soup", "drink", "other"];

    return (
        <div className="row wrapper_category">
            {
                menuItems.filter((category, index) => (
                    <option key={index} value={category}>

                    </option>
                ))        
            }
        </div>
    );

        }
export default DataCategory;