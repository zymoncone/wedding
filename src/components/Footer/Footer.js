import "./Footer.css";

const footer_text = {
  'EN': "Questions? Email Us",
  'PL': "Masz pytania? Napisz do nas",
  'SP': "¿Preguntas? Envíanos un correo electrónico"
};

const Footer = ({ lang }) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <p className="footer-text">{footer_text[lang]}</p>
        <p className="footer-text"><a href="mailto:oyola.sarnowicz@gmail.com">oyola.sarnowicz@gmail.com</a></p>
        <p className="footer-text" style={{ margin: "2.5rem 0 0 0" }}>© Mayra & Szymon 2025</p>
      </footer>
    </div>
  );
}

export default Footer;