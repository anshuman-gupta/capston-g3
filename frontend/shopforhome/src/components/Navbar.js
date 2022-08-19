import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { BsBookmarkHeart } from 'react-icons/bs'
import { GrCart } from 'react-icons/gr'

const  Navbar = () => {

    const navigate = useNavigate()
    
    return (
        <div className="nav-container">
            <div className="logo"><h2>NYKAA</h2></div>
            <nav className='row'>
                <div className="nav-items col">
                    <p><NavLink to='/' className="NavLink">Home</NavLink></p>
                    <p><NavLink to='about' className="NavLink">About</NavLink></p>
                    <p><NavLink to='products' className="NavLink">Products</NavLink></p>
                </div>
                <ul className='col'>

                    <li className="item">
                        <BsBookmarkHeart className='icons'/>
                    </li>
                    <li className="item">
                        <GrCart className='icons cart-icon'/>
                    </li>
                    <li className="item">
                            <div className="dropdown">
                            <div className=" dropdown-toggle"  role="button" data-bs-toggle="dropdown">
                                <CgProfile className='icons'/>
                            </div>

                            <ul className="dropdown-menu">
                                <li><a to='signup' className="dropdown-item" onClick={()=>navigate('signup')} >Signup</a></li>
                                <li><a to='login' className="dropdown-item" onClick={()=>navigate('login')} >Login</a></li>
                                <li><a className="dropdown-item" >others</a></li>
                            </ul>
                            </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;