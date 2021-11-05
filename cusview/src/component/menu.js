import React, { useState} from 'react';
import { Card } from 'react-bootstrap';
import "./menu.css"
import MyNavbar from './MyNavbar';
export default function Menu(props){


  const { imgUrl, name, catelogy, description, pricePU } = props;
    return (
    <div>
      <li class="main-product">
                    <div class="img-product">
                    <img class="card-img-top" src= {imgUrl} alt=''/>
                    </div>
                    <div class="content-product">
                        <h3 class="content-product-h3">{name}</h3>
                        <h3 class="content-product-h3">{description}</h3>

                        <div class="content-product-deltals">
                            <div class="price">
                                <span class="money">{pricePU}$</span>
                            </div>
                            <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
                        </div>
                    </div>
        </li>
      </div>

    );
}