import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import MyNavbar from "../component/MyNavbar";
import Slide from '../component/slide';
import Classify from '../component/classify';
import Menu from '../component/menu';

//import NavBar from './NavBar';


function MenuPage() {
  return (
    <div >
    
      <Classify />
      <Menu />
      <Menu />
    </div>
  );
}

export default MenuPage;