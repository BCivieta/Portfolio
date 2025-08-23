import Hero from "../components/Hero";
import Section from "../components/Section";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main id="inicio">
      <Hero />
      
      <Section id="sobre-mi" title="Sobre mí" eyebrow="Quién soy">
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
                Soy desarrolladora Full Stack con formación en Desarrollo de Aplicaciones Web
                y una sólida trayectoria previa en el ámbito del deporte y la salud, que me ha dado disciplina, organización y trabajo en equipo
            </p>
            
            <p>
              Me apasiona la combinación de lógica, creatividad y aprendizaje constante que ofrece 
              el desarrollo. Disfruto trabajando en equipo, compartiendo ideas y creando 
              soluciones.
            </p>
            
            <p>
              Mi perfil se caracteriza por la organización, la empatía y la capacidad de adaptación, 
              cualidades que me permiten afrontar nuevos retos y colaborar de forma efectiva 
              en entornos dinámicos.
            </p>
            
            <div className="skills-section">
              <h3>Habilidades principales</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <p> React, Next.js,TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</p>
                </div>
                <div className="skill-category">
                  <h4>Backend & Bases de datos</h4>
                  <p>Node.js, Express, NestJS,  REST APIs, MySQL, Supabase, TypeORM, SQL</p>
                </div>
                <div className="skill-category">
                  <h4>Cloud & Herramientas</h4>
                  <p> Git, GitHub, Figma, Vercel, Render, AWS</p>
                </div>
              </div>
            </div>

             <div className="skills-section">
              <h3>Otras tecnologías utilizadas en mi aprendizaje y proyectos</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend & Mobile</h4>
                  <p>React Native (Expo Router), Vue, Angular, Bootstrap</p>
                </div>
                <div className="skill-category">
                  <h4>Backend & Bases de datos</h4>
                  <p>C#, .NET, .NET Core</p>
                </div>
                <div className="skill-category">
                  <h4>Cloud & Herramientas</h4>
                  <p>Azure</p>
                </div>
              </div>
            </div>
            
            <p>
               Mi objetivo es seguir creciendo como profesional, mejorar mis competencias técnicas 
                y participar en proyectos que supongan un reto.
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
            Si buscas una desarrolladora Full Stack con ganas de aprender, aportar y adaptarse a distintos proyectos, me encantaría tener la oportunidad de colaborar en tu equipo.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h4>📧 Email</h4>
              <a href="mailto:blancacivieta@gmail.com">blancacivieta@gmail.com</a>
            </div>
            <div className="contact-method">
              <h4>💼 LinkedIn</h4>
              <a href="https://www.linkedin.com/in/blanca-felisa-civieta-bermejo-9104a1348/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/blanca-felisa-civieta-bermejo-9104a1348
              </a>
            </div>
            <div className="contact-method">
              <h4>🐙 GitHub</h4>
              <a href="https://github.com/BCivieta" target="_blank" rel="noopener noreferrer">
                github.com/BCivieta
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
