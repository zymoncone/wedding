import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import "./OurStory.css";

const OurStory = () => {
  const location = useLocation();

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
      <h1>How We Met</h1>
      <p>
        We met in 2015 at a mutual friend's birthday party. We hit it off
        immediately and have been together ever since. We got engaged in 2019
        and are excited to celebrate our wedding with you!
      </p>
      <h1>Our Engagement</h1>
      <Gallery />
    </div>
  );
}

export default OurStory;