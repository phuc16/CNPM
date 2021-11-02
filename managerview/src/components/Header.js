import './Header.css'
import { NavLink } from 'react-router-dom';
import React from 'react';
import {TabName} from './HeaderElements';

export default function Header(props) {
        return (
          <React.Fragment>
          <TabName>{props.tab}</TabName>
          <div className="btn-container">
          <div className="tab">
          <NavLink to='/' activeClassName='tab-active' className='btn'>Order History</NavLink>
          </div>
          <div className="tab">
          <NavLink to='/statistics/transaction' activeClassName='tab-active' className='btn'>Transaction History</NavLink>
          </div>
          </div>
          
          </React.Fragment>
       
        );
}