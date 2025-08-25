"use client";
import Image from "next/image";
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // ➜ Cerrar al cambiar el hash (#sobre-mi, #proyectos…)
  useEffect(() => {
    const onHash = () => setIsMobileMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // ➜ Cerrar al pasar a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ➜ Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ➜ Bloquear scroll del body cuando está abierto (y reponer luego)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <nav>
        <Link className="brand" href="#inicio" onClick={closeMobileMenu}>
          <Image 
            src="/image/logo.png" 
            alt="Logo Blanca Civieta" 
            width={40} 
            height={40} 
            priority 
          />
           <span>Portfolio</span>
        </Link>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span><span></span><span></span>
        </button>

        {/* Backdrop clickable para cerrar al tocar fuera */}
        {isMobileMenuOpen && <div className="nav-backdrop" onClick={closeMobileMenu} />}

        <ul id="primary-navigation" className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
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

