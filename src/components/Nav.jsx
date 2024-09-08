import React from 'react';

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-800 p-5 flex items-center font-poppins text-white justify-between z-50">
      <span className="font-semibold text-base">LifeQuotes</span>
      <i className="fa fa-bars text-lg"></i>
    </nav>
  );
}

export default Nav;
