import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <p className="footer-text">Questions? Email Us</p>
        <p className="footer-text"><a href="mailto:oyola.sarnowicz@gmail.com">oyola.sarnowicz@gmail.com</a></p>
        <p className="footer-text" style={{margin: "2.5rem 0 0 0"}}>© Mayra & Szymon 2024</p>
      </footer>
    </div>
  );
}

export default Footer;