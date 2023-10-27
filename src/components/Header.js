import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=> {
  return (
    <>
    <nav>get ready daily goals</nav>

    <div className='Header'>
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
<Link to='/User/:tempId'>User</Link>
    </div>
    </>
  )
}

Header.propTypes = {}

export default Header