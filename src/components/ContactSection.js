import './ContactSection.css';
import ContactButton from './ContactButton';
import emailLogo from '../static/email.png';
import linkedinLogo from '../static/linkedin.png';
import githubLogo from '../static/github.png';

function ContactSection() {
  const contacts = [
    {
      label: 'Email',
      logo: emailLogo,
      content: 'marcoslancharodriguez@gmail.com',
    },
    {
      label: 'LinkedIn',
      logo: linkedinLogo,
      content: 'linkedin.com/in/marcos-lancha-rodríguez',
      link: 'https://www.linkedin.com/in/marcos-lancha-rodr%C3%ADguez/',
    },
    {
      label: 'GitHub',
      logo: githubLogo,
      content: 'github.com/MaarcosLR',
      link: 'https://github.com/MaarcosLR',
    },
  ];

  return (
    <div className="app-background">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-buttons">
        {contacts.map((c) => (
          <ContactButton key={c.label} {...c} />
        ))}
      </div>
    </div>
  );
}

export default ContactSection;
