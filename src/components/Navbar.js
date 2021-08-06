import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav-container'>
                    <div className='left-nav'>
                        <Link to='/claculator/home'><h3>Home</h3></Link>
                    </div>
                    <div className="nav-add">
                        <Link to='/claculator/add'><h3>Addition</h3></Link>
                    </div>
                    <div className="nav-subtract">
                        <Link to='/claculator/subtract'><h3>Subtraction</h3></Link>
                    </div>
                    <div className="nav-divide">
                        <Link to='/claculator/divide'><h3>Division</h3></Link>
                    </div>
                    <div className='nav-multiply'>
                        <Link to='/claculator/multiply'><h3>Multiplication</h3>   </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;