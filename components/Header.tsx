import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="text-2xl font-bold tracking-wider text-white">
    WM2
  </div>
);

const navItems = [
  { name: 'Home', path: '/', external: false },
  { name: 'About Us', path: '/about', external: false },
  { name: 'FAQ', path: '/faq', external: false },
  { name: 'Company Blog', path: '#', external: true }, // Example external link
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors";
  const activeLinkClasses = "bg-gray-900 text-white";

  const renderNavLinks = (isMobile: boolean = false) => {
    return navItems.map((item) => {
      const mobileClasses = isMobile ? 'block ' : '';
      if (item.external) {
        return (
          <a
            key={item.name}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mobileClasses}${navLinkClasses}`}
            onClick={() => isMobile && setIsOpen(false)}
          >
            {item.name}
          </a>
        );
      }
      return (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) => `${mobileClasses}${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
          onClick={() => isMobile && setIsOpen(false)}
          end={item.path === '/'}
        >
          {item.name}
        </NavLink>
      );
    });
  };

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <Logo />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {renderNavLinks()}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
