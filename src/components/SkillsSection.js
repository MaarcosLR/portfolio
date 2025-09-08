import './SkillsSection.css';

const skills = [
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'Spring', logo: '/logos/spring.png' },
  { name: 'Hibernate', logo: '/logos/hibernate.png' },
  { name: 'SQL Server', logo: '/logos/sqlserver.png' },
  { name: 'HTML', logo: '/logos/html.png' },
  { name: 'CSS', logo: '/logos/css.png' },
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'Git', logo: '/logos/git.png' },
];

function SkillsSection() {
  return (
    <div className="app-background">
      <div className="skills-section-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <img src={skill.logo} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
