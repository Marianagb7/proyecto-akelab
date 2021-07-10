import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='header'>
      <figure>
        <img src="./icon1.png" alt="Mi Logo"/>
      </figure>
      <Nav />
    </header>
  )
}

export default Header;