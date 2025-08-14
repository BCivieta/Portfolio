import Section from "../components/Section";

const experience = [
  {
    date: "2024 - Presente",
    title: "Desarrollador/a Fullstack",
    company: "",
    description: "",
    technologies: ["React", "Next.js", "TypeScript"]
  }
  
];

const education = [
  {
    date: "",
    title: "",
    institution: "",
    description: ""
  },
  {
    date: "",
    title: "",
    institution: "",
    description: ""
  },
  {
    date: "",
    title: "",
    institution: "",
    description: ""
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
                <span className="tech-label">Tecnologías:</span>
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

