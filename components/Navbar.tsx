
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-semibold tracking-wide">
          Knera
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li><Link href="/" className="hover:text-black transition">Home</Link></li>
          <li><Link href="/shop" className="hover:text-black transition">Shop</Link></li>
          <li><Link href="/about" className="hover:text-black transition">About</Link></li>

          <li className="relative">
            <Link href="/cart" className="hover:text-black transition">
              Cart
            </Link>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </li>
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-8 gap-6 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      )}
    </header>
  );
}
