import "./NavBar.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

const MyNavbar = () => {

    return (
        <div>
            <div className="header" >
                <div className="header-left">
                    <h1>TODAY MENU</h1>
                </div>

                <div className="header-right">
                    <Link to='/cart'>
                        <div><AiOutlineShoppingCart size={30} style={{marginRight: "5px"}}/></div>
                    </Link>
                    <Link to='/bill'>
                    <div><RiBillLine size={30} style={{marginRight: "5px"}}/></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MyNavbar;