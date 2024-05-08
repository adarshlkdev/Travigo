import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png';
import menu from '../images/menu.svg';
import PopupMenu from './PopupMenu';
import { motion } from 'framer-motion'
const Navbar = ({ navlinks }) => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }
  }, [])


  return (
    <>
      <header className={`
        nav-default ${navState && 'nav-sticky'}
      `}>
        <motion.nav className='flex items-center justify-between travigo-container'
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1
          }}>
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt='logo/img' className='w-22 h-9 object-fill' />
          </NavLink>
          <ul className='flex items-center lg:hidden gap-7'>
            {navlinks?.map((val, i) => (
              <li key={i}><NavLink to={'#'} className="text-lg text-slate-900 transition-all duration-300">{val.link}</NavLink></li>
            ))}
          </ul>
          <ul className='flex items-center lg:hidden'>
            <li><button type='button' className='button-emrald px-7 text-base'>Join Us</button></li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li><button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopup}><img src={menu} alt="menu/svg" className='object-cover shadow-sm filter' /></button></li>
          </ul>
        </motion.nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  )
}

export default Navbar
