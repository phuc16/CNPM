import "./NavBar.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from 'react-router-dom';

const MyNavbar = (props) => {
    return (
        <div>
            <div className="header" >
                <div className="header-left">
                    <h1>TODAY MENU</h1>
                </div>

                <div className="header-right">
                    <Link to={`/${props.TableNo}/cart`}>
                        <div><AiOutlineShoppingCart size={30} style={{marginRight: "5px"}}/></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MyNavbar;