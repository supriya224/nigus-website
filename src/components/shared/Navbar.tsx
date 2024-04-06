/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EllipsisVertical, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>('');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <nav className="container w-full">
        <div className=" ">
          <ul className="hidden md:flex my-3 gap-9 lg:ml-72  xl:ml-72 font-extrabold ">
            <Link to="/">
              <li
                className={
                  activeButton === 'Web Development' ? 'text-blue-400' : ''
                }
                onClick={() => handleButtonClick('Web Development')}
              >
                Web Development{' '}
              </li>
            </Link>
            <Link to="/application-development">
              <li
                className={
                  activeButton === 'Application Development' ? 'active' : ''
                }
                onClick={() => handleButtonClick('Application Development')}
              >
                Application Development{' '}
              </li>
            </Link>
            <Link to="/software-development">
              <li
                className={
                  activeButton === 'Software Development' ? 'active' : ''
                }
                onClick={() => handleButtonClick('Software Development')}
              >
                Software Development{' '}
              </li>
            </Link>
            <Link to="/al-ml-development">
              <li
                className={activeButton === 'AI/ML Development' ? 'active' : ''}
                onClick={() => handleButtonClick('AI/ML Development')}
              >
                AI/ML Development{' '}
              </li>
            </Link>
            <Link to="/system-development">
              <li
                className={
                  activeButton === 'System Integration' ? 'active' : ''
                }
                onClick={() => handleButtonClick('System Integration')}
              >
                System Integration{' '}
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden container mx-6 my-6">
          <button type="button" onClick={toggleNavbar} className=" relative">
            {isOpen ? (
              <X className="" />
            ) : (
              <EllipsisVertical className="bg-red-900 absolute bottom-9 left-72" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className=" bg-black text-white scale-75">
          <ul className="my-3 gap-9 ml-72 font-extrabold">
            <Link to="/">
              <li
                className={activeButton === 'Web Development' ? 'active' : ''}
                onClick={() => handleButtonClick('Web Development')}
              >
                Web Development{' '}
              </li>
            </Link>
            <Link to="/application-development">
              <li
                className={
                  activeButton === 'Application Development' ? 'active' : ''
                }
                onClick={() => handleButtonClick('Application Development')}
              >
                Application Development{' '}
              </li>
            </Link>
            <Link to="/software-development">
              <li
                className={
                  activeButton === 'Software Development' ? 'active' : ''
                }
                onClick={() => handleButtonClick('Software Development')}
              >
                Software Development{' '}
              </li>
            </Link>
            <Link to="/al-ml-development">
              <li
                className={activeButton === 'AI/ML Development' ? 'active' : ''}
                onClick={() => handleButtonClick('AI/ML Development')}
              >
                AI/ML Development{' '}
              </li>
            </Link>
            <Link to="/system-development">
              <li
                className={
                  activeButton === 'System Integration' ? 'active' : ''
                }
                onClick={() => handleButtonClick('System Integration')}
              >
                System Integration{' '}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
