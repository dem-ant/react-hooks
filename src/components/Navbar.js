import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div className='navbar-brand'>
      Github Search
    </div>

    <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/'>Главная</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/about'>Информация</NavLink>
      </li>
    </ul>
  </nav>
)