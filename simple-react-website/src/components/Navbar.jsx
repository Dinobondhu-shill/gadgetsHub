import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
     <NavLink to={'/'} className='text-4xl font-bold'>Logo</NavLink>
     <div className='flex gap-5 font-medium text-xl'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/'}>Contacts</NavLink>
      <NavLink to={'/'}>Services</NavLink>
      <NavLink to={'/'}>Products</NavLink>
      <NavLink to={'/'}>Blogs</NavLink>
      <NavLink to={'/'}>About us</NavLink>
     </div>
    </div>
  );
};

export default Navbar;