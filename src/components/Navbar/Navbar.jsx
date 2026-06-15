import React from 'react';
import { Link, NavLink } from 'react-router';
import'./navbar.css'
const Navbar = () => {
    const links = <>
        <NavLink to={'/'} ><li className='mr-4'>Home</li></NavLink>
        <NavLink to={'/listedBook'} ><li className='mr-4'>Listed Books</li></NavLink>
        <NavLink to={'/pageLoad'} ><li className='mr-4'>Pages to Read</li></NavLink>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn m-2 text-white bg-green-300">Sign in</a>
                <a className="btn text-white bg-blue-300">Sign up</a>
            </div>
        </div>
    );
};

export default Navbar;