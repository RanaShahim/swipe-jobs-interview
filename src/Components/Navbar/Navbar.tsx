import React from "react";

interface customNavbarProps{
  worker: any;
}


function Navbar({worker}: customNavbarProps) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <img
          src="https://www.swipejobs.com/images/logo.png"
          alt="Logo"
          className="w-34 h-10 mr-2 bg-white rounded"
        />
      </div>
      <p className="text-2xl font-bold-200 heading">{worker?.firstName} {worker?.lastName}</p>
    </nav>
  );
}

export default Navbar;
