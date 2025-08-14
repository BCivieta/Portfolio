"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <nav>
        <Link className="brand" href="#inicio" onClick={closeMobileMenu}>
          Portfolio
        </Link>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Abrir menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#sobre-mi" onClick={closeMobileMenu}>Sobre mí</a></li>
          <li><a href="#proyectos" onClick={closeMobileMenu}>Proyectos</a></li>
          <li><a href="#experiencia" onClick={closeMobileMenu}>Experiencia</a></li>
          <li><a href="#educacion" onClick={closeMobileMenu}>Educación</a></li>
          <li><a href="#contacto" onClick={closeMobileMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

