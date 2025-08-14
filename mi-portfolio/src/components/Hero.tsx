"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof window === "undefined") return;
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(([e]) => {
        if (!video) return;
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
      io.observe(video);
      return () => io.disconnect();
    }
  }, []);

  return (
    <section className="hero" aria-label="Presentación">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/video/space.webm" type="video/webm" />
        <source src="/video/space.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />
      <div className="content">
        <h1>Hola, soy Blanca Civieta</h1>
        <p className="lead">Fullstack · Node · Next.js. Lógica, creatividad y trabajo en equipo.</p>
        <div className="cta">
          <a className="btn primary" href="#proyectos">Ver proyectos</a>
          <a className="btn secondary" href="#trayectoria">Ver trayectoria</a>
        </div>
      </div>
    </section>
  );
}

