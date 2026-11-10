import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

const links = [
  ['/', 'Home'],
  ['/tools', 'Trading Tools'],
  ['/products', 'Digital Products'],
  ['/resources', 'Resources'],
  ['/about', 'About'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
