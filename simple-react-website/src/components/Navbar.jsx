import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
const [drawer, setDrawer] = useState(false)


const handleDrawer = ()=>{
  setDrawer(!drawer)
}

  return (
    <div className='flex justify-between items-center'>
     <NavLink to={'/'} className='text-4xl font-bold'>Logo</NavLink>
     <div className=' lg:gap-5 font-medium text-xl hidden md:flex gap-3'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/'}>Contacts</NavLink>
      <NavLink to={'/'}>Services</NavLink>
      <NavLink to={'/'}>Products</NavLink>
      <NavLink to={'/'}>Blogs</NavLink>
      <NavLink to={'/'}>About us</NavLink>
     </div>
     <div onClick={handleDrawer} className='md:hidden relative text-2xl cursor-pointer'>
        {drawer ? "X" : "|||"} 
      </div>
      {drawer && (
        <div
          className='flex flex-col gap-2 font-medium text-xl md:hidden absolute top-10 right-0 bg-[#5ee6c4] w-fit p-5 shadow-lg z-50 rounded-xl'
        >
          <NavLink to='/' onClick={() => setDrawer(false)}>Home</NavLink>
          <NavLink to='/contacts' onClick={() => setDrawer(false)}>Contacts</NavLink>
          <NavLink to='/services' onClick={() => setDrawer(false)}>Services</NavLink>
          <NavLink to='/products' onClick={() => setDrawer(false)}>Products</NavLink>
          <NavLink to='/blogs' onClick={() => setDrawer(false)}>Blogs</NavLink>
          <NavLink to='/about' onClick={() => setDrawer(false)}>About us</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;