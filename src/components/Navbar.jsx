import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950 bg-opacity-50 backdrop-blur-md text-white z-50 px-4 py-3 flex justify-between items-center shadow-md">
      <div className="font-bold text-3xl font-poppins">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.1 }}>
          <a href="#home">
            DevH<span className="text-lg">.</span>
            <span className="text-blue-400">io</span>
          </a>
        </motion.div>
      </div>

      <nav className="hidden md:flex space-x-6 text-lg font-poppins">
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.1 }}>
          <a href="#home" className="hover:text-blue-400 hover:underline">
            Home
          </a>
        </motion.a>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.1 }}>
          <a href="#about" className="hover:text-blue-400 hover:underline">
            About
          </a>
        </motion.a>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.1 }}>
          <a href="#projects" className="hover:text-blue-400 hover:underline">
            Projects
          </a>
        </motion.a>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.1 }}>
          <a href="#contact" className="hover:text-blue-400 hover:underline">
            Contact
          </a>
        </motion.a>
      </nav>

      {/* Mobile Hamburger */}
      <button onClick={toggleMenu} className="block md:hidden focus:outline-none">
        {/* Hamburger Icon */}
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center space-y-6 text-2xl"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-3xl">
              &times;
            </button>
            <a href="#home" onClick={toggleMenu} className="hover:text-blue-400 hover:underline font-poppins">
              Home
            </a>
            <a href="#about" onClick={toggleMenu} className="hover:text-blue-400 hover:underline font-poppins">
              About
            </a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-blue-400 hover:underline font-poppins">
              Projects
            </a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-blue-400 hover:underline font-poppins">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
