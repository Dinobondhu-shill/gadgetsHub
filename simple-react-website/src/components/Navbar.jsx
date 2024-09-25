import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
     <div>Logo</div>
     <div className='ml-5'>
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