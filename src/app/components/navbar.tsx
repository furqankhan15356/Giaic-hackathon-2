"use client"; // 👈 Required for Client Components

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"; // ✅ Correct path
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // ✅ Menu Icon
import { HeartIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // ✅ Sheet toggle state

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/home">
            <img src="/Frame 168.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex space-x-6 text-gray-700 font-bold text-lg">
          <Link href="/home" className="hover:text-yellow-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-yellow-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-yellow-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-600">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden xl:flex space-x-4">
          <UserIcon className="h-6 w-6 text-gray-700 hover:text-yellow-600 cursor-pointer" />
          <SearchIcon className="h-6 w-6 text-gray-700 hover:text-yellow-600 cursor-pointer" />
          <HeartIcon className="h-6 w-6 text-gray-700 hover:text-yellow-600 cursor-pointer" />
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-yellow-600 cursor-pointer" />
            <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full text-center">
              3
            </span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="ml-auto flex xl:hidden text-gray-700 hover:text-yellow-600"
              aria-label="Open Menu"
            >
              <FiMenu size={24} />
            </button>
          </SheetTrigger>

          {/* Mobile Menu */}
          <SheetContent side="left" className="bg-white text-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
              <SheetClose asChild>
                <Link href="/home" className="hover:text-yellow-600" role="button">
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/shop" className="hover:text-yellow-600" role="button">
                  Shop
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="hover:text-yellow-600" role="button">
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact" className="hover:text-yellow-600" role="button">
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
