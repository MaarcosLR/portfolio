import './App.css';
import Header from './components/Header';
import BodyPresentation from './components/BodyPresentation';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />

      <section id="about" className="section">
        <BodyPresentation />
      </section>

      <section id="skills" className="section">
        <SkillsSection />
      </section>

      <section id="proyects" className="section">
        <ProjectsSection />
      </section>

      <section id="contact" className="section">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
