"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
     // Logo Rotation Animation Logic (simplified for React)
     const logoImg = document.getElementById('navbar-logo');
     if (sessionStorage.getItem('continueLogoRotation')) {
         sessionStorage.removeItem('continueLogoRotation');
         if (logoImg) {
             logoImg.classList.add('duration-[1500ms]', 'rotate-[1080deg]');
             setTimeout(() => {
                 logoImg.classList.remove('duration-[1500ms]', 'rotate-[1080deg]');
             }, 1300);
         }
     }
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
      const logoImg = document.getElementById('navbar-logo');
      if (logoImg) {
          logoImg.classList.add('duration-[1500ms]', 'rotate-[1080deg]');
          sessionStorage.setItem('continueLogoRotation', 'true');
          // cleanup handled by navigation or timeout in actual navigation
      }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 sm:px-16 py-6 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link href="/" id="logo-link" onClick={handleLogoClick}>
        <Image
          src="/assets/Logo-2.webp"
          alt="logo"
          width={40} // Approximate width based on h-10 (40px)
          height={40}
          className="h-10 w-auto transition-transform ease-out"
          id="navbar-logo"
          priority
        />
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex gap-6 items-center text-white font-medium text-lg uppercase tracking-wider">
        <Link href="/" className="hover:text-gray-200 transition-colors duration-300">HOME</Link>
        <Link href="/portfolio" className="hover:text-gray-200 transition-colors duration-300">PORTFOLIO</Link>
        <Link href="/contatti" className="px-4 py-1 bg-white text-black rounded-sm hover:bg-primary hover:text-white transition-all duration-300">CONTATTAMI</Link>
      </nav>

      {/* Hamburger Button */}
      <button
        id="menu-btn"
        className="block md:hidden text-white z-50 relative w-8 h-8 group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icona burger */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 absolute top-0 left-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        {/* Icona X */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 absolute top-0 left-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        id="menu"
        className={`fixed inset-0 bg-primary text-white z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className={`h-full flex flex-col justify-center items-center space-y-12 text-center px-8 text-4xl font-bold uppercase transition-transform duration-500 delay-100 ${isOpen ? 'translate-y-0' : 'translate-y-10'}`}>
          <Link href="/" className="hover:text-themeYellow transition-colors duration-300" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/portfolio" className="hover:text-themeYellow transition-colors duration-300" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link href="/contatti" className="hover:text-themeYellow transition-colors duration-300" onClick={() => setIsOpen(false)}>CONTATTAMI</Link>
        </div>
      </div>
    </header>
  );
}
