'use client';

import Link from 'next/link';
import { Calendar, LayoutDashboard, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#download", label: "Download" },
];

const actionItems = [
  {
    href: "/events",
    label: "Events",
    icon: Calendar
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 border-b ${isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-[hsl(269.80,60%,48.04%)]/5'
          : 'bg-background/80 backdrop-blur-lg border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-minimal"
              >
                {item.label}
              </Link>
            ))}

            <div className="h-4 w-px bg-[hsl(269.80,60%,48.04%)]/10" />

            {actionItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-minimal flex items-center gap-2 text-[hsl(269.80,60%,60%)]"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-4 py-1.5 rounded-lg bg-[hsl(269.80,60%,48.04%)]/10 text-[hsl(269.80,60%,60%)] hover:bg-[hsl(269.80,60%,48.04%)]/20 transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[hsl(269.80,60%,48.04%)]/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[hsl(269.80,60%,60%)]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(269.80,60%,60%)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-[hsl(269.80,60%,48.04%)]/5"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="h-px bg-[hsl(269.80,60%,48.04%)]/10 my-4" />

              {actionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 py-2 text-[hsl(269.80,60%,60%)]"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}

              <Link
                href="/contact"
                className="block w-full text-center py-2 px-4 rounded-lg bg-[hsl(269.80,60%,48.04%)]/10 text-[hsl(269.80,60%,60%)] hover:bg-[hsl(269.80,60%,48.04%)]/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}