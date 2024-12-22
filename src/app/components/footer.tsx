import Link from 'next/link';
import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link href="/home">
            <img src="/Frame 168.png" alt="Logo" className="h-8" />
          </Link>
            <address className="not-italic text-gray-600 text-sm mt-5">
              652 Main Street, Suite 2nd Floor,<br />
              Brooklyn, NY 11233, USA
            </address>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-gray-800 transition">Home</a></li>
              <li><a href="/shop" className="hover:text-gray-800 transition">Shop</a></li>
              <li><a href="/about" className="hover:text-gray-800 transition">About</a></li>
              <li><a href="/contact" className="hover:text-gray-800 transition">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Help</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition">Payment Options</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Returns</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          © 2024 Funiro by Furqan Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;