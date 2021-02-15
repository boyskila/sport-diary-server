import React from 'react'
import { Link } from 'react-router-dom'

const linkStyles = {
  color: '#fff',
  textDecoration: 'none',
  padding: 10
}

export const Header = () => {
  return (
    <nav
      style={{
        background: '#000',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <Link style={linkStyles} to="/">
        Home
      </Link>
      <Link style={linkStyles} to="/programs">
        Programs
      </Link>
      <Link style={linkStyles} to="/auth">
        Login/Register
      </Link>
    </nav>
  )
}
