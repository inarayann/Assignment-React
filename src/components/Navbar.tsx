import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', exact: true },
    { name: 'Generate', path: '/timeline' },
    { name: 'Pricing', path: '/cards' },
    { name: 'Carousel', path: '/carousel' },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary fw-bold fs-4" to="/">Template Ai</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navItems.map((item) => (
              <li className="nav-item px-2" key={item.path}>
                <NavLink className="nav-link" to={item.path} end={item.exact ?? false}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;