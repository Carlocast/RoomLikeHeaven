'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Logo" className="h-8 w-8 object-contain" />
          <Link href="/" className="text-green-600 font-bold text-2xl hover:text-green-800 transition">RoomLikeHeaven</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
          <Link href="/case" className="text-gray-700 hover:text-green-600 transition">Case</Link>
          <Link href="/contatti" className="text-gray-700 hover:text-green-600 transition">Contatti</Link>
          <Link href="/login" className="text-gray-700 hover:text-green-600 transition">Login</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none text-2xl">
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md transition duration-300">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Home</Link>
          <Link href="/case" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Case</Link>
          <Link href="/contatti" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Contatti</Link>
          <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Login</Link>
        </div>
      )}
    </nav>
  );
}