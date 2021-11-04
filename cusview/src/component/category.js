import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './category.css'
import NavCategory from './Navcategory';
//import DataCategory from './Datacategory';


Category.propTypes = {

};

function Category(props) {

    const [category, setCategory] = useState('pizza')

    const ChangeCategory = (value) => {
        console.log("Category: ", value)

        setCategory(value)
    }

    return (
        <div className="container-fluid wrapper_Category">
            <div>
                <NavCategory Click={ChangeCategory} category={category}/>
                
                
            </div>
        </div>
    );
}

export default Category;