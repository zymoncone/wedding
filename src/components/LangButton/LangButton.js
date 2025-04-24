import './LangButton.css';
import { US, PL } from 'country-flag-icons/react/1x1';

const LangButton = ({ toggableLang, setTogglableLang }) => {

  const handleClick = () => {
    if (toggableLang === "EN") {
      setTogglableLang("PL");
    } else if (toggableLang === "PL") {
      setTogglableLang("EN");
    };
  };

  return (
    <div className='lang-button' onClick={handleClick}>
      {toggableLang === "PL" ? <US title="United States" /> : <PL title="Poland" /> }
    </div>
  );
};

export default LangButton;