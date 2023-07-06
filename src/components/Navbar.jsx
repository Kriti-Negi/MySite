import { Link } from 'react-router-dom';
import navIcon from '../images/nav-icon.png';

function Navbar(){
    return (
        <nav>
            <Link to = "/">
                <img width = "50" src = {navIcon} alt = "icon"/>
            </Link>
        </nav>
    )
}

export default Navbar;