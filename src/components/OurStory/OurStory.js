import Gallery from "../Gallery/Gallery";
import "./OurStory.css";

const OurStory = () => {
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