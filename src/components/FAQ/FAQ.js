import "./FAQ.css";
import Collapsible from "../Collapsible/Collapsible";
import { useAppContext } from "../SubRoot/SubRoot";
import {
  faq,
  faq_title,
} from "../../assets/texts";

const FAQ = () => {

  const { togglableLang } = useAppContext();

  return (
    <div className="faq-container">
      <div className="faq-title">
        {faq_title[togglableLang]}
      </div>
      <div className="collapsible-container">
        {faq[togglableLang].map((item, idx) => {
          return (
            <Collapsible
              key={idx}
              heading={item.question}
            >
              <div className="faq-answer">
              {item.answer}
              </div>
            </Collapsible>
          )
        })}
      </div>
    </div>
  )
};

export default FAQ;