import React from 'react';
// import MainLayout from '../../layouts/MainLayout/MainLayout';

function Navbar() {
  return (
    <nav className="container w-full">
      <div>
        <ul className="flex my-3 gap-9 ml-72 font-extrabold">
          <li>Web Development </li>
          <li>Software Development </li>
          <li>Application Development </li>
          <li>AI/ML Development </li>
          <li>System Integration </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
