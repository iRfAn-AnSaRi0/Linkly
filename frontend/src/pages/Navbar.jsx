import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";  // Import Link

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-3 border-b bg-white">
        <h1 className="text-xl font-bold">Linkly</h1>
        <button
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          className="text-3xl text-gray-800 focus:outline-none z-60"
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-20 z-40"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-4 space-y-4">
          <li>
            <Link to="/" className="block hover:text-blue-600" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/history" className="block hover:text-blue-600" onClick={closeSidebar}>
              History
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
