import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsFillCartCheckFill } from 'react-icons/bs';

export default function Header() {
  return (
    <header>
      <h1>ELECTRO SHOP</h1>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/login">로그인</Link></li>
          <li><Link to="/cart"><BsFillCartCheckFill /></Link></li>
        </ul>
      </nav>
    </header>
  )
}
