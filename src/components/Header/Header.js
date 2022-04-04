import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='bg-white px-12 py-8 flex justify-center md:justify-between sticky top-0 '>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-blue-600'>Hour Passion</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <ActiveLink to='/'>HOME</ActiveLink>
                <ActiveLink to='/reviews'>REVIEWS</ActiveLink>
                <ActiveLink to='/dashboard'>DASHBOARD</ActiveLink>
                <ActiveLink to='/blogs'>BLOGS</ActiveLink>
                <ActiveLink to='/about'>ABOUT</ActiveLink>
            </div>
        </div>
    );
};

export default Header;