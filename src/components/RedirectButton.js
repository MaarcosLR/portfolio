import './RedirectButton.css';

function RedirectButton({ label, link, fullWidth }) {
  return (
    <button
      className={`redirect-button ${fullWidth ? 'full-width' : ''}`}
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
    >
      {label}
    </button>
  );
}

export default RedirectButton;
