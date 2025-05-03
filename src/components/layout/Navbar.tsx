"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import Link from "next/link";

interface NavItem {
  id: number;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Home", href: "#home" },
  { id: 4, label: "Skills", href: "#skills" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 2, label: "About", href: "#about" },
  { id: 5, label: "Contact", href: "#contact" },
];

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="#home" className="text-xl font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AR</span>
            </div>
            <span>AliRaza Dev</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  activeItem === item.id ? "text-cyan-400" : "text-gray-300 hover:text-white"
                )}
                onClick={() => setActiveItem(item.id)}
              >
                {activeItem === item.id && (
                  <motion.span
                    layoutId="activeNavItem"
                    className="absolute left-0 top-full h-0.5 w-full bg-cyan-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button suppressHydrationWarning={true} className="px-4 py-2 text-cyan-500 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-colors text-sm lg:text-base">
              Log In
            </button>
            <button suppressHydrationWarning={true} className="px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors shadow-md text-sm lg:text-base">
              Sign Up
            </button>
          </div>

          <button
            suppressHydrationWarning={true}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 shadow-xl"
            >
              <div className="flex flex-col h-full p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link
                    href="#home"
                    className="text-xl font-bold text-white flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AR</span>
                    </div>
                    <span>AliRaza Dev</span>
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex-1 flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        activeItem === item.id
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      )}
                      onClick={() => {
                        setActiveItem(item.id);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-4 space-y-3">
                  <button className="w-full px-4 py-2 text-cyan-500 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-colors text-sm">
                    Log In
                  </button>
                  <button className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors shadow-md text-sm">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </>
  );
}
