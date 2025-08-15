import Section from "../components/Section";

const experience = [
  {
    date: "2025 - Presente",
    title: "Desarrolladora Web Full Stack Jr.",
    company: "Proyectos: Switkor (web) y TravelQuest (app móvil)",
    description: "Desarrollo de aplicaciones full stack. En Switkor, generación automática de planes y dashboard; en TravelQuest, app de turismo gamificado con IA y validación de imágenes.",
    technologies:  ["Next.js", "NestJS", "Node.js (Express)", "MySQL", "TypeORM", "React Native (Expo)", "Supabase"]
  },
  {
    date: "2025",
    title: "Desarrolladora Full Stack y Team Leader en prácticas",
    company: "Alicante furtura",
    description: "Lideré el equipo durante mis prácticas en el bootcamp de Alicante Futura Lab, donde desarrollamos Travel Quest, una app móvil de turismo gamificado. Trabajando con metodologías ágiles, gestioné el proyecto y coordiné al equipo para cumplir plazos y objetivos.",
    technologies:  ["Node.js (Express)", "React Native (Expo)", "Supabase", "Google Cloud Vision API", "Google Gemini (Generative AI)", "Tailwind CSS"]
  },
  {
    date: "2015-2025",
    title: "Entrenadora personal",
    company: "Funziona, JG Fitness y freelance",
    description: "Desarrollé programas de entrenamiento personalizados, gestioné clientes y optimicé procesos administrativos. ",
    label: "Competencias:",
    technologies:  ["Comunicación efectiva",
      "Empatía",
      "Escucha activa",
      "Liderazgo",
      "Adaptabilidad",
      "Gestión del tiempo",
      "Resolución de problemas",
      "Trabajo en equipo",
      "Motivación y coaching",
      "Orientación a resultados"]
    },
  {
    date: "2005-2017",
    title: "Jugadora federada de baloncesto (2años semiprofesional)",
    company: "Olimpico 64, C.B. Bembibre y C.B. Alcobendas",
    description: "Mi experiencia en el deporte me ha enseñado la importancia de la disciplina, la organización y el trabajo en equipo.",
    label: "Competencias:",
    technologies:  ["Trabajo en equipo",
      "Gestión emocional",
      "Disciplina",
      "Resiliencia",
      "Comunicación en equipo",
      "Compromiso",
      "Gestión de la presión",
      "Orientación a objetivos",
      "Perseverancia",
      "Capacidad de concentración"
      ]
  }
  
];

const education = [
  {
    date: "2023 - 2025",
    title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    institution: "IES Mare Nostrum, Alicante",
    description: "Frontend, backend y bases de datos. Proyecto final: Switkor."
  },
  {
    date: "",
    title: "Licenciatura en Ciencias de la Actividad Física y del Deporte",
    institution: "Universidad Politécnica de Madrid",
    description: "Formación en salud, deporte y trabajo en equipo."
  },
  {
    date: "",
    title: "Inglés B1 (certificado)",
    institution: "",
    description: "Nivel intermedio acreditado."
  }
];

export default function Timeline() {
  return (
    <div>
      <Section id="experiencia" eyebrow="Experiencia" title="Experiencia Profesional">
        <div className="timeline">
          {experience.map((item) => (
            <div key={item.title} className="timeline-item">
              <time>{item.date}</time>
              <h4>{item.title}</h4>
              <p className="company">{item.company}</p>
              <p className="description">{item.description}</p>
              <div className="technologies">
                <span className="tech-label">
                  {item.label || "Tecnologías:"}
                </span>
                <div className="tech-tags">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tech-tag small">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="educacion" eyebrow="Formación" title="Educación y Certificaciones" className="section-education">
        <div className="timeline">
          {education.map((item) => (
            <div key={item.title} className="timeline-item">
              <time>{item.date}</time>
              <h4>{item.title}</h4>
              <p className="institution">{item.institution}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

