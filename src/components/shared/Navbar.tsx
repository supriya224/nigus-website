import React from 'react';
import { Link } from 'react-router-dom';
// import WebDevelopment from '../domains/development-page/WebDevelopment';
// import WebDevelopment from '../domains/development-page/WebDevelopment';
// import MainLayout from '../../layouts/MainLayout/MainLayout';

function Navbar() {
  return (
    <nav className="container w-full">
      <div className="">
        <ul className="flex my-3 gap-9 ml-72 font-extrabold">
          <Link to="/">
            <li>Web Development </li>
          </Link>
          <Link to="/application-development">
            <li>Application Development </li>
          </Link>
          <Link to="/software-development">
            <li>Software Development </li>
          </Link>
          <Link to="/al-ml-development">
            <li>AI/ML Development </li>
          </Link>
          <Link to="/system-development">
            <li>System Integration </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
