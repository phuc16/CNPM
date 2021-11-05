import React, { Component } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from '../component/menu';

const buggerItems =
        [
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8}
                
        ];

const BuggerPage = () => {
    return (
      <div className="App">        
        <MyNavbar />   
        <Slide />
        <Category /> 
          <div className="content">

            <div className="product-list">
              
                {
                    buggerItems.map((item) => (
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

export default BuggerPage