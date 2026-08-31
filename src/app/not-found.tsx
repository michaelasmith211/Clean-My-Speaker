import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center text-3xl font-bold">
          🔊
        </div>
        <h1 className="text-4xl font-extrabold text-white">404 - Page Not Found</h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          The page you are looking for might have been removed or moved. If you need to clean your phone speaker, jump straight into the cleaner tool below.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            Launch Clean My Speaker Tool →
          </Link>
        </div>
      </div>
    </main>
  );
}
