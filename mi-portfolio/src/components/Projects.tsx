import Section from "../components/Section";
import Image from "next/image";

const demoProjects = [
  {
    title: "Switkor",
    description:
      "Aplicación web que genera planes de entrenamiento físico personalizados según objetivos, nivel, disponibilidad y sexo. Incluye base de datos de ejercicios, planificación automática y un dashboard con calendario y métricas de progreso.",
    technologies:  ["Next.js", "NestJS", "MySQL", "Tailwind CSS", "TypeORM"],
    liveUrl: "https://switkor.blancacivieta.es",
    githubUrl: "https://github.com/BCivieta/Switkor",
    image: "/projects/Switkor-mok.png",
    tags: ["Full Stack", "Fitness", "Planificación"]
  },
  {
    title: "E-commerce React",
    description:
      "Tienda online completa con carrito de compras, sistema de pagos integrado, gestión de productos y panel de administración. Diseño responsive y optimizado para SEO.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/tuusuario/react-ecommerce",
    image: "/projects/ecommerce.jpg",
    tags: ["E-commerce", "Full-stack", "Payment"]
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio moderno con hero en vídeo, efectos parallax sutiles inspirados en Alicante Futura Lab, y diseño optimizado para dispositivos móviles.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    liveUrl: "https://mi-portfolio.vercel.app",
    githubUrl: "https://github.com/tuusuario/portfolio",
    image: "/projects/portfolio.jpg",
    tags: ["Portfolio", "Design", "Animation"]
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación de productividad con drag & drop, categorización inteligente, recordatorios y sincronización en tiempo real entre dispositivos.",
    technologies: ["Vue.js", "Firebase", "PWA", "IndexedDB", "Vuetify"],
    liveUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/tuusuario/task-manager",
    image: "/projects/task-manager.jpg",
    tags: ["Productivity", "PWA", "Real-time"]
  }
];

export default function Projects() {
  return (
    <Section id="proyectos" eyebrow="Trabajos" title="Proyectos seleccionados">
      <div className="projects-grid">
        {demoProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image">
              <Image
                src={project.image}
                alt={`Captura de pantalla de ${project.title}`}
                width={400}
                height={250}
                className="project-thumbnail"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                <h4>Tecnologías utilizadas:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-small primary"
                >
                  Ver en vivo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-small secondary"
                >
                  Código en GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

