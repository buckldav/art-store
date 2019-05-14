import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => (
  <aside id="site-sidebar">
    <h1>toby pontious</h1>
    <p>Hi. I'm Toby. I make art.</p>
    <nav id="site-nav">
      <a href="/">STORE</a>
      <a href="/about">ABOUT</a>
      <a href="/contact">CONTACT</a>
      <span id="social">
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </span>
    </nav>
  </aside>
)

export default Sidebar;