import React from "react";
import Logo from "./assets/Logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <img src={Logo} className="w-30 pt-1" alt="Logo" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 tracking-tight">
            CMP Performance Measures
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
