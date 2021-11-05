import React, { Component } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from '../component/menu';

const soupItems =
        [
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8}
                
        ];

const SoupPage = () => {
    return (
      <div className="App">        
        <MyNavbar />   
        <Slide />
        <Category /> 
          <div className="content">

            <div className="product-list">
              
                {
                    soupItems.map((item) => (
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

export default SoupPage