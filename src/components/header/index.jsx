import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { auth } from '../../firebase/utils'

import { ReactComponent as Logo } from '../../assets/original.svg'
import './styles.scss'

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options-container'>
      <Link className='option' to="/shop">SHOP</Link>
      <Link className='option' to="/">CONTACT</Link>
      {currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>  :
        <Link className='option' to='/sign-in'>SIGN IN</Link>
    }
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)