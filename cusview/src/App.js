import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import MyNavbar from './component/MyNavbar';
import Slide from './component/slide';
import Classify from './component/classify';
import Menu from './component/menu';
import MenuPage from './pages/menupage';


//import NavBar from './NavBar';
import './App.css';

function App() {
  
  
      return (
         
          <div>                        
            <Router>
              <React.Fragment>
                  <MyNavbar />   
                  <Slide />        
                  <MenuPage/>                             
              </React.Fragment>
              </Router>
         
          </div>
      );
    
  }

export default App;