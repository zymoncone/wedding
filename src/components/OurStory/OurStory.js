import "./OurStory.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import { useAppContext } from "../SubRoot/SubRoot";
import { our_story_title,
         our_story_paragraph_1,
         our_story_paragraph_2,
         our_story_paragraph_3,
         our_story_paragraph_4,
         our_story_paragraph_5,
         our_story_gallery_title} from "../../assets/texts";

const OurStory = () => {
  const location = useLocation();

  const { togglableLang } = useAppContext();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="our-story">
      <h1>{our_story_title[togglableLang]}</h1>
      <p>
        {our_story_paragraph_1[togglableLang]}
      </p>
      <p>
        {our_story_paragraph_2[togglableLang]}
      </p>
      <p>
        {our_story_paragraph_3[togglableLang]}
      </p>
      <p>
        {our_story_paragraph_4[togglableLang]}
      </p>
      <p>
        {our_story_paragraph_5[togglableLang]}
      </p>
      <h1 style={{ margin: "50px 0 0 0" }}>{our_story_gallery_title[togglableLang]}</h1>
      <Gallery />
    </div>
  );
}

export default OurStory;