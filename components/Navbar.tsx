// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Yahaya Alhaifi</h1>
      
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className={`md:flex gap-5 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
