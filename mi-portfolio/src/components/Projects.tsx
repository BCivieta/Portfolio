import Section from "../components/Section";
import Image from "next/image";

const demoProjects = [
  {
    title: "Switkor",
    description:
      "Aplicación web que genera planes de entrenamiento físico personalizados según objetivos, nivel, disponibilidad y sexo. Incluye base de datos de ejercicios, planificación automática y un dashboard con calendario y métricas de progreso.",
    technologies:  ["Next.js", "NestJS", "Supabase", "Tailwind CSS", "TypeORM"],
    liveUrl: "https://switkor.blancacivieta.es",
    githubUrl: "https://github.com/BCivieta/Switkor",
    image: "/projects/Switkor.gif",
    tags: ["Full Stack", "Fitness", "Planificación"]
  },
  {
    title: "Travel Quest",
    description:
      "App móvil de turismo gamificado que genera misiones con IA, valida imágenes con Google Cloud Vision, ofrece rankings y diarios de viaje, e incluye chat en tiempo real.",
    technologies: ["React Native (Expo Router)",
    "JavaScript",
    "Node.js (Express)",
    "Supabase",
    "Google Cloud Vision API",
    "Google Gemini (Generative AI)",
    "Tailwind CSS"],
    githubUrl: "https://github.com/BCivieta/TravelQuest",
    image: "/projects/TravelQuest.png",
    tags: ["Mobile", "IA", "Gamificación"]
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio moderno con hero en vídeo, efectos parallax y diseño optimizado para dispositivos móviles.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    liveUrl: "https://blancacivieta.es",
    githubUrl: "https://github.com/BCivieta/portfolio",
    image: "/projects/portfolio.png",
    tags: ["Portfolio", "Design", "Animation"]
  },
];

export default function Projects() {
  return (
    <Section id="proyectos" eyebrow="Trabajos" title="Proyectos">
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

