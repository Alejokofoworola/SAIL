import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
const NavBar = () => {
    return (
        <>
            <div id='container'>
                <span id='logo'>Logo</span>
                <div className='navs'>
                    <Link to="/">
                        <div className='link'>Home</div>
                    </Link>
                    <Link to="/about">
                        <div className='link' >About</div>
                    </Link>
                    <Link to="/service">
                        <div className='link' >Services</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar