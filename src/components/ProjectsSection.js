import './ProjectsSection.css';

const projects = [
  { name: 'Proyecto 1', link: 'https://github.com/usuario/proyecto1' },
  { name: 'Proyecto 2', link: 'https://github.com/usuario/proyecto2' },
  { name: 'Proyecto 3', link: 'https://github.com/usuario/proyecto3' },
];

function ProjectsSection() {
  return (
    <div className="app-background">
      <div className="projects-section-content">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-container">
          {projects.map(project => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
