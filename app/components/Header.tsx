"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 lg:px-6 h-16 flex items-center justify-between border-b border-blue-400/20 bg-gradient-to-br from-blue-900/40 to-zinc-900/40 backdrop-blur-md shadow-sm">
      <Link
        className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
        href="#"
      >
        Portfolio
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex ml-auto gap-6 text-sm font-medium text-slate-300">
        <Link className="hover:text-blue-300 transition-colors" href="#about">About Me</Link>
        <Link className="hover:text-blue-300 transition-colors" href="#projects">Projects</Link>
        <Link className="hover:text-blue-300 transition-colors" href="#contact">Contact</Link>
      </nav>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-slate-300 hover:text-blue-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700/40 rounded-xl shadow-lg p-4 space-y-3 flex flex-col md:hidden animate-in slide-in-from-top-2 fade-in">
          <Link
            href="#about"
            className="text-slate-300 hover:text-blue-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="#projects"
            className="text-slate-300 hover:text-blue-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 hover:text-blue-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
