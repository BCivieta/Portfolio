"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof window === "undefined") return;
    
    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      console.log("Vídeo cargado correctamente");
    };

    const handleError = (e: Event) => {
      console.error("Error cargando vídeo:", e);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(([e]) => {
        if (!video) return;
        if (e.isIntersecting) {
          video.play().catch((err) => console.log("No se pudo reproducir:", err));
        } else {
          video.pause();
        }
      });
      io.observe(video);
      return () => {
        io.disconnect();
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
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
        poster="/video/poster.jpg"
        preload="metadata"
        onLoadStart={() => console.log("Iniciando carga del vídeo")}
        onLoadedMetadata={() => console.log("Metadata del vídeo cargado")}
      >
        <source src="/video/space.webm" type="video/webm" />
        <source src="/video/space.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de vídeo.
      </video>
      <div className="overlay" />
      <div className="content">
        <h1>Hola, soy Tu Nombre</h1>
        <p className="lead">Frontend · UX · Animaciones sutiles · Next.js. Construyo interfaces rápidas, accesibles y con estética tech.</p>
        <div className="cta">
          <a className="btn primary" href="#proyectos">Ver proyectos</a>
          <a className="btn secondary" href="#trayectoria">Ver trayectoria</a>
        </div>
      </div>
      {!isVideoLoaded && (
        <div className="poster-fallback" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/video/poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
      )}
    </section>
  );
}

