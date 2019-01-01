import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <ul>
      <NavLink  to = '/home'>首页</NavLink>
      <NavLink  to = '/kind'>分类</NavLink>
      <NavLink  to = '/cart'>购物车</NavLink>
      <NavLink  to = '/user'>我的</NavLink>
    </ul>
  </footer>
)

export default Footer
