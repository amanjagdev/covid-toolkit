import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/Home' >Home</Link>
            <Link to='/Plasma' >Plasma</Link>
            <Link to='/SlotAvailability' >SlotAvailability</Link>
            <Link to='/News' >News</Link>
            <Link to='/Statistics' >Statistics</Link>
            <Link to='/Resources' >Resources</Link>
        </div>
    )
}

export default NavBar;