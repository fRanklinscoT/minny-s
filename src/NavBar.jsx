import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Services', path: '/services' },
    { id: 3, text: 'Contact', path: '/contact' },
    { id: 4, text: <FaShoppingCart />, path: '/offers' }, // Changed this to use the shopping cart icon
  ];

  return (
    <div className="relative z-10">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-yellow-500'>
        {/* Logo */}
        <h1 className='w-full text-3xl font-bold text-yellow-500 gupter-bold'>Minnys Gifts & Crafts</h1>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li key={item.id} className='p-4 hover:bg-yellow-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <h1 className='w-full text-3xl font-bold text-yellow-500 m-4'>Minnys Gifts & Crafts</h1>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li key={item.id} className='p-4 border-b rounded-xl hover:bg-yellow-400 duration-300 hover:text-white cursor-pointer border-gray-600'>
              <Link to={item.path} onClick={handleNav}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
