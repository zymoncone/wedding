import "./Button.css";

const Button = ({text, address=""}) => {

  const handleClick = (e) => {
    e.preventDefault();
    window.open(address, "_blank");
  };

  return (
      <a className="button-60" href={address} onClick={handleClick}>{text}</a>
  );
}

export default Button;