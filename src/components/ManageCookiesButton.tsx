'use client';

import React from 'react';

export const ManageCookiesButton: React.FC = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-transform hover:scale-105 cursor-pointer"
    >
      <span>🍪</span> Manage Cookie Settings
    </button>
  );
};

export default ManageCookiesButton;
