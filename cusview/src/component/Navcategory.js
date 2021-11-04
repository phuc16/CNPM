import React, { useState } from 'react';
import PropTypes from 'prop-types';

NavCategory.propTypes = {
    Click: PropTypes.func,
    category: PropTypes.string
};

NavCategory.defaultProps = {
    Click: null,
    category: ''
}

function NavCategory(props) {

    const { Click, category } = props
    
    const handlerChange = (value) => {

        if (!Click){
            return
        }

        // setActive(value)
        Click(value)
    }

    return (
        <div className="btn_category">
            
            <a 
                className="Click_category" 
                style={category === 'pizza' ? {backgroundColor: '#0AA85C', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#0AA85C'}} 
                onClick={() => handlerChange('pizza')}>
                PIZZA
            </a>
            <a 
                className="Click_category" 
                style={category === 'bugger' ? {backgroundColor: '#0AA85C', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#0AA85C'}} 
                onClick={() => handlerChange('bugger')}>
                BUGGER
            </a>
            <a 
                className="Click_category" 
                style={category === 'soup' ? {backgroundColor: '#0AA85C', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#0AA85C'}} 
                onClick={() => handlerChange('soup')}>
                SOUP
            </a>
            <a 
                className="Click_category" 
                style={category === 'drink' ? {backgroundColor: '#0AA85C', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#0AA85C'}} 
                onClick={() => handlerChange('drink')}>
                DRINK
            </a>
            <a 
                className="Click_category" 
                style={category === 'other' ? {backgroundColor: '#0AA85C', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#0AA85C'}} 
                onClick={() => handlerChange('other')}>
                OTHER
            </a>
        </div>
    );
}

export default NavCategory;