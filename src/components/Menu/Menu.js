import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

export const Menu = (props) => {
  console.log(props)
  return (
    <nav>
      <h1 className='heading'>What's <span className='new'>New?</span></h1>
      <ul className='menu-bar'>
        <li className='nav-category' onClick={() => props.changeNews('local')}>Local News</li>
        <li className='nav-category' onClick={() => props.changeNews('technology')}>Technology</li>
        <li className='nav-category' onClick={() => props.changeNews('entertainment')}>Entertainment</li>
        <li className='nav-category' onClick={() => props.changeNews('science')}>Science</li>
        <li className='nav-category' onClick={() => props.changeNews('health')}>Health</li>
      </ul>
    </nav>
  )
}
