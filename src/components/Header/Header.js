import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-white px-12 py-8 flex justify-center md:justify-between sticky top-0 '>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-blue-600'>Hour Passion</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <Link to='/'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;