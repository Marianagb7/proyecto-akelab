import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to={'/'}>inicio</Link>
      <Link to={'/exercise_1'}>Ejercicio 1</Link>
      <Link to={'/exercise_2'}>Ejercicio 2</Link>
      <Link to={'/exercise_3'}>Ejercicio 3</Link>
    </nav>
  )
}

export default Nav;