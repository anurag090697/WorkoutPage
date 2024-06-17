/** @format */

import React from "react";

function Header() {
  return (
    <header className='text-center py-8 px-14'>
      <h1 className='text-5xl my-6'>Awesome Exercises You Should Know</h1>
      <div className='flex items-center justify-center'>
        <input type='text' className="w-2/3 py-3 rounded text-center" placeholder="Search for any exercise"/>
        <button className="px-4 py-2 bg-red-600 rounded text-xl font-medium text-gray-100 border border-red-600 hover:bg-white hover:text-red-600">Search</button>
      </div>
    </header>
  );
}

export default Header;
