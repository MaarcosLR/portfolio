import { useState, useEffect } from 'react';
import './Header.css';
import Home from '../static/casa.png';

const links = [
  { id: 'home', label: 'Home', isLogo: true },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'proyects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const headerHeight = 50;

  // Scroll spy + detectar scroll para sombra
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0); // true si estamos scrolleando

      let closestSection = 'home';
      let minDistance = Infinity;

      links.forEach(link => {
        const section = document.getElementById(link.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerHeight - window.innerHeight / 4);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = link.id;
        }
      });

      setActiveLink(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  return (
    <nav className={`App-nav ${scrolled ? 'scrolled' : ''}`}>
      {links.map(link => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`${link.isLogo ? 'logo' : ''} ${activeLink === link.id ? 'active' : ''}`}
          onClick={handleClick(link.id)}
        >
          {link.isLogo ? <img src={Home} alt="Home" /> : link.label}
        </a>
      ))}
    </nav>
  );
}

export default Header;
