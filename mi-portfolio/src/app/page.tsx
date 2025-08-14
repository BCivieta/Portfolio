import Hero from "../components/Hero";
import Section from "../components/Section";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main id="inicio">
      <Hero />
      
      <Section id="sobre-mi" title="Sobre mí" eyebrow="Quién eres">
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              ¡Hola! Soy un/a desarrollador/a full stack apasionado/a por crear experiencias digitales 
              que no solo se vean bien, sino que también funcionen de manera excepcional.
            </p>
            
            <p>
              Mi viaje en el desarrollo web comenzó hace más de 2 años, cuando empece a estudiar desarrollo de apllicaciones web. Me especializo 
              en Node.js, React, Next.js y TypeScript, pero también disfruto explorando nuevas herramientas 
              y frameworks que puedan mejorar la experiencia del usuario.
            </p>
            
            <p>
              Lo que más me motiva es la intersección entre código limpio, diseño atractivo y 
              rendimiento óptimo. Creo que la mejor aplicación es aquella que es invisible para 
              el usuario - simplemente funciona, y funciona bien.
            </p>
            
            <div className="skills-section">
              <h3>Habilidades principales</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <p>React, Next.js, TypeScript, CSS3, HTML5, Tailwind CSS</p>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <p>Node.js, Express, MongoDB, PostgreSQL, REST APIs</p>
                </div>
                <div className="skill-category">
                  <h4>Herramientas</h4>
                  <p>Git, Docker, AWS, Vercel, Figma, Jest</p>
                </div>
              </div>
            </div>
            
            <p>
              Cuando no estoy programando, me encontrarás explorando nuevas tendencias en UX/UI, 
              contribuyendo a proyectos de código abierto, o disfrutando de un buen café mientras 
              leo sobre las últimas innovaciones en tecnología web.
            </p>
            
            <div className="cta-section">
              <a href="#proyectos" className="btn primary">Ver mis proyectos</a>
              <a href="#contacto" className="btn secondary">Contactar</a>
            </div>
          </div>
        </div>
      </Section>
      
      <Projects />
      <Timeline />
      
      <Section id="contacto" title="¿Trabajamos juntos?" eyebrow="Contacto">
        <div className="contact-content">
          <p>
            ¿Tienes un proyecto en mente? ¿Buscas un desarrollador/a que pueda llevar tus ideas 
            al siguiente nivel? Me encantaría escuchar sobre tu proyecto y ver cómo podemos 
            colaborar para hacerlo realidad.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h4>📧 Email</h4>
              <a href="mailto:tu@email.com">mi@email.com</a>
            </div>
            <div className="contact-method">
              <h4>💼 LinkedIn</h4>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/tuusuario
              </a>
            </div>
            <div className="contact-method">
              <h4>🐙 GitHub</h4>
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                github.com/miusuario
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
