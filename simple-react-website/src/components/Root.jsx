
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='px-2 py-2 md:px-10 md:py-8'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;