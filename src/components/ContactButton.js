import { useState } from 'react';
import './ContactButton.css';
import RedirectButton from './RedirectButton';

function ContactButton({ label, logo, content, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="contact-button"
      onClick={() => setExpanded(!expanded)}
    >
      <img src={logo} alt={label} className="contact-logo" />
      <span className="contact-label">{label}</span>

      <div
        className="contact-content-wrapper"
        style={{ maxHeight: expanded ? '70px' : '0px' }}
      >
        {link && (
          <div className="contact-content">
            <RedirectButton label="Ir al enlace" link={link} fullWidth />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactButton;
